// This is a special script designed to reconstruct the entire project structure.
// It contains the content of all necessary project files.

const projectFiles = {
  ".env": ``,
  "README.md": `# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
`,
  "apphosting.yaml": `# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
`,
  "components.json": `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
`,
  "docs/backend.json": `{
  "entities": {
    "User": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "User",
      "type": "object",
      "description": "Represents a user of the Amazon Best Picks application.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the user.",
          "format": "uuid"
        },
        "email": {
          "type": "string",
          "description": "Email address of the user.",
          "format": "email"
        },
        "username": {
          "type": "string",
          "description": "Username of the user."
        },
        "profileName": {
          "type": "string",
          "description": "The name of the profile."
        }
      },
      "required": [
        "id",
        "email",
        "username",
        "profileName"
      ]
    },
    "Product": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Product",
      "type": "object",
      "description": "Represents a product listed on Amazon.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the product (e.g., ASIN).",
          "format": "uuid"
        },
        "title": {
          "type": "string",
          "description": "Title of the product."
        },
        "description": {
          "type": "string",
          "description": "Detailed description of the product."
        },
        "imageUrl": {
          "type": "string",
          "description": "URL of the product image.",
          "format": "uri"
        },
        "price": {
          "type": "number",
          "description": "Current price of the product."
        },
        "amazonUrl": {
          "type": "string",
          "description": "URL of the product on Amazon.",
          "format": "uri"
        }
      },
      "required": [
        "id",
        "title",
        "description",
        "imageUrl",
        "price",
        "amazonUrl"
      ]
    },
    "Category": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Category",
      "type": "object",
      "description": "Represents a category of products.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the category.",
          "format": "uuid"
        },
        "name": {
          "type": "string",
          "description": "Name of the category."
        },
        "description": {
          "type": "string",
          "description": "Description of the category."
        },
        "parentId": {
          "type": "string",
          "description": "Reference to the parent category. Null if it's a top-level category. (Relationship: Category 1:N Category)",
          "format": "uuid"
        }
      },
      "required": [
        "id",
        "name",
        "description"
      ]
    },
    "ProductCategory": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "ProductCategory",
      "type": "object",
      "description": "Represents the relationship between a product and a category.",
      "properties": {
        "productId": {
          "type": "string",
          "description": "Reference to Product. (Relationship: Product N:N Category)",
          "format": "uuid"
        },
        "categoryId": {
          "type": "string",
          "description": "Reference to Category. (Relationship: Product N:N Category)",
          "format": "uuid"
        }
      },
      "required": [
        "productId",
        "categoryId"
      ]
    },
    "Favorite": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "Favorite",
      "type": "object",
      "description": "Represents a product saved as a favorite by a user.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the favorite item.",
          "format": "uuid"
        },
        "userId": {
          "type": "string",
          "description": "Reference to User. (Relationship: User 1:N Favorite)",
          "format": "uuid"
        },
        "productId": {
          "type": "string",
          "description": "Reference to Product. (Relationship: Product 1:N Favorite)",
          "format": "uuid"
        },
        "addedAt": {
          "type": "string",
          "description": "Timestamp when the product was added to favorites.",
          "format": "date-time"
        }
      },
      "required": [
        "id",
        "userId",
        "productId",
        "addedAt"
      ]
    },
    "ReviewSummaryConfig": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "ReviewSummaryConfig",
      "type": "object",
      "description": "Configuration for summarizing product reviews.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the configuration.",
          "format": "uuid"
        },
        "feature": {
          "type": "string",
          "description": "The review feature to summarise."
        },
        "description": {
          "type": "string",
          "description": "Description of the review summary config."
        }
      },
      "required": [
        "id",
        "feature",
        "description"
      ]
    },
    "AffiliateLink": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "AffiliateLink",
      "type": "object",
      "description": "Stores affiliate link associated with a product.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier of the affiliate link.",
          "format": "uuid"
        },
        "productId": {
          "type": "string",
          "description": "Reference to Product. (Relationship: Product 1:1 AffiliateLink)",
          "format": "uuid"
        },
        "affiliateUrl": {
          "type": "string",
          "description": "The actual generated affiliate URL.",
          "format": "uri"
        }
      },
      "required": [
        "id",
        "productId",
        "affiliateUrl"
      ]
    }
  },
  "auth": {
    "providers": [
      "password",
      "anonymous"
    ]
  },
  "firestore": {
    "structure": [
      {
        "path": "/users/{userId}",
        "definition": {
          "entityName": "User",
          "schema": {
            "$ref": "#/backend/entities/User"
          },
          "description": "Stores user profile data. Only the user can read/write their own profile.",
          "params": [
            {
              "name": "userId",
              "description": "The unique identifier of the user."
            }
          ]
        }
      },
      {
        "path": "/products/{productId}",
        "definition": {
          "entityName": "Product",
          "schema": {
            "$ref": "#/backend/entities/Product"
          },
          "description": "Stores product information. Publicly readable.",
          "params": [
            {
              "name": "productId",
              "description": "The unique identifier of the product (ASIN)."
            }
          ]
        }
      },
      {
        "path": "/categories/{categoryId}",
        "definition": {
          "entityName": "Category",
          "schema": {
            "$ref": "#/backend/entities/Category"
          },
          "description": "Stores product categories. Publicly readable.",
          "params": [
            {
              "name": "categoryId",
              "description": "The unique identifier of the category."
            }
          ]
        }
      },
      {
        "path": "/product_categories/{productCategoryId}",
        "definition": {
          "entityName": "ProductCategory",
          "schema": {
            "$ref": "#/backend/entities/ProductCategory"
          },
          "description": "Stores the relationship between products and categories. Publicly readable.",
          "params": [
            {
              "name": "productCategoryId",
              "description": "The unique identifier of the product category association."
            }
          ]
        }
      },
      {
        "path": "/users/{userId}/favorites/{favoriteId}",
        "definition": {
          "entityName": "Favorite",
          "schema": {
            "$ref": "#/backend/entities/Favorite"
          },
          "description": "Stores user's favorite products. Includes denormalized 'userId' for authorization independence. Only the user can manage their own favorites.",
          "params": [
            {
              "name": "userId",
              "description": "The unique identifier of the user."
            },
            {
              "name": "favoriteId",
              "description": "The unique identifier of the favorite item."
            }
          ]
        }
      },
      {
        "path": "/review_summary_configs/{configId}",
        "definition": {
          "entityName": "ReviewSummaryConfig",
          "schema": {
            "$ref": "#/backend/entities/ReviewSummaryConfig"
          },
          "description": "Stores configurations for summarizing product reviews. Only accessible to admins.",
          "params": [
            {
              "name": "configId",
              "description": "The unique identifier of the review summary configuration."
            }
          ]
        }
      },
      {
        "path": "/affiliate_links/{affiliateLinkId}",
        "definition": {
          "entityName": "AffiliateLink",
          "schema": {
            "$ref": "#/backend/entities/AffiliateLink"
          },
          "description": "Stores affiliate links associated with a product. Only accessible to admins.",
          "params": [
            {
              "name": "affiliateLinkId",
              "description": "The unique identifier of the affiliate link."
            }
          ]
        }
      }
    ],
    "reasoning": "The Firestore structure is designed to be secure, scalable, and easily debuggable, adhering to the core principles of Authorization Independence, Clarity of Intent, DBAC (Database-Based Access Control), and QAPs (Rules are not Filters). Authorization Independence is achieved through denormalization, specifically by including necessary authorization data (like \`userId\` in \`favorites\`) directly within documents, avoiding the need for \`get()\` calls in security rules.\\n\\nStructural Segregation ensures that each collection has a homogeneous security posture. User-specific data (favorites) is stored under the \`/users/{userId}\` path, enabling simple path-based access control. Product and Category data, which are globally accessible, are stored in separate collections. ReviewSummaryConfigs are also segregated as they are only managed by admins.\\n\\nAccess Modeling follows consistent patterns: User-owned data utilizes hierarchical paths (\`/users/{userId}/favorites/{favoriteId}\`), and administrative data is managed through dedicated collections and existence checks.\\n\\nThis structure supports secure \`list\` operations (QAPs) by ensuring that rules do not act as filters. Rules can grant or deny access to entire collections or documents based on the user's authentication status and path-based ownership, without needing to iterate through data to make access decisions.\\n\\nInvariants like ownership, timestamps, and denormalized data consistency are ensured through security rules that validate writes based on these properties. For example, the \`userId\` in a \`favorite\` document cannot be changed after creation, ensuring data integrity."
  }
}
`,
  "firestore.rules": `
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    match /users/{userId} {
      allow read, write: if isOwner(userId);
    }

    match /products/{productId} {
      allow read: if true;
      allow write: if isSignedIn();
    }

    match /categories/{categoryId} {
      allow read: if true;
      allow write: if isSignedIn();
    }

    match /product_categories/{productCategoryId} {
        allow read: if true;
        allow write: if isSignedIn();
    }

    match /users/{userId}/favorites/{favoriteId} {
        allow read, write: if isOwner(userId);
    }
    
    match /review_summary_configs/{configId} {
        allow read, write: if isSignedIn();
    }

    match /affiliate_links/{affiliateLinkId} {
        allow read, write: if isSignedIn();
    }

    match /settings/site {
      allow get: if true;
      allow write: if isSignedIn();
    }

    match /pages/{pageId} {
      allow read: if true;
      allow write: if isSignedIn();
    }

     match /navigation/{navId} {
      allow read: if true;
      allow write: if isSignedIn();
    }
  }
}

service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read access on all files.
    match /{allPaths=**} {
      allow read: if true;
    }
    // Allow authenticated users to write to the 'products' folder.
    match /products/{allPaths=**} {
      allow write: if request.auth != null;
    }
  }
}

`,
  "next.config.ts": `import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cbu01.alicdn.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'img.alicdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
`,
  "package.json": `{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "repository": {
    "type": "git",
    "url": "https://github.com/hepanblock1234-lgtm/hepanblock.git"
  },
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "NODE_ENV=production next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "db:seed": "tsx src/scripts/seed-db.ts"
  },
  "dependencies": {
    "@genkit-ai/google-genai": "^1.20.0",
    "@genkit-ai/next": "^1.20.0",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "firebase-admin": "^12.3.0",
    "genkit": "^1.20.0",
    "lucide-react": "^0.475.0",
    "next": "15.5.9",
    "patch-package": "^8.0.0",
    "react": "^19.2.1",
    "react-day-picker": "^9.11.3",
    "react-dom": "^19.2.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^9.0.1",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19.2.1",
    "@types/react-dom": "^19.2.1",
    "@types/uuid": "^9.0.8",
    "genkit-cli": "^1.20.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "tsx": "^4.16.2",
    "typescript": "^5"
  }
}
`,
  "src/ai/dev.ts": `import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-customer-reviews.ts';
`,
  "src/ai/flows/summarize-customer-reviews.ts": `'use server';
/**
 * @fileOverview Summarizes customer reviews for a product.
 *
 * - summarizeCustomerReviews - A function that summarizes customer reviews.
 * - SummarizeCustomerReviewsInput - The input type for the summarizeCustomerReviews function.
 * - SummarizeCustomerReviewsOutput - The return type for the summarizeCustomerReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerReviewsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  customerReviews: z.string().describe('The customer reviews of the product.'),
  summaryFeatures: z.string().describe('The features to summarise in the reviews.'),
});
export type SummarizeCustomerReviewsInput = z.infer<
  typeof SummarizeCustomerReviewsInputSchema
>;

const SummarizeCustomerReviewsOutputSchema = z.object({
  summary: z.string().describe('The summary of the customer reviews.'),
});
export type SummarizeCustomerReviewsOutput = z.infer<
  typeof SummarizeCustomerReviewsOutputSchema
>;

export async function summarizeCustomerReviews(
  input: SummarizeCustomerReviewsInput
): Promise<SummarizeCustomerReviewsOutput> {
  return summarizeCustomerReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerReviewsPrompt',
  input: {schema: SummarizeCustomerReviewsInputSchema},
  output: {schema: SummarizeCustomerReviewsOutputSchema},
  prompt: \`You are an expert in summarizing customer reviews for products. Given the product name, customer reviews, and summary features, you will generate a summary of the customer reviews.\\n\\nProduct Name: {{{productName}}}\\nCustomer Reviews: {{{customerReviews}}}\\nSummary Features: {{{summaryFeatures}}}\\n\\nSummary: \`,
});

const summarizeCustomerReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerReviewsFlow',
    inputSchema: SummarizeCustomerReviewsInputSchema,
    outputSchema: SummarizeCustomerReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
`,
  "src/ai/genkit.ts": `import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
`,
  "src/app/(main)/category/[id]/page.tsx": `import { notFound } from 'next/navigation';
import type { Category } from '@/lib/types';
import { ProductCard } from '@/components/products/product-card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Fragment } from 'react';
import { PackageOpen } from 'lucide-react';
import { getCategories, getCategory, getProductsByCategoryId } from '@/firebase/firestore/queries';

export const dynamic = 'force-dynamic';

const getCategoryAndChildrenIds = (categoryId: string, allCategories: Category[]): string[] => {
  const ids: string[] = [categoryId];
  const children = allCategories.filter(c => c.parentId === categoryId);
  for (const child of children) {
    ids.push(...getCategoryAndChildrenIds(child.id, allCategories));
  }
  return ids;
};

const getBreadcrumbPath = (categoryId: string, allCategories: Category[]): Category[] => {
    const path: Category[] = [];
    let current = allCategories.find(c => c.id === categoryId);
    while (current) {
        path.unshift(current);
        current = allCategories.find(c => c.id === current.parentId);
    }
    return path;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  // Return an empty array to indicate that all paths are dynamically generated
  if (!categories || categories.length === 0) {
    return [];
  }
  return categories.map(category => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id;
  const category = await getCategory(categoryId);

  if (!category) {
    notFound();
  }
  
  const allCategories = await getCategories();
  const allCategoryIds = getCategoryAndChildrenIds(categoryId, allCategories);
  const products = await getProductsByCategoryId(allCategoryIds);
  const breadcrumbPath = getBreadcrumbPath(categoryId, allCategories);

  return (
    <div className="space-y-6">
       <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbPath.map((item, index) => (
             <Fragment key={item.id}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                {index === breadcrumbPath.length - 1 ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                ) : (
                    <BreadcrumbLink asChild>
                        <Link href={\`/category/\${item.id}\`}>{item.name}</Link>
                    </BreadcrumbLink>
                )}
                </BreadcrumbItem>
             </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">{category.name}</h1>
        <p className="text-muted-foreground">Browse all the best products in the "{category.name}" category.</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center border-2 border-dashed rounded-lg py-20">
            <PackageOpen className="w-16 h-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">No Products Yet</h2>
            <p className="text-muted-foreground">We're working on adding more products. Please check back later.</p>
        </div>
      )}
    </div>
  );
}
`,
  "src/app/(main)/layout.tsx": `import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Suspense } from 'react';
import { getSettings, getNavigationLinks } from '@/firebase/firestore/queries';
import { AppFooter } from '@/components/layout/app-footer';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  const navLinks = await getNavigationLinks();

  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <Header settings={settings} navLinks={navLinks} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Suspense>{children}</Suspense>
          </main>
          <AppFooter settings={settings} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
`,
  "src/app/(main)/page.tsx": `import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/product-card';
import Link from 'next/link';
import { getProducts, getSettings } from '@/firebase/firestore/queries';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const settings = await getSettings();
  const products = await getProducts(8);

  const heroImage = settings?.heroImage;

  return (
    <div className="space-y-8">
      {heroImage && (
         <section className="relative w-full h-80 overflow-hidden rounded-xl">
            <Image
              src={heroImage.url}
              alt={heroImage.alt || 'Hero Image'}
              fill
              className="object-cover"
              data-ai-hint="house product"
              priority
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 text-white">
            <h1 className="text-3xl sm:text-4xl font-headline font-bold mb-2">{heroImage.title}</h1>
            <p className="text-base sm:text-lg max-w-2xl mb-4">
             {heroImage.description}
            </p>
            {heroImage.ctaLink && heroImage.ctaText && (
               <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                 <Link href={heroImage.ctaLink}>{heroImage.ctaText}</Link>
               </Button>
            )}
          </div>
        </section>
      )}

      <section id="products">
        <h2 className="text-3xl font-headline font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
`,
  "src/app/(main)/products/[id]/page.tsx": `import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, StarHalf, MessageSquare, ShoppingCart, CheckCircle, XCircle, Video, Landmark, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { getProduct, getProducts, getSettings } from '@/firebase/firestore/queries';
import { format } from 'date-fns';
import { type Product, type Settings } from '@/lib/types';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

function generateProductJsonLd(product: Product, settings: Settings | null) {
  const productData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrl,
    "description": product.reviewArticle,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": settings?.siteName || "BestReviewZhub"
    },
    ...(product.reviews && product.reviews.length > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating.toFixed(1),
        "reviewCount": product.reviews.length
      },
      "review": product.reviews.map(review => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": review.author },
        "datePublished": review.createdAt,
        "reviewBody": review.text,
        "name": review.title,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString()
        }
      }))
    }),
    "offers": {
      "@type": "Offer",
      "url": product.affiliateLink,
      "priceCurrency": "USD",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock"
    }
  };
  return JSON.stringify(productData);
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const productId = params.id;
    const product = await getProduct(productId);
    const settings = await getSettings();

    if (!product) {
        return {
            title: 'Product Not Found'
        }
    }

    const replaceTags = (template: string) => template
        .replace(/{Product Name}/g, product.name)
        .replace(/{Site Name}/g, settings?.siteName || 'BestReviewZhub');

    const title = replaceTags(settings?.seo.product.title || '{Product Name} Review | {Site Name}');
    const description = replaceTags(settings?.seo.product.description || \`In-depth review of \${product.name}. Discover pros, cons, and if it's the right choice for you.\`);
    const keywords = replaceTags(settings?.seo.product.keywords || \`\${product.name}, review, details, specs\`);
    
    return {
        title,
        description,
        keywords,
    }
}


export async function generateStaticParams() {
  const products = await getProducts();
  // Return an empty array to indicate that all paths are dynamically generated
  if (!products || products.length === 0) {
    return [];
  }
  return products.map(product => ({
    id: product.id,
  }));
}

const getEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    
    try {
        const urlObj = new URL(url);
        // YouTube
        if (urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be')) {
            const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
            if (videoId) return \`https://www.youtube.com/embed/\${videoId}\`;
        }
        // Twitter (X) - use a third-party embed service
        if (urlObj.hostname.includes('twitter.com') || urlObj.hostname.includes('x.com')) {
            return \`https://twitframe.com/show?url=\${encodeURIComponent(url)}\`;
        }
        // Reddit - append ?embed=true
        if (urlObj.hostname.includes('reddit.com') && urlObj.pathname.includes('/comments/')) {
            return url.split('?')[0] + '?embed=true';
        }
    } catch (e) {
        console.error("Invalid URL for embedding:", e);
        return null;
    }
    
    return null;
}


export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  const settings = await getSettings();


  if (!product) {
    notFound();
  }
  
  const jsonLd = generateProductJsonLd(product, settings);


  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => <Star key={\`full-\${i}\`} className="w-5 h-5 fill-accent text-accent" />)}
        {halfStar === 1 && <StarHalf key="half" className="w-5 h-5 fill-accent text-accent" />}
        {[...Array(emptyStars)].map((_, i) => <Star key={\`empty-\${i}\`} className="w-5 h-5 text-muted-foreground/50" />)}
      </div>
    );
  };

  const validVideos = product.videos?.map(video => ({
    ...video,
    embedUrl: getEmbedUrl(video.url)
  })).filter(video => video.embedUrl);

  const adminEmail = settings?.wholesaleEmail || "admin@example.com";

  return (
    <div className="space-y-12">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
                <div className="aspect-square w-full overflow-hidden rounded-xl shadow-lg">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint={product.imageHint}
                    unoptimized
                />
                </div>
                {product.reviews && product.reviews.length > 0 && (
                    <div className="space-y-4" id="reviews">
                        <Separator />
                        <h2 className="text-2xl font-bold font-headline">All Reviews</h2>
                        {product.reviews.map(review => (
                        <Card key={review.id}>
                            <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-base">{review.author}</CardTitle>
                                {renderStars(review.rating)}
                            </div>
                            <CardDescription className='flex justify-between items-center'>
                                <span>{review.title}</span>
                                {review.createdAt && !isNaN(new Date(review.createdAt).getTime()) ? (
                                    <span className="text-xs text-muted-foreground">
                                        {format(new Date(review.createdAt), "MMMM d, yyyy")}
                                    </span>
                                ) : null}
                            </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap break-words">{review.text}</p>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                )}
            </div>
            <div className="space-y-6">
                <div>
                <h1 className="text-3xl lg:text-4xl font-headline font-bold">{product.name}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center gap-2">
                    {renderStars(product.rating)}
                    <span className="text-muted-foreground text-sm font-medium">{product.rating.toFixed(1)} / 5</span>
                    </div>
                    {product.reviews && product.reviews.length > 0 && (
                        <>
                            <Separator orientation='vertical' className='h-4' />
                            <a href="#reviews" className="text-muted-foreground text-sm hover:underline">
                                ({product.reviews.length} reviews)
                            </a>
                        </>
                    )}
                </div>
                </div>
                
                <div className="space-y-4">
                <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.wholesale && product.wholesale.length > 0 && (
                    <Card className="bg-secondary/50 border-secondary">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <Landmark className="w-5 h-5 text-muted-foreground" />
                                <span>Wholesale Available</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className='text-sm text-muted-foreground space-y-1 list-disc pl-5'>
                                {product.wholesale.map((tier, i) => (
                                    <li key={i}>
                                        Order <span className='font-bold'>{tier.minQuantity}+</span> for <span className="font-bold text-primary">${tier.price.toFixed(2)}</span> each.
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}
                </div>

                <div className='flex flex-col gap-3'>
                    {product.wholesale && product.wholesale.length > 0 && (
                        <Button asChild size="lg" variant="outline" className="w-full text-lg">
                            <a href={\`mailto:\${adminEmail}?subject=Wholesale Inquiry for \${product.name}\`}>
                                <Mail className="mr-2 h-5 w-5" />
                                Contact for Wholesale
                            </a>
                        </Button>
                    )}
                    <Button asChild size="lg" className="w-full text-lg">
                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Buy on Amazon
                        </a>
                    </Button>
                     <p className="text-xs text-muted-foreground text-center">As an Amazon Associate, I earn from qualifying purchases.</p>
                </div>
                <Separator />
                
                {(product.pros && product.pros.length > 0) || (product.cons && product.cons.length > 0) ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {product.pros && product.pros.length > 0 && (
                            <div>
                                <h3 className='font-bold mb-3 flex items-center gap-2 text-green-600'>
                                    <CheckCircle className='w-5 h-5' />
                                    Pros
                                </h3>
                                <ul className='space-y-2 text-sm'>
                                    {product.pros.map((pro, i) => (
                                        <li key={i} className='flex items-start gap-2'>
                                            <CheckCircle className='w-4 h-4 mt-0.5 shrink-0 text-green-600/50' />
                                            <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {product.cons && product.cons.length > 0 && (
                            <div>
                                <h3 className='font-bold mb-3 flex items-center gap-2 text-red-600'>
                                    <XCircle className='w-5 h-5' />
                                    Cons
                                </h3>
                                <ul className='space-y-2 text-sm'>
                                    {product.cons.map((con, i) => (
                                        <li key={i} className='flex items-start gap-2'>
                                        <XCircle className='w-4 h-4 mt-0.5 shrink-0 text-red-600/50' />
                                        <span>{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </div>

        {validVideos && validVideos.length > 0 && (
            <div className="space-y-8">
                <Separator />
                <h2 className="text-2xl font-bold font-headline">Videos</h2>
                {validVideos.map((video, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Video className="w-6 h-6" />
                                <span>{video.title || \`Product Video \${index + 1}\`}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={video.embedUrl!}
                                    title={video.title || \`Product Video \${index + 1}\`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}

        {product.reviewArticle && (
             <div className="w-full">
                <Separator />
                <div className="mt-8 prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: product.reviewArticle }} />
            </div>
        )}
    </div>
  );
}
`,
  "src/app/(main)/search/page.tsx": `
import { searchProducts } from '@/firebase/firestore/queries';
import { ProductCard } from '@/components/products/product-card';
import { SearchX } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const dynamic = 'force-dynamic';

async function SearchResults({ query }: { query: string }) {
  const products = await searchProducts(query);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">
          Search Results for: <span className="text-primary">"{query}"</span>
        </h1>
        <p className="text-muted-foreground">
          Found {products.length} products related to your search.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center border-2 border-dashed rounded-lg py-20">
          <SearchX className="w-16 h-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-bold mb-2">No Products Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find any products matching your search term. Please try other keywords.
          </p>
        </div>
      )}
    </div>
  );
}

function SearchSkeleton() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Skeleton className="h-9 w-1/2" />
                <Skeleton className="h-5 w-1/4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-48 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-1/4" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q as string || '';

  if (!query) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-2xl font-bold">Please enter a search term</h1>
        <p className="text-muted-foreground">Enter what you're looking for in the search bar above.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<SearchSkeleton />}>
      <SearchResults query={query} />
    </Suspense>
  );
}
`,
  "src/app/about/page.tsx": `import { getPage } from "@/firebase/firestore/queries";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPage('about');
    return {
        title: page?.title || 'About Us',
    }
}

export default async function AboutPage() {
    const page = await getPage('about');
    
    if (!page) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline text-center">{page.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div 
                        className="prose max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
`,
  "src/app/actions.ts": `'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateProducts() {
  revalidatePath('/admin/manage-products');
  revalidatePath('/');
  revalidatePath('/products', 'layout');
}
`,
  "src/app/admin/add-product/page.tsx": `'use client';

import { AddProductForm } from "@/components/admin/add-product-form";
import { getCategories } from "@/firebase/firestore/queries";
import { type Category } from "@/lib/types";
import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
    setLoading(false);
  }, []);
  
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading) {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold font-headline">Add New Product</h1>
                <p className="text-muted-foreground">
                Fill out the form below to add a new product to your store.
                </p>
            </div>
            <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    )
  }
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-headline">Add New Product</h1>
        <p className="text-muted-foreground">
          Fill out the form below to add a new product to your store.
        </p>
      </div>
      <AddProductForm categories={categories} onProductAdded={fetchCategories} />
    </div>
  );
}
`,
  "src/app/admin/edit-product/[id]/page.tsx": `'use client';

import { AddProductForm } from "@/components/admin/add-product-form";
import { getCategories, getProduct } from "@/firebase/firestore/queries";
import { type Category, type Product } from "@/lib/types";
import { useEffect, useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const productId = params.id as string;

  const fetchData = useCallback(async () => {
    setLoading(true);
    if (productId) {
      const [fetchedCategories, fetchedProduct] = await Promise.all([
          getCategories(),
          getProduct(productId)
      ]);
      setCategories(fetchedCategories);
      setProduct(fetchedProduct);
    }
    setLoading(false);
  }, [productId]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold font-headline">Edit Product</h1>
                <p className="text-muted-foreground">
                Loading product data...
                </p>
            </div>
            <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    )
  }
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-headline">Edit Product</h1>
        <p className="text-muted-foreground">
          Modify the form below to update the product information.
        </p>
      </div>
      {product ? (
        <AddProductForm 
            categories={categories} 
            onProductAdded={fetchData} 
            productToEdit={product}
        />
      ) : (
        <div className="text-center text-muted-foreground py-10 border-2 border-dashed rounded-lg">
            Product not found or failed to load.
        </div>
      )}
    </div>
  );
}
`,
  "src/app/admin/layout.tsx": `'use client';

import Link from 'next/link';
import { Home, LogIn, LogOut, Settings, LayoutGrid, FileText, Link2, Images, Map, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth, AuthProvider } from '@/context/auth-context';

function AdminHeader() {
  const { user, logout } = useAuth();
  
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="font-bold text-primary">BestReviewZhub</span>
            <span className="text-foreground"> - 管理后台</span>
          </Link>
          <Link
            href="/admin"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
             <LayoutGrid className="mr-2 h-4 w-4" />
            仪表盘
          </Link>
           <Link
            href="/admin/manage-products"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
             <LayoutGrid className="mr-2 h-4 w-4" />
            产品管理
          </Link>
           <Link
            href="/admin/manage-categories"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
             <LayoutGrid className="mr-2 h-4 w-4" />
            分类管理
          </Link>
           <Link
            href="/admin/manage-pages"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FileText className="mr-2 h-4 w-4" />
            页面管理
          </Link>
          <Link
            href="/admin/manage-navigation"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Link2 className="mr-2 h-4 w-4" />
            导航管理
          </Link>
          <Link
            href="/admin/settings"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Settings className="mr-2 h-4 w-4" />
            网站设置
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button asChild variant="outline">
                <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    返回网站
                </Link>
            </Button>
            {user ? (
                <Button variant="outline" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    登出
                </Button>
            ) : (
                <Button asChild variant="ghost">
                    <Link href="/admin/login">
                        <LogIn className="mr-2 h-4 w-4" />
                        登录
                    </Link>
                </Button>
            )}
        </div>
        </nav>
      </header>
  )
}


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen w-full flex-col">
        <AdminHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
`,
  "src/app/admin/login/page.tsx": `import { AdminLoginForm } from '@/components/admin/admin-login-form';
import { Logo } from '@/components/logo';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 -mt-16">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
           <div className="flex items-center justify-center gap-2 text-xl font-bold font-headline tracking-tight">
            <span className="text-primary">BestReviewZhub</span>
            <span className="text-foreground"> - 管理后台</span>
           </div>
          <h1 className="text-2xl font-bold font-headline">管理员登录</h1>
          <p className="text-muted-foreground">
            登录以访问管理仪表盘。
          </p>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
`,
  "src/app/admin/manage-categories/page.tsx": `
'use client';

import { useState, useEffect, useCallback } from 'react';
import { getCategories } from "@/firebase/firestore/queries";
import { deleteCategory } from '@/firebase/firestore/mutations';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MoreVertical, Trash2, Edit } from "lucide-react";
import { AddCategoryDialog } from '@/components/admin/add-category-dialog';
import type { Category } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

export default function ManageCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);
  const { toast } = useToast();

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    const fetchedCategories = await getCategories();
    setCategories(fetchedCategories);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleCategoryAdded = () => {
    fetchCategories();
    setCategoryToEdit(null);
  };
  
  const openEditDialog = (category: Category) => {
    setCategoryToEdit(category);
    setIsAddDialogOpen(true);
  }

  const openAddDialog = () => {
    setCategoryToEdit(null);
    setIsAddDialogOpen(true);
  }

  const handleDeleteCategory = async (categoryId: string) => {
    try {
        await deleteCategory(categoryId);
        toast({
            title: '成功',
            description: '分类已成功删除。',
        });
        fetchCategories();
    } catch (error) {
        console.error('删除分类时出错:', error);
        toast({
            title: '错误',
            description: '删除分类时出错，请重试。',
            variant: 'destructive',
        });
    }
  };

  const renderCategories = (parentId: string | null) => {
    return categories
      .filter(c => c.parentId === parentId)
      .map(category => (
        <div key={category.id} className="ml-6 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                {category.name}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => openEditDialog(category)}>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>编辑</span>
                      </DropdownMenuItem>
                       <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                                <span className='text-destructive'>删除</span>
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>您确定吗？</AlertDialogTitle>
                              <AlertDialogDescription>
                               此操作无法撤销。这将永久删除该分类。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>取消</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteCategory(category.id)} className='bg-destructive hover:bg-destructive/90'>删除</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardTitle>
            </CardHeader>
            {categories.some(c => c.parentId === category.id) && (
              <CardContent>
                {renderCategories(category.id)}
              </CardContent>
            )}
          </Card>
        </div>
      ));
  };

  const topLevelCategories = categories.filter(c => !c.parentId);

  return (
    <div>
      <AddCategoryDialog 
        isOpen={isAddDialogOpen} 
        setIsOpen={setIsAddDialogOpen}
        onCategoryAdded={handleCategoryAdded}
        existingCategories={categories}
        categoryToEdit={categoryToEdit}
      />
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-headline">分类管理</h1>
          <p className="text-muted-foreground">
            在这里编辑和重组您的产品分类。
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <PlusCircle className="mr-2 h-4 w-4" />
          添加新分类
        </Button>
      </div>
      
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
             <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-xl flex justify-between items-center">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-8 w-16" />
                  </CardTitle>
                </CardHeader>
              </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {topLevelCategories.length > 0 ? topLevelCategories.map(category => (
             <Card key={category.id}>
              <CardHeader>
                <CardTitle className="text-xl flex justify-between items-center">
                  {category.name}
                  <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => openEditDialog(category)}>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>编辑</span>
                        </DropdownMenuItem>
                         <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                                <span className='text-destructive'>删除</span>
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>您确定吗？</AlertDialogTitle>
                              <AlertDialogDescription>
                               此操作无法撤销。这将永久删除该分类。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>取消</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteCategory(category.id)} className='bg-destructive hover:bg-destructive/90'>删除</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardTitle>
              </CardHeader>
              {categories.some(c => c.parentId === category.id) && (
                <CardContent>
                    {renderCategories(category.id)}
                </CardContent>
              )}
            </Card>
          )) : (
            <div className="text-center text-muted-foreground py-10 border-2 border-dashed rounded-lg">
                尚无顶级分类。
            </div>
          )}
        </div>
      )}
    </div>
  );
}
`,
  "src/app/admin/manage-navigation/page.tsx": `'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  getNavigationLinks,
} from '@/firebase/firestore/queries';
import {
  deleteNavigationLink,
} from '@/firebase/firestore/mutations';
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PlusCircle,
  MoreVertical,
  Trash2,
  Edit,
} from 'lucide-react';
import { AddNavigationLinkDialog } from '@/components/admin/add-navigation-link-dialog';
import type { NavigationLink } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

export default function ManageNavigationPage() {
  const [links, setLinks] = useState<NavigationLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [linkToEdit, setLinkToEdit] = useState<NavigationLink | null>(null);
  const { toast } = useToast();

  const fetchLinks = useCallback(async () => {
    setLoading(true);
    const fetchedLinks = await getNavigationLinks();
    setLinks(fetchedLinks);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  const handleLinkSaved = () => {
    fetchLinks();
    setLinkToEdit(null);
  };

  const openEditDialog = (link: NavigationLink) => {
    setLinkToEdit(link);
    setIsDialogOpen(true);
  };

  const openAddDialog = () => {
    setLinkToEdit(null);
    setIsDialogOpen(true);
  };

  const handleDeleteLink = async (linkId: string) => {
    try {
      await deleteNavigationLink(linkId);
      toast({
        title: '成功',
        description: '导航链接已成功删除。',
      });
      fetchLinks();
    } catch (error) {
      console.error('删除导航链接时出错:', error);
      toast({
        title: '错误',
        description: '删除导航链接时出错，请重试。',
        variant: 'destructive',
      });
    }
  };

  return (
    <div>
      <AddNavigationLinkDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        onLinkSaved={handleLinkSaved}
        linkToEdit={linkToEdit}
        currentOrder={links.length}
      />
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-headline">导航管理</h1>
          <p className="text-muted-foreground">
            管理您网站顶部导航栏中的链接。
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <PlusCircle className="mr-2 h-4 w-4" />
          添加新链接
        </Button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {links.length > 0 ? (
            links.map(link => (
              <Card key={link.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex justify-between items-center">
                    <div>
                      <span>{link.text}</span>
                      <p className="text-sm font-normal text-muted-foreground">{link.url}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => openEditDialog(link)}>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>编辑</span>
                        </DropdownMenuItem>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem onSelect={e => e.preventDefault()}>
                              <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                              <span className="text-destructive">删除</span>
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>您确定吗？</AlertDialogTitle>
                              <AlertDialogDescription>
                                此操作无法撤销。这将永久删除该导航链接。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>取消</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteLink(link.id)}
                                className="bg-destructive hover:bg-destructive/90"
                              >
                                删除
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))
          ) : (
            <div className="text-center text-muted-foreground py-10 border-2 border-dashed rounded-lg">
              尚无导航链接。
            </div>
          )}
        </div>
      )}
    </div>
  );
}
`,
  "src/app/admin/manage-pages/page.tsx": `'use client';
import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getPage, getPages } from '@/firebase/firestore/queries';
import { savePage } from '@/firebase/firestore/mutations';
import { type Page } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const pageSchema = z.object({
  title: z.string().min(1, '标题不能为空'),
  content: z.string().min(1, '内容不能为空'),
});

type PageFormValues = z.infer<typeof pageSchema>;

function PageEditor({ pageId, onSave }: { pageId: 'about' | 'contact', onSave: () => void }) {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const fetchPage = useCallback(async () => {
    setLoading(true);
    const fetchedPage = await getPage(pageId);
    setPage(fetchedPage);
    if (fetchedPage) {
      form.reset({
        title: fetchedPage.title,
        content: fetchedPage.content,
      });
    }
    setLoading(false);
  }, [pageId, form]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const onSubmit = async (data: PageFormValues) => {
    setLoading(true);
    try {
      await savePage({ id: pageId, ...data });
      toast({ title: '成功', description: '页面已保存。' });
      onSave();
    } catch (error) {
      toast({ title: '错误', description: '保存页面时出错。', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <div className="space-y-4">
            <Skeleton className="h-10 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-24" />
        </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>页面标题</FormLabel>
              <FormControl>
                <Input placeholder="例如：关于我们" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>页面内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="输入页面内容。您可以使用HTML标签来格式化文本，以及插入图片和视频。"
                  className="min-h-[300px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          保存页面
        </Button>
      </form>
    </Form>
  );
}


export default function ManagePagesPage() {
    const [_, setTick] = useState(0);
    const forceUpdate = () => setTick(t => t + 1);

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold font-headline">页面管理</h1>
                <p className="text-muted-foreground">
                在这里编辑您网站的静态页面，如“关于我们”和“联系我们”。
                </p>
            </div>
            <Card>
                <CardContent className="p-6">
                    <Tabs defaultValue="about" className="w-full">
                        <TabsList>
                            <TabsTrigger value="about">关于我们</TabsTrigger>
                            <TabsTrigger value="contact">联系我们</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about" className="mt-6">
                           <PageEditor pageId="about" onSave={forceUpdate} />
                        </TabsContent>
                        <TabsContent value="contact" className="mt-6">
                            <PageEditor pageId="contact" onSave={forceUpdate} />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
`,
  "src/app/admin/manage-products/page.tsx": `'use client';

import { getProducts } from "@/firebase/firestore/queries";
import { deleteProduct } from "@/firebase/firestore/mutations";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState, useCallback } from "react";
import { Product } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";


export default function ManageProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct(productId);
      toast({
        title: "成功",
        description: "产品已成功删除。",
      });
      fetchProducts();
    } catch (error) {
      console.error("删除产品时出错:", error);
      toast({
        title: "错误",
        description: "删除产品时出错。",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-headline">产品管理</h1>
        <p className="text-muted-foreground">
          查看和管理您的所有产品。
        </p>
      </div>
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] sm:w-[100px]">
                <span className="sr-only">图片</span>
              </TableHead>
              <TableHead>名称</TableHead>
              <TableHead className="hidden sm:table-cell">价格</TableHead>
              <TableHead className="hidden md:table-cell">评分</TableHead>
              <TableHead>
                <span className="sr-only">操作</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                [...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                        <TableCell>
                            <Skeleton className="h-16 w-16 rounded-md" />
                        </TableCell>
                        <TableCell><Skeleton className="h-6 w-3/4" /></TableCell>
                        <TableCell className="hidden sm:table-cell"><Skeleton className="h-6 w-1/2" /></TableCell>
                        <TableCell className="hidden md:table-cell"><Skeleton className="h-6 w-1/2" /></TableCell>
                        <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                    </TableRow>
                ))
            ) : (
                products.map((product) => (
                <TableRow key={product.id}>
                    <TableCell>
                    <Image
                        alt={product.name}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={product.imageUrl}
                        width="64"
                        data-ai-hint={product.imageHint}
                        unoptimized
                    />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="hidden sm:table-cell">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="hidden md:table-cell">{product.rating.toFixed(1)} / 5</TableCell>
                    <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">切换菜单</span>
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>操作</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <Link href={\`/admin/edit-product/\${product.id}\`}>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>编辑</span>
                            </Link>
                        </DropdownMenuItem>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                                <span className="text-destructive">删除</span>
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>您确定吗？</AlertDialogTitle>
                              <AlertDialogDescription>
                               此操作无法撤销。这将永久删除此产品及其所有相关数据。
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>取消</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteProduct(product.id)} className="bg-destructive hover:bg-destructive/90">删除</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
`,
  "src/app/admin/page.tsx": `
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BotMessageSquare, Home, PlusCircle, List, FolderTree, Database, Loader2, FileText, Link as LinkIcon, Settings } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { seedDatabaseClientSide } from '@/scripts/seed-db';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [isSeeding, setIsSeeding] = useState(false);
  const { toast } = useToast();

  const handleSeedDatabase = async () => {
    if (!user) {
        toast({
            title: '需要认证',
            description: '只有登录的管理员才能执行此操作。',
            variant: 'destructive',
        });
        return;
    }
    
    setIsSeeding(true);
    try {
        await seedDatabaseClientSide();
        toast({
            title: '成功！',
            description: '数据库已成功填充演示数据！',
        });

    } catch (error: any) {
        toast({
            title: '错误',
            description: error.message || '填充数据库时发生未知错误。',
            variant: 'destructive',
        });
        console.error('填充数据库失败:', error);
    } finally {
        setIsSeeding(false);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-headline">管理仪表盘</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              填充数据库
            </CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">添加演示数据</div>
            <p className="text-xs text-muted-foreground pt-2">
              点击以使用模拟数据填充您的产品和分类。
            </p>
            <Button size="sm" className="mt-4" onClick={handleSeedDatabase} disabled={isSeeding || !user}>
                {isSeeding ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        填充中...
                    </>
                ) : (
                   '填充数据库'
                )}
            </Button>
            {!user && <p className="text-xs text-destructive mt-2">请登录以启用此功能。</p>}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              添加新产品
            </CardTitle>
            <PlusCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">创建产品</div>
            <p className="text-xs text-muted-foreground pt-2">
              向您的网站添加一个新产品。
            </p>
            <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/add-product">
                    添加产品 <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              产品管理
            </CardTitle>
            <List className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">编辑与删除</div>
            <p className="text-xs text-muted-foreground pt-2">
              在此处修改和移除现有产品。
            </p>
            <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/manage-products">
                    产品管理 <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              分类管理
            </CardTitle>
            <FolderTree className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">组织内容</div>
            <p className="text-xs text-muted-foreground pt-2">
              管理产品分类层级。
            </p>
            <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/manage-categories">
                    分类管理 <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              页面管理
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">编辑页面</div>
            <p className="text-xs text-muted-foreground pt-2">
              管理“关于我们”、“联系我们”等静态页面。
            </p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/manage-pages">
                页面管理 <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              导航管理
            </CardTitle>
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">网站导航</div>
            <p className="text-xs text-muted-foreground pt-2">
              添加、编辑或删除顶部导航栏链接。
            </p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/manage-navigation">
                导航管理 <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              网站设置
            </CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">全局配置</div>
            <p className="text-xs text-muted-foreground pt-2">
              管理SEO、首页横幅及其他全局设置。
            </p>
            <Button size="sm" className="mt-4" asChild>
              <Link href="/admin/settings">
                网站设置 <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              AI 评论摘要工具
            </CardTitle>
            <BotMessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">测试与管理</div>
            <p className="text-xs text-muted-foreground pt-2">
              使用 AI 工具为任何产品评论生成摘要。
            </p>
            <Button size="sm" className="mt-4" asChild>
                <Link href="/admin/review-summarizer">
                    前往工具 <ArrowUpRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
`,
  "src/app/admin/review-summarizer/page.tsx": `import { ReviewSummarizerForm } from "@/components/admin/review-summarizer-form";

export default function ReviewSummarizerPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold font-headline">AI Review Summarizer</h1>
        <p className="text-muted-foreground">
          Enter product information and reviews to generate an AI summary.
        </p>
      </div>
      <ReviewSummarizerForm />
    </div>
  );
}
`,
  "src/app/admin/settings/page.tsx": `'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getSettings } from '@/firebase/firestore/queries';
import { saveSettings } from '@/firebase/firestore/mutations';
import type { Settings } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';


const settingsSchema = z.object({
    siteName: z.string().min(1, '网站名称不能为空'),
    wholesaleEmail: z.string().email('请输入有效的邮箱地址'),
    heroImage: z.object({
        url: z.string().url('请输入有效的图片URL'),
        alt: z.string(),
        title: z.string().min(1, '标题不能为空'),
        description: z.string().min(1, '描述不能为空'),
        ctaText: z.string().min(1, '按钮文字不能为空'),
        ctaLink: z.string().url('请输入有效的链接URL'),
    }),
    seo: z.object({
        home: z.object({
            title: z.string(),
            description: z.string(),
            keywords: z.string(),
        }),
        product: z.object({
            title: z.string(),
            description: z.string(),
            keywords: z.string(),
        }),
        category: z.object({
            title: z.string(),
            description: z.string(),
            keywords: z.string(),
        }),
        search: z.object({
            title: z.string(),
            description: z.string(),
            keywords: z.string(),
        }),
    }),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

const seoTags = [
    { tag: '{Site Name}', description: '您网站的名称' },
    { tag: '{Product Name}', description: '产品的标题' },
    { tag: '{Category Name}', description: '分类的名称' },
    { tag: '{Search Term}', description: '用户搜索的词语' },
]

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      siteName: '',
      wholesaleEmail: '',
      heroImage: {
          url: '',
          alt: '',
          title: '',
          description: '',
          ctaText: '',
          ctaLink: '',
      },
      seo: {
          home: { title: '', description: '', keywords: ''},
          product: { title: '', description: '', keywords: ''},
          category: { title: '', description: '', keywords: ''},
          search: { title: '', description: '', keywords: ''},
      }
    },
  });

  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      const fetchedSettings = await getSettings();
      if (fetchedSettings) {
        setSettings(fetchedSettings);
        form.reset(fetchedSettings as SettingsFormValues);
      }
      setLoading(false);
    }
    fetchSettings();
  }, [form]);

  const onSubmit = async (data: SettingsFormValues) => {
    setLoading(true);
    try {
      const updatedSettings: Settings = {
        ...settings, // preserve existing fields like sitemap
        ...data,
      } as Settings;
      await saveSettings(updatedSettings);
      toast({ title: '成功', description: '设置已保存。' });
    } catch (error) {
      toast({ title: '错误', description: '保存设置时出错。', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };
  
  if (loading && !settings) {
    return (
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold font-headline">网站设置</h1>
          <p className="text-muted-foreground">管理您网站的全局设置。</p>
        </div>
        <Card>
            <CardHeader>
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-6">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-64 w-full" />
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
       <div className="mb-6">
        <h1 className="text-3xl font-bold font-headline">网站设置</h1>
        <p className="text-muted-foreground">管理您网站的全局设置，包括SEO、首页横幅等。</p>
      </div>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           <Card>
            <CardHeader>
                <CardTitle>基本信息</CardTitle>
                <CardDescription>网站的核心配置。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <FormField
                    control={form.control}
                    name="siteName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>网站名称</FormLabel>
                        <FormControl>
                            <Input placeholder="例如：BestReviewZhub" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                    control={form.control}
                    name="wholesaleEmail"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>批发咨询邮箱</FormLabel>
                        <FormControl>
                            <Input placeholder="例如：contact@example.com" {...field} />
                        </FormControl>
                         <FormDescription>用于接收批发和OEM定制咨询的邮箱地址。</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                 />
            </CardContent>
           </Card>

           <Card>
                <CardHeader>
                    <CardTitle>首页横幅</CardTitle>
                    <CardDescription>设置您首页顶部的大图横幅内容。</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <FormField
                        control={form.control}
                        name="heroImage.url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>图片 URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://example.com/image.png" {...field} />
                                </FormControl>
                                <FormDescription>推荐尺寸：1200x480像素。</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="heroImage.title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>主标题</FormLabel>
                                <FormControl>
                                    <Input placeholder="横幅上的大字标题" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="heroImage.description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>描述文字</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="对您的网站或活动进行简短描述" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="heroImage.ctaText"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>按钮文字</FormLabel>
                                    <FormControl>
                                        <Input placeholder="例如：开始探索" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="heroImage.ctaLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>按钮链接</FormLabel>
                                    <FormControl>
                                        <Input placeholder="/products" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
           </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO 设置</CardTitle>
              <CardDescription>为不同类型的页面配置标题、描述和关键词，以优化搜索引擎排名。</CardDescription>
            </CardHeader>
            <CardContent>
               <Accordion type="single" collapsible className="w-full">
                 <AccordionItem value="tags">
                    <AccordionTrigger>可用标签说明</AccordionTrigger>
                    <AccordionContent>
                        <div className='p-4 bg-muted/50 rounded-lg'>
                            <p className="text-sm text-muted-foreground mb-4">在下面的模板中，您可以使用以下标签来动态插入内容：</p>
                            <ul className="space-y-2">
                                {seoTags.map(t => (
                                    <li key={t.tag} className="flex items-start gap-2">
                                        <code className="text-primary font-semibold text-sm bg-primary/10 px-2 py-1 rounded">{t.tag}</code>
                                        <span className="text-sm text-muted-foreground mt-0.5">- {t.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="home">
                  <AccordionTrigger>首页</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <FormField control={form.control} name="seo.home.title" render={({ field }) => (<FormItem><FormLabel>标题</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.home.description" render={({ field }) => (<FormItem><FormLabel>描述</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.home.keywords" render={({ field }) => (<FormItem><FormLabel>关键词</FormLabel><FormControl><Input {...field} /></FormControl><FormDescription>用逗号分隔。</FormDescription></FormItem>)} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="product">
                  <AccordionTrigger>产品页</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <FormField control={form.control} name="seo.product.title" render={({ field }) => (<FormItem><FormLabel>标题</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.product.description" render={({ field }) => (<FormItem><FormLabel>描述</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.product.keywords" render={({ field }) => (<FormItem><FormLabel>关键词</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="category">
                  <AccordionTrigger>分类页</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                     <FormField control={form.control} name="seo.category.title" render={({ field }) => (<FormItem><FormLabel>标题</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.category.description" render={({ field }) => (<FormItem><FormLabel>描述</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.category.keywords" render={({ field }) => (<FormItem><FormLabel>关键词</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="search">
                  <AccordionTrigger>搜索页</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                     <FormField control={form.control} name="seo.search.title" render={({ field }) => (<FormItem><FormLabel>标题</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.search.description" render={({ field }) => (<FormItem><FormLabel>描述</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>)} />
                    <FormField control={form.control} name="seo.search.keywords" render={({ field }) => (<FormItem><FormLabel>关键词</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>)} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            保存设置
          </Button>
        </form>
      </Form>
    </div>
  );
}
`,
  "src/app/contact/page.tsx": `import { getPage } from "@/firebase/firestore/queries";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPage('contact');
    return {
        title: page?.title || 'Contact Us',
    }
}

export default async function ContactPage() {
    const page = await getPage('contact');
    
    if (!page) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline text-center">{page.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div 
                        className="prose max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
`,
  "src/app/globals.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer base {
  :root {
    --background: 210 17% 95%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 231 48% 48%;
    --primary-foreground: 0 0% 98%;
    --secondary: 220 13% 91%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 220 13% 91%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 36 100% 50%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 89%;
    --input: 220 13% 89%;
    --ring: 231 48% 48%;
    --chart-1: 231 48% 48%;
    --chart-2: 36 100% 50%;
    --chart-3: 231 30% 60%;
    --chart-4: 36 90% 60%;
    --chart-5: 231 20% 70%;
    --radius: 0.5rem;
    --sidebar-background: 210 17% 98%;
    --sidebar-foreground: 224 71.4% 4.1%;
    --sidebar-primary: 231 48% 48%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 210 17% 92%;
    --sidebar-accent-foreground: 222.2 47.4% 11.2%;
    --sidebar-border: 220 13% 89%;
    --sidebar-ring: 231 48% 48%;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 231 48% 48%;
    --primary-foreground: 0 0% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 36 100% 50%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 231 48% 48%;
    --chart-1: 231 48% 48%;
    --chart-2: 36 100% 50%;
    --chart-3: 231 30% 60%;
    --chart-4: 36 90% 60%;
    --chart-5: 231 20% 70%;
    --sidebar-background: 222.2 84% 4.9%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-primary: 231 48% 48%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 217.2 32.6% 17.5%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217.2 32.6% 17.5%;
    --sidebar-ring: 231 48% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`,
  "src/app/layout.tsx": `import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppProvider } from '@/context/app-provider';
import { Toaster } from '@/components/ui/toaster';
import { getSettings } from '@/firebase/firestore/queries';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const siteName = settings?.siteName || 'BestReviewZhub';

  return {
    title: {
      default: siteName,
      template: \`%s | \${siteName}\`,
    },
    description: settings?.seo.home.description || 'Your trusted hub for home product reviews, wholesale, and OEM customization.',
    keywords: settings?.seo.home.keywords || 'home products, reviews, wholesale, OEM',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
        )}
      >
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
`,
  "src/app/login/page.tsx": `import { LoginForm } from '@/components/auth/login-form';
import { Logo } from '@/components/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Logo className="justify-center" />
          <h1 className="text-2xl font-bold font-headline">Welcome Back</h1>
          <p className="text-muted-foreground">
            Log in to access your favorites and more.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
`,
  "src/app/signup/page.tsx": `import { SignupForm } from '@/components/auth/signup-form';
import { Logo } from '@/components/logo';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Logo className="justify-center" />
          <h1 className="text-2xl font-bold font-headline">Create Your Account</h1>
          <p className="text-muted-foreground">
            Join us to discover more great picks.
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
`,
  "src/components/FirebaseErrorListener.tsx": `'use client';

import { useState, useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * An invisible component that listens for globally emitted 'permission-error' events.
 * It throws any received error to be caught by Next.js's global-error.tsx.
 */
export function FirebaseErrorListener() {
  // Use the specific error type for the state for type safety.
  const [error, setError] = useState<FirestorePermissionError | null>(null);

  useEffect(() => {
    // The callback now expects a strongly-typed error, matching the event payload.
    const handleError = (error: FirestorePermissionError) => {
      // Set error in state to trigger a re-render.
      setError(error);
    };

    // The typed emitter will enforce that the callback for 'permission-error'
    // matches the expected payload type (FirestorePermissionError).
    errorEmitter.on('permission-error', handleError);

    // Unsubscribe on unmount to prevent memory leaks.
    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  // On re-render, if an error exists in state, throw it.
  if (error) {
    throw error;
  }

  // This component renders nothing.
  return null;
}
`,
  "src/components/admin/add-category-dialog.tsx": `
'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addCategory, updateCategory } from '@/firebase/firestore/mutations';
import type { Category } from '@/lib/types';

interface AddCategoryDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCategoryAdded: () => void;
  existingCategories: Category[];
  categoryToEdit?: Category | null;
}

export function AddCategoryDialog({
  isOpen,
  setIsOpen,
  onCategoryAdded,
  existingCategories,
  categoryToEdit,
}: AddCategoryDialogProps) {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isEditing = !!categoryToEdit;

  useEffect(() => {
    if (isEditing) {
      setName(categoryToEdit.name);
      setParentId(categoryToEdit.parentId);
    } else {
        setName('');
        setParentId(null);
    }
  }, [categoryToEdit, isEditing, isOpen]);


  const resetAndClose = () => {
    setIsOpen(false);
    // Give time for animation
    setTimeout(() => {
        setName('');
        setParentId(null);
        setIsLoading(false);
    }, 300);
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast({
        title: '错误',
        description: '分类名称不能为空。',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      if (isEditing) {
        await updateCategory(categoryToEdit.id, name, parentId);
        toast({
          title: '成功',
          description: \`分类 "\${name}" 已更新。\`,
        });
      } else {
        await addCategory(name, parentId);
        toast({
          title: '成功',
          description: \`分类 "\${name}" 已添加。\`,
        });
      }
      onCategoryAdded();
      resetAndClose();
    } catch (error) {
      console.error('保存分类时出错:', error);
      toast({
        title: '错误',
        description: '保存分类时出错，请重试。',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]" onEscapeKeyDown={resetAndClose} onPointerDownOutside={resetAndClose}>
        <DialogHeader>
          <DialogTitle>{isEditing ? '编辑分类' : '添加新分类'}</DialogTitle>
          <DialogDescription>
            {isEditing ? '修改分类的详细信息。' : '填写新分类的详细信息。'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              名称
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="例如：手机"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="parent" className="text-right">
              父分类
            </Label>
            <Select
              onValueChange={(value) => setParentId(value === 'none' ? null : value)}
              value={parentId || 'none'}
              disabled={isLoading}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="选择一个父分类（可选）" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">无（顶级分类）</SelectItem>
                {existingCategories
                    .filter(cat => cat.id !== categoryToEdit?.id) // Prevent self-parenting
                    .map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={resetAndClose} disabled={isLoading}>
            取消
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? '保存更改' : '保存分类'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`,
  "src/components/admin/add-navigation-link-dialog.tsx": `'use client';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addNavigationLink, updateNavigationLink } from '@/firebase/firestore/mutations';
import type { NavigationLink } from '@/lib/types';

interface AddNavigationLinkDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onLinkSaved: () => void;
  linkToEdit?: NavigationLink | null;
  currentOrder: number;
}

export function AddNavigationLinkDialog({
  isOpen,
  setIsOpen,
  onLinkSaved,
  linkToEdit,
  currentOrder,
}: AddNavigationLinkDialogProps) {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isEditing = !!linkToEdit;

  const handleOpenChange = (open: boolean) => {
    if (open) {
      if (isEditing && linkToEdit) {
        setText(linkToEdit.text);
        setUrl(linkToEdit.url);
        setOrder(String(linkToEdit.order));
      } else {
        setText('');
        setUrl('');
        setOrder(String(currentOrder));
      }
    }
    setIsOpen(open);
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setText('');
      setUrl('');
      setOrder('');
      setIsLoading(false);
    }, 300);
  };

  const handleSubmit = async () => {
    if (!text.trim() || !url.trim()) {
      toast({
        title: 'Error',
        description: 'Link text and URL cannot be empty.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const orderNumber = Number(order);
      if (isEditing && linkToEdit) {
        await updateNavigationLink(linkToEdit.id, text, url, orderNumber);
        toast({
          title: 'Success',
          description: \`Navigation link "\${text}" has been updated.\`,
        });
      } else {
        await addNavigationLink(text, url, orderNumber);
        toast({
          title: 'Success',
          description: \`Navigation link "\${text}" has been added.\`,
        });
      }
      onLinkSaved();
      resetAndClose();
    } catch (error) {
      console.error('Error saving navigation link:', error);
      toast({
        title: 'Error',
        description: 'There was an error saving the link. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]" onEscapeKeyDown={resetAndClose}>
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Navigation Link' : 'Add New Link'}</DialogTitle>
          <DialogDescription>
            {isEditing ? 'Modify the details for your link.' : 'Fill in the details for your new link.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Text
            </Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="col-span-3"
              placeholder="e.g. Home"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="col-span-3"
              placeholder="e.g. / or /products"
              disabled={isLoading}
            />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="order" className="text-right">
              Order
            </Label>
            <Input
              id="order"
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="col-span-3"
              disabled={isLoading}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={resetAndClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Save Changes' : 'Save Link'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`,
  "src/components/admin/add-product-form.tsx": `"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, PlusCircle, Star, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { type Category, type Product, type ProductVideo, type WholesaleTier, type Review } from '@/lib/types';
import { addProduct, updateProduct } from '@/firebase/firestore/mutations';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

interface AddProductFormProps {
  categories: Category[];
  onProductAdded: () => void;
  productToEdit?: Product | null;
}

const initialReview = (): Review => ({
    id: uuidv4(),
    author: '',
    rating: 5,
    title: '',
    text: '',
    createdAt: new Date().toISOString(),
});

export function AddProductForm({ categories, onProductAdded, productToEdit }: AddProductFormProps) {
  const { firebaseUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const isEditing = !!productToEdit;

  const [name, setName] = useState('');
  const [reviewArticle, setReviewArticle] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [categoryId, setCategoryId] = useState('');
  const [affiliateLink, setAffiliateLink] = useState('');
  const [videos, setVideos] = useState<ProductVideo[]>([{ title: '', url: '' }]);
  const [wholesale, setWholesale] = useState<WholesaleTier[]>([{ minQuantity: 0, price: 0 }]);
  const [rating, setRating] = useState(0);
  const [pros, setPros] = useState(['']);
  const [cons, setCons] = useState(['']);
  const [reviews, setReviews] = useState<Review[]>([initialReview()]);
  const [imageUrl, setImageUrl] = useState<string>('');
  
  useEffect(() => {
    if (isEditing && productToEdit) {
        setName(productToEdit.name);
        setReviewArticle(productToEdit.reviewArticle);
        setPrice(productToEdit.price);
        setCategoryId(productToEdit.categoryId);
        setAffiliateLink(productToEdit.affiliateLink);
        setVideos(productToEdit.videos?.length > 0 ? productToEdit.videos : [{ title: '', url: '' }]);
        setWholesale(productToEdit.wholesale?.length > 0 ? productToEdit.wholesale : [{ minQuantity: 0, price: 0 }]);
        setRating(productToEdit.rating);
        setPros(productToEdit.pros.length > 0 ? productToEdit.pros : ['']);
        setCons(productToEdit.cons.length > 0 ? productToEdit.cons : ['']);
        setReviews(productToEdit.reviews.length > 0 ? productToEdit.reviews : [initialReview()]);
        setImageUrl(productToEdit.imageUrl);
    }
  }, [isEditing, productToEdit]);


  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };
  
  const handleReviewStarClick = (reviewIndex: number, starIndex: number) => {
    const newReviews = [...reviews];
    newReviews[reviewIndex].rating = starIndex + 1;
    setReviews(newReviews);
  };

  const handleListChange = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  };

  const addListItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.length < 10) {
      setList([...list, '']);
    }
  };

  const removeListItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList.length > 0 ? newList : ['']);
  };

   const handleVideoChange = (index: number, field: 'title' | 'url', value: string) => {
    const newVideos = [...videos];
    newVideos[index][field] = value;
    setVideos(newVideos);
  };

  const addVideoItem = () => {
    if (videos.length < 10) {
      setVideos([...videos, { title: '', url: '' }]);
    }
  };

  const removeVideoItem = (index: number) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos.length > 0 ? newVideos : [{ title: '', url: '' }]);
  };

  const handleWholesaleChange = (index: number, field: 'minQuantity' | 'price', value: string) => {
    const newWholesale = [...wholesale];
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
        newWholesale[index][field] = numValue;
        setWholesale(newWholesale);
    }
  };

   const addWholesaleTier = () => {
    if (wholesale.length < 5) {
      setWholesale([...wholesale, { minQuantity: 0, price: 0 }]);
    }
  };

  const removeWholesaleTier = (index: number) => {
    const newWholesale = wholesale.filter((_, i) => i !== index);
    setWholesale(newWholesale.length > 0 ? newWholesale : [{ minQuantity: 0, price: 0 }]);
  };
  
  const handleReviewChange = (index: number, field: keyof Omit<Review, 'id' | 'rating' | 'createdAt'>, value: string) => {
      const newReviews = [...reviews];
      newReviews[index][field] = value;
      setReviews(newReviews);
  };

  const handleReviewDateChange = (index: number, date: Date | undefined) => {
      if (date) {
        const newReviews = [...reviews];
        newReviews[index].createdAt = date.toISOString();
        setReviews(newReviews);
      }
  };

  const addReview = () => {
    setReviews([...reviews, initialReview()]);
  }

  const removeReview = (index: number) => {
      const newReviews = reviews.filter((_, i) => i !== index);
      setReviews(newReviews.length > 0 ? newReviews : [initialReview()]);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!firebaseUser) {
        toast({
            title: "Authentication required",
            description: "You must be logged in to add or edit a product. Please wait a moment for authentication to complete or log in again.",
            variant: "destructive"
        });
        return;
    }

    if (!imageUrl) {
        toast({
            title: "Image URL required",
            description: "You must provide an image URL for the product.",
            variant: "destructive"
        });
        return;
    }

    setIsLoading(true);
    try {
        const productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'> = {
          name,
          reviewArticle,
          price: Number(price),
          categoryId,
          affiliateLink,
          imageUrl,
          imageHint: 'product image', // Generic hint
          videos: videos.filter(v => v.url.trim() !== ''),
          wholesale: wholesale.filter(w => w.minQuantity > 0 && w.price > 0),
          rating,
          pros: pros.filter(p => p.trim() !== ''),
          cons: cons.filter(c => c.trim() !== ''),
          reviews: reviews.filter(r => r.author.trim() !== '' && r.text.trim() !== ''),
        };

        if (isEditing && productToEdit) {
            await updateProduct(productToEdit.id, productData);
            toast({
                title: "Product Updated",
                description: \`\${productData.name} has been updated.\`
            });
        } else {
            await addProduct(productData);
            toast({
                title: "Product Added",
                description: \`\${productData.name} has been added to your store.\`
            });
        }
        onProductAdded(); 
        router.push('/admin/manage-products');

    } catch (error) {
        console.error("Error saving product:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred. Please check the console for details.";
        toast({
            title: "Error Saving Product",
            description: errorMessage,
            variant: "destructive",
            duration: 9000,
        });
    } finally {
        setIsLoading(false);
    }
  };
  
  const childCategories = categories.filter(c => c.parentId);
  const isSubmitDisabled = isLoading || authLoading || !firebaseUser;

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Fill in the product information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" name="productName" placeholder="e.g. Premium Wireless Noise-Cancelling Headphones" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" type="number" step="0.01" placeholder="e.g. 349.99" required value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" required value={categoryId} onValueChange={setCategoryId}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        {childCategories.map(category => (
                            <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Overall Rating</Label>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={\`w-6 h-6 cursor-pointer \${rating > index ? 'text-accent fill-accent' : 'text-muted-foreground'}\`}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Pros</Label>
            {pros.map((pro, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={pro} onChange={(e) => handleListChange(pros, setPros, index, e.target.value)} placeholder={\`Pro #\${index + 1}\`} />
                <Button type="button" variant="ghost" size="icon" onClick={() => removeListItem(pros, setPros, index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {pros.length < 10 && (
              <Button type="button" variant="outline" size="sm" onClick={() => addListItem(pros, setPros)}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Pro
              </Button>
            )}
          </div>

          <div className="space-y-3">
            <Label>Cons</Label>
            {cons.map((con, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={con} onChange={(e) => handleListChange(cons, setCons, index, e.target.value)} placeholder={\`Con #\${index + 1}\`} />
                <Button type="button" variant="ghost" size="icon" onClick={() => removeListItem(cons, setCons, index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {cons.length < 10 && (
              <Button type="button" variant="outline" size="sm" onClick={() => addListItem(cons, setCons)}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Con
              </Button>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reviewArticle">Review Article</Label>
             <Textarea
              id="reviewArticle"
              name="reviewArticle"
              placeholder="Write your review article here. You can use HTML for formatting, links, and images."
              className="min-h-[250px]"
              required
              value={reviewArticle} 
              onChange={(e) => setReviewArticle(e.target.value)}
            />
          </div>

           <Card>
                <CardHeader>
                    <CardTitle>Product Videos</CardTitle>
                    <CardDescription>Add up to 10 video links from YouTube, X, or Reddit.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {videos.map((video, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-2 border rounded-md">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow w-full">
                                <div className='space-y-1'>
                                    <Label htmlFor={\`video-title-\${index}\`} className="text-xs">Video Title</Label>
                                    <Input id={\`video-title-\${index}\`} value={video.title} onChange={(e) => handleVideoChange(index, 'title', e.target.value)} placeholder={\`Video #\${index + 1} Title\`} />
                                </div>
                                <div className='space-y-1'>
                                    <Label htmlFor={\`video-url-\${index}\`} className="text-xs">Video URL</Label>
                                    <Input id={\`video-url-\${index}\`} value={video.url} onChange={(e) => handleVideoChange(index, 'url', e.target.value)} placeholder="https://..." />
                                </div>
                            </div>
                            <Button type="button" variant="ghost" size="icon" className='shrink-0' onClick={() => removeVideoItem(index)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    {videos.length < 10 && (
                        <Button type="button" variant="outline" size="sm" onClick={addVideoItem}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Video
                        </Button>
                    )}
                </CardContent>
           </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Wholesale Pricing</CardTitle>
                    <CardDescription>Set up to 5 tiers for bulk orders. Leave quantity and price as 0 to ignore a tier.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   {wholesale.map((tier, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-2 border rounded-md">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow w-full">
                                <div className="space-y-1">
                                    <Label htmlFor={\`wholesaleMinQuantity-\${index}\`} className="text-xs">Minimum Quantity</Label>
                                    <Input id={\`wholesaleMinQuantity-\${index}\`} type="number" value={tier.minQuantity} onChange={(e) => handleWholesaleChange(index, 'minQuantity', e.target.value)} placeholder="e.g. 100" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor={\`wholesalePrice-\${index}\`} className="text-xs">Price per Item</Label>
                                    <Input id={\`wholesalePrice-\${index}\`} type="number" step="0.01" value={tier.price} onChange={(e) => handleWholesaleChange(index, 'price', e.target.value)} placeholder="e.g. 19.99" />
                                </div>
                           </div>
                           <Button type="button" variant="ghost" size="icon" className='shrink-0' onClick={() => removeWholesaleTier(index)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                   ))}
                    {wholesale.length < 5 && (
                        <Button type="button" variant="outline" size="sm" onClick={addWholesaleTier}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Tier
                        </Button>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <CardDescription>Add custom reviews for this product.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={review.id} className="p-4 border rounded-lg space-y-4 relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className='space-y-2'>
                                    <Label htmlFor={\`review-author-\${index}\`}>Author</Label>
                                    <Input id={\`review-author-\${index}\`} value={review.author} onChange={(e) => handleReviewChange(index, 'author', e.target.value)} placeholder="e.g. John D." />
                                </div>
                                <div className='space-y-2'>
                                    <Label>Rating</Label>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <Star
                                            key={starIndex}
                                            className={\`w-5 h-5 cursor-pointer \${review.rating > starIndex ? 'text-accent fill-accent' : 'text-muted-foreground'}\`}
                                            onClick={() => handleReviewStarClick(index, starIndex)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                               <div className='space-y-2'>
                                    <Label htmlFor={\`review-title-\${index}\`}>Review Title</Label>
                                    <Input id={\`review-title-\${index}\`} value={review.title} onChange={(e) => handleReviewChange(index, 'title', e.target.value)} placeholder="e.g. Absolutely fantastic!" />
                                </div>
                                <div className='space-y-2'>
                                    <Label>Date</Label>
                                     <Popover>
                                        <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !review.createdAt && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {review.createdAt ? format(new Date(review.createdAt), "PPP") : <span>Pick a date</span>}
                                        </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={new Date(review.createdAt)}
                                                onSelect={(date) => handleReviewDateChange(index, date)}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                             <div className='space-y-2'>
                                <Label htmlFor={\`review-text-\${index}\`}>Review Text</Label>
                                <Textarea id={\`review-text-\${index}\`} value={review.text} onChange={(e) => handleReviewChange(index, 'text', e.target.value)} placeholder="The product exceeded all my expectations..." />
                            </div>
                            <Button type="button" variant="ghost" size="icon" className='absolute top-2 right-2' onClick={() => removeReview(index)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={addReview}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Review
                    </Button>
                </CardContent>
            </Card>


          <div className="space-y-2">
            <Label htmlFor="affiliateLink">Amazon Affiliate Link</Label>
            <Input id="affiliateLink" name="affiliateLink" placeholder="https://amazon.com/..." required value={affiliateLink} onChange={(e) => setAffiliateLink(e.target.value)}/>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productImage">Product Image URL</Label>
            <Input id="productImage" name="productImage" type="text" placeholder="https://example.com/image.jpg" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
            <p className="text-xs text-muted-foreground">
                Paste the full URL of the product image.
            </p>
            {imageUrl && (
              <div className="mt-4">
                <Image src={imageUrl} alt="Image Preview" width={192} height={192} className="max-h-48 w-auto rounded-lg object-cover" unoptimized />
              </div>
            )}
          </div>

        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button type="submit" disabled={isSubmitDisabled}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Save Changes' : 'Add Product'}
          </Button>
           {!firebaseUser && authLoading && (
              <p className="text-xs text-muted-foreground flex items-center">
                <Loader2 className="mr-2 h-3 w-3 animate-spin" /> Authenticating...
              </p>
            )}
           {!firebaseUser && !authLoading && (
              <p className="text-xs text-destructive">
                Please log in to enable saving.
              </p>
            )}
        </CardFooter>
      </Card>
    </form>
  );
}
`,
  "src/components/admin/admin-login-form.tsx": `
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useAuth as useFirebaseAuth } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/auth-context';

export function AdminLoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const auth = useFirebaseAuth();
  const { firebaseUser, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('hepanblock@example.com');
  const [password, setPassword] = useState('hepanblock');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && firebaseUser) {
      router.replace('/admin');
    }
  }, [firebaseUser, authLoading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!auth) {
      toast({
        title: '认证错误',
        description: 'Firebase 未初始化。',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: '登录成功！',
        description: \`欢迎回来, 管理员！\`,
      });
      router.push('/admin'); // Force redirect on success
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          toast({
            title: '管理员账户已创建',
            description: '一个新的管理员账户已为您创建并登录。',
          });
          router.push('/admin'); // Force redirect on success
        } catch (creationError: any) {
           toast({
            title: '登录失败',
            description: '无法登录或创建管理员账户。',
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: '登录失败',
          description: '无效的凭证。',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading && !firebaseUser) {
    return (
        <div className="flex justify-center items-center h-full">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    )
  }

  // If user is already logged in, show nothing and let useEffect handle redirect.
  if (firebaseUser) {
    return null;
  }

  return (
    <form onSubmit={handleLogin}>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="email">邮箱地址</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            登录
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
`,
  "src/components/admin/review-summarizer-form.tsx": `'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { summarizeCustomerReviews, SummarizeCustomerReviewsOutput } from '@/ai/flows/summarize-customer-reviews';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export function ReviewSummarizerForm() {
  const [summary, setSummary] = useState<SummarizeCustomerReviewsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSummary(null);

    const formData = new FormData(event.currentTarget);
    const input = {
      productName: formData.get('productName') as string,
      customerReviews: formData.get('customerReviews') as string,
      summaryFeatures: formData.get('summaryFeatures') as string,
    };

    if (!input.productName || !input.customerReviews || !input.summaryFeatures) {
        setError('All fields are required.');
        setIsLoading(false);
        return;
    }

    try {
      const result = await summarizeCustomerReviews(input);
      setSummary(result);
    } catch (e) {
      setError('Error generating summary. Please check your inputs or try again later.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Input Information</CardTitle>
          <CardDescription>
            Fill out the fields below to generate a review summary.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input id="productName" name="productName" placeholder="e.g. Premium Wireless Noise-Cancelling Headphones" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="summaryFeatures">Summary Focus</Label>
            <Input id="summaryFeatures" name="summaryFeatures" placeholder="e.g. Sound Quality, Battery Life" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerReviews">Customer Reviews</Label>
            <Textarea
              id="customerReviews"
              name="customerReviews"
              placeholder="Paste customer reviews here, one per line."
              className="min-h-[150px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Summary
          </Button>
        </CardFooter>
      </Card>

      {(error || summary) && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Result</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {summary && (
              <div>
                <h3 className="font-semibold mb-2">AI Generated Summary:</h3>
                <p className="text-sm text-muted-foreground p-4 bg-secondary rounded-md">{summary.summary}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </form>
  );
}
`,
  "src/components/auth/login-form.tsx": `'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth as useFirebaseAuth } from '@/firebase';
import { Loader2 } from 'lucide-react';

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useFirebaseAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!auth) {
      toast({
        title: 'Login Failed',
        description: 'Firebase not initialized. Please try again later.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    if (!email || !password) {
      toast({
        title: 'Login Failed',
        description: 'Please enter your email and password.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      toast({
        title: 'Login Successful!',
        description: \`Welcome back, \${userCredential.user.displayName || email.split('@')[0]}!\`,
      });
      router.push('/');
    } catch (error: any) {
        let description = 'An unexpected error occurred. Please try again.';
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
            description = 'Invalid email or password. Please try again.';
        }
        toast({
            title: 'Login Failed',
            description,
            variant: 'destructive',
        });
        console.error("Login error:", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="underline hover:text-primary">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
`,
  "src/components/auth/signup-form.tsx": `'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuth as useFirebaseAuth } from '@/firebase';
import { Loader2 } from 'lucide-react';

export function SignupForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = useFirebaseAuth();


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!auth) {
      toast({
        title: 'Signup Failed',
        description: 'Firebase not initialized. Please try again later.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    if (!name || !email || !password) {
      toast({
        title: 'Signup Failed',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });
        
        toast({
            title: 'Signup Successful!',
            description: \`Welcome, \${name}! You are now logged in.\`,
        });
        router.push('/');

    } catch (error: any) {
        let description = "An unknown error occurred. Please try again.";
        if (error.code === 'auth/email-already-in-use') {
            description = "This email is already in use. Please log in or use a different email.";
        } else if (error.code === 'auth/weak-password') {
            description = "The password is too weak. Please choose a stronger password.";
        }
        
        toast({
            title: 'Signup Failed',
            description,
            variant: 'destructive',
        });
        console.error("Signup error:", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <Card>
        <CardContent className="space-y-4 pt-6">
           <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="underline hover:text-primary">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
`,
  "src/components/layout/app-footer.tsx": `'use client';
import Link from 'next/link';
import { Logo } from '../logo';
import { Settings } from '@/lib/types';


export function AppFooter({ settings }: { settings: Settings | null }) {
    const siteName = settings?.siteName || 'BestReviewZhub';
    
    return (
        <footer className="border-t bg-background">
            <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Logo siteName={siteName} />
                        <p className="text-sm text-muted-foreground">Your trusted hub for home product reviews, wholesale, and OEM customization.</p>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-semibold">Pages</h4>
                        <ul className="space-y-1 text-sm">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-semibold">Legal</h4>
                        <ul className="space-y-1 text-sm">
                           <li><p className="text-muted-foreground">As an Amazon Associate, I earn from qualifying purchases.</p></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} {siteName}. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
`,
  "src/components/layout/app-sidebar.tsx": `'use client';

import React, { useEffect, useState } from 'react';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import type { Category } from '@/lib/types';
import { Logo } from '../logo';
import { Separator } from '../ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronRight, Home, LogIn, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { getCategories } from '@/firebase/firestore/queries';


const renderCategories = (categories: Category[], parentId: string | null, pathname: string): React.ReactNode => {
  const children = categories.filter(c => c.parentId === parentId);
  if (children.length === 0) return null;

  return (
    <SidebarMenuSub>
      {children.map(category => {
        const subCategories = renderCategories(categories, category.id, pathname);
        const isActive = pathname === \`/category/\${category.id}\`;

        if (subCategories) {
          return (
            <SidebarMenuSubItem key={category.id}>
              <Collapsible>
                <CollapsibleTrigger asChild>
                    <div className='flex items-center w-full'>
                        <SidebarMenuSubButton asChild isActive={isActive}>
                            <Link href={\`/category/\${category.id}\`}>{category.name}</Link>
                        </SidebarMenuSubButton>
                        <Button variant="ghost" size="icon" className="h-7 w-7 ml-auto shrink-0">
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </Button>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {subCategories}
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuSubItem>
          );
        }

        return (
          <SidebarMenuSubItem key={category.id}>
            <SidebarMenuSubButton asChild isActive={isActive}>
                <Link href={\`/category/\${category.id}\`}>{category.name}</Link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      })}
    </SidebarMenuSub>
  );
};

export function AppSidebar() {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    }
    fetchCategories();
  }, []);

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/'}>
              <Link href="/">
                <Home />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Collapsible defaultOpen={true}>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        <span>Categories</span>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {renderCategories(categories, null, pathname)}
                </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/admin">
                        <Settings />
                        <span>Admin</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="/admin/login">
                        <LogIn />
                        <span>Admin Login</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
`,
  "src/components/layout/header.tsx": `'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CircleUser, LogOut, Package, UserPlus, LogIn } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { Logo } from '../logo';
import { ProductFilters } from '../products/product-filters';
import { SidebarTrigger } from '../ui/sidebar';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import type { Settings, NavigationLink } from '@/lib/types';


export function Header({ settings, navLinks }: { settings: Settings | null, navLinks: NavigationLink[] }) {
  const { user, logout } = useAuth();
  const siteName = settings?.siteName || 'BestReviewZhub';

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex h-16 items-center gap-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden"/>
          <Logo siteName={siteName} />
        </div>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <ProductFilters />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  {user && user.email && <AvatarImage src={\`https://avatar.vercel.sh/\${user.email}.png\`} alt={user.name || ''} />}
                  <AvatarFallback>
                    <CircleUser className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {user ? (
                <>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <Package className="mr-2 h-4 w-4" />
                      <span>Admin</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>Guest</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login">
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Login</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/signup">
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-start pb-2">
        <NavigationMenu className="hidden md:flex">
           <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                   <Link href={link.url}>
                    {link.text}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
`,
  "src/components/logo.tsx": `import Link from 'next/link';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, siteName = "BestReviewZhub" }: { className?: string, siteName?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline tracking-tight", className)}>
      <div className="flex items-center justify-center rounded-lg bg-primary p-2">
        <Home className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-primary">{siteName.split('Zhub')[0]}</span>
      <span className="text-foreground">Zhub</span>
    </Link>
  );
}
`,
  "src/components/products/product-card.tsx": `'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Mail, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const adminEmail = "admin@example.com";
  const [randomPro, setRandomPro] = useState<string | null>(null);
  const [randomCon, setRandomCon] = useState<string | null>(null);

  useEffect(() => {
    // This logic runs only on the client-side after hydration
    if (product.pros && product.pros.length > 0) {
      setRandomPro(product.pros[Math.floor(Math.random() * product.pros.length)]);
    }
    if (product.cons && product.cons.length > 0) {
      setRandomCon(product.cons[Math.floor(Math.random() * product.cons.length)]);
    }
  }, [product.pros, product.cons]);

  const validWholesaleTiers = product.wholesale?.filter(tier => tier.minQuantity > 0 && tier.price > 0) || [];

  const getWholesaleDisplay = () => {
    if (validWholesaleTiers.length === 0) return null;

    if (validWholesaleTiers.length === 1) {
      const tier = validWholesaleTiers[0];
      return {
        price: \`$\${tier.price.toFixed(2)}\`,
        quantity: \`\${tier.minQuantity} units\`
      };
    }

    const prices = validWholesaleTiers.map(t => t.price);
    const quantities = validWholesaleTiers.map(t => t.minQuantity);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const minQty = Math.min(...quantities);
    const maxQty = Math.max(...quantities);
    
    return {
      price: \`$\${minPrice.toFixed(2)} - $\${maxPrice.toFixed(2)}\`,
      quantity: \`\${minQty} - \${maxQty} units\`
    };
  };

  const wholesaleDisplay = getWholesaleDisplay();

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={\`/products/\${product.id}\`} className="block aspect-square relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product.imageHint}
            unoptimized
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow space-y-2">
        <CardTitle className="text-base mb-2 leading-tight">
          <Link href={\`/products/\${product.id}\`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <div className="space-y-1 text-xs text-muted-foreground">
          {randomPro && (
            <div className='flex items-start gap-2'>
                <Badge variant='secondary' className='text-green-600 border-green-600/20'>Pro</Badge>
                <span>{randomPro}</span>
            </div>
          )}
          {randomCon && (
            <div className='flex items-start gap-2'>
                <Badge variant='secondary' className='text-red-600 border-red-600/20'>Con</Badge>
                <span>{randomCon}</span>
            </div>
          )}
        </div>
        
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-stretch gap-2 mt-auto">
        <div className="flex justify-between items-center mb-2">
            <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
            <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)}</span>
            </div>
        </div>
        {wholesaleDisplay && (
           <div className='space-y-1 pb-2'>
            <Badge variant="secondary">Wholesale</Badge>
            <p className='text-xs text-muted-foreground'>
                <span className='font-bold text-primary'>{wholesaleDisplay.price}</span> / item
            </p>
             <p className='text-xs text-muted-foreground'>
                Min. order: {wholesaleDisplay.quantity}
            </p>
           </div>
        )}
        {wholesaleDisplay && (
            <Button asChild size="sm" variant="outline">
                <a href={\`mailto:\${adminEmail}?subject=Wholesale Inquiry for \${product.name}\`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Wholesale Inquiry
                </a>
            </Button>
        )}
        <Button asChild size="sm">
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Buy on Amazon
            </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
`,
  "src/components/products/product-filters.tsx": `'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

export function ProductFilters() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(\`/search?q=\${encodeURIComponent(searchQuery.trim())}\`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button type="submit" aria-label="Search">
        Search
      </Button>
      <Select defaultValue="relevance">
        <SelectTrigger className="w-[180px] hidden sm:flex">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
}
`,
  "src/components/ui/accordion.tsx": `"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
`,
  "src/components/ui/alert-dialog.tsx": `"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
`,
  "src/components/ui/alert.tsx": `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
`,
  "src/components/ui/avatar.tsx": `"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
`,
  "src/components/ui/badge.tsx": `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
`,
  "src/components/ui/breadcrumb.tsx": `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
`,
  "src/components/ui/button.tsx": `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
`,
  "src/components/ui/calendar.tsx": `"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
`,
  "src/components/ui/card.tsx": `import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
`,
  "src/components/ui/carousel.tsx": `"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
`,
  "src/components/ui/chart.tsx": `"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = \`chart-\${id || uniqueId.replace(/:/g, "")}\`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => \`
\${prefix} [data-chart=\${id}] {
\${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? \`  --color-\${key}: \${color};\` : null
  })
  .join("\\n")}
}
\`
          )
          .join("\\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = \`\${labelKey || item.dataKey || item.name || "value"}\`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = \`\${nameKey || item.name || item.dataKey || "value"}\`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = \`\${nameKey || item.dataKey || "value"}\`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
`,
  "src/components/ui/checkbox.tsx": `"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
`,
  "src/components/ui/collapsible.tsx": `"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
`,
  "src/components/ui/dialog.tsx": `"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
`,
  "src/components/ui/dropdown-menu.tsx": `"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
`,
  "src/components/ui/form.tsx": `"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: \`\${id}-form-item\`,
    formDescriptionId: \`\${id}-form-item-description\`,
    formMessageId: \`\${id}-form-item-message\`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? \`\${formDescriptionId}\`
          : \`\${formDescriptionId} \${formMessageId}\`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
`,
  "src/components/ui/input.tsx": `import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
`,
  "src/components/ui/label.tsx": `"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
`,
  "src/components/ui/menubar.tsx": `"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
`,
  "src/components/ui/navigation-menu.tsx": `"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
`,
  "src/components/ui/popover.tsx": `"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
`,
  "src/components/ui/progress.tsx": `"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
`,
  "src/components/ui/radio-group.tsx": `"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
`,
  "src/components/ui/scroll-area.tsx": `"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
`,
  "src/components/ui/select.tsx": `"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
`,
  "src/components/ui/separator.tsx": `"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
`,
  "src/components/ui/sheet.tsx": `"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
`,
  "src/components/ui/sidebar.tsx": `"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = \`\${SIDEBAR_COOKIE_NAME}=\${openState}; path=/; max-age=\${SIDEBAR_COOKIE_MAX_AGE}\`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return \`\${Math.floor(Math.random() * 40) + 50}%\`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
`,
  "src/components/ui/skeleton.tsx": `import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
`,
  "src/components/ui/slider.tsx": `"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
`,
  "src/components/ui/switch.tsx": `"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
`,
  "src/components/ui/table.tsx": `import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
`,
  "src/components/ui/tabs.tsx": `"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
`,
  "src/components/ui/textarea.tsx": `import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
`,
  "src/components/ui/toast.tsx": `"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
`,
  "src/components/ui/toaster.tsx": `"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
`,
  "src/components/ui/tooltip.tsx": `"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
`,
  "src/context/app-provider.tsx": `"use client";

import React from 'react';
import { AuthProvider } from './auth-context';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </FirebaseClientProvider>
  );
}
`,
  "src/context/auth-context.tsx": `'use client';

import type { User as AppUser } from '@/lib/types';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { useUser as useFirebaseUserHook, useAuth as useFirebaseAuth } from '@/firebase';
import type { User as FirebaseUser } from 'firebase/auth';

interface AuthContextType {
  user: AppUser | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user: firebaseUser, isUserLoading } = useFirebaseUserHook();
  const auth = useFirebaseAuth();
  
  const user = firebaseUser 
    ? {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
        email: firebaseUser.email || '',
      }
    : null;

  const logout = async () => {
    if (auth) {
      await auth.signOut();
    }
  };

  return (
    <AuthContext.Provider value={{ user, firebaseUser, loading: isUserLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
`,
  "src/firebase/client-provider.tsx": `'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const firebaseServices = useMemo(() => {
    // Initialize Firebase on the client side, once per component mount.
    return initializeFirebase();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
`,
  "src/firebase/config.ts": `export const firebaseConfig = {
  "projectId": "studio-917169173-e5c5a",
  "appId": "1:90050744148:web:69aff19d993e384b8682c1",
  "apiKey": "AIzaSyCILLDRRt8jKc8eMprPmu4mh5apeUtx6Kg",
  "authDomain": "studio-917169173-e5c5a.firebaseapp.com",
  "storageBucket": "studio-917169173-e5c5a.appspot.com",
  "measurementId": "",
  "messagingSenderId": "90050744148"
};
`,
  "src/firebase/error-emitter.ts": `'use client';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * Defines the shape of all possible events and their corresponding payload types.
 * This centralizes event definitions for type safety across the application.
 */
export interface AppEvents {
  'permission-error': FirestorePermissionError;
}

// A generic type for a callback function.
type Callback<T> = (data: T) => void;

/**
 * A strongly-typed pub/sub event emitter.
 * It uses a generic type T that extends a record of event names to payload types.
 */
function createEventEmitter<T extends Record<string, any>>() {
  // The events object stores arrays of callbacks, keyed by event name.
  // The types ensure that a callback for a specific event matches its payload type.
  const events: { [K in keyof T]?: Array<Callback<T[K]>> } = {};

  return {
    /**
     * Subscribe to an event.
     * @param eventName The name of the event to subscribe to.
     * @param callback The function to call when the event is emitted.
     */
    on<K extends keyof T>(eventName: K, callback: Callback<T[K]>) {
      if (!events[eventName]) {
        events[eventName] = [];
      }
      events[eventName]?.push(callback);
    },

    /**
     * Unsubscribe from an event.
     * @param eventName The name of the event to unsubscribe from.
     * @param callback The specific callback to remove.
     */
    off<K extends keyof T>(eventName: K, callback: Callback<T[K]>) {
      if (!events[eventName]) {
        return;
      }
      events[eventName] = events[eventName]?.filter(cb => cb !== callback);
    },

    /**
     * Publish an event to all subscribers.
     * @param eventName The name of the event to emit.
     * @param data The data payload that corresponds to the event's type.
     */
    emit<K extends keyof T>(eventName: K, data: T[K]) {
      if (!events[eventName]) {
        return;
      }
      events[eventName]?.forEach(callback => callback(data));
    },
  };
}

// Create and export a singleton instance of the emitter, typed with our AppEvents interface.
export const errorEmitter = createEventEmitter<AppEvents>();
`,
  "src/firebase/errors.ts": `'use client';
import { getAuth, type User } from 'firebase/auth';

type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | 'write';
  requestResourceData?: any;
};

interface FirebaseAuthToken {
  name: string | null;
  email: string | null;
  email_verified: boolean;
  phone_number: string | null;
  sub: string;
  firebase: {
    identities: Record<string, string[]>;
    sign_in_provider: string;
    tenant: string | null;
  };
}

interface FirebaseAuthObject {
  uid: string;
  token: FirebaseAuthToken;
}

interface SecurityRuleRequest {
  auth: FirebaseAuthObject | null;
  method: string;
  path: string;
  resource?: {
    data: any;
  };
}

/**
 * Builds a security-rule-compliant auth object from the Firebase User.
 * @param currentUser The currently authenticated Firebase user.
 * @returns An object that mirrors request.auth in security rules, or null.
 */
function buildAuthObject(currentUser: User | null): FirebaseAuthObject | null {
  if (!currentUser) {
    return null;
  }

  const token: FirebaseAuthToken = {
    name: currentUser.displayName,
    email: currentUser.email,
    email_verified: currentUser.emailVerified,
    phone_number: currentUser.phoneNumber,
    sub: currentUser.uid,
    firebase: {
      identities: currentUser.providerData.reduce((acc, p) => {
        if (p.providerId) {
          acc[p.providerId] = [p.uid];
        }
        return acc;
      }, {} as Record<string, string[]>),
      sign_in_provider: currentUser.providerData[0]?.providerId || 'custom',
      tenant: currentUser.tenantId,
    },
  };

  return {
    uid: currentUser.uid,
    token: token,
  };
}

/**
 * Builds the complete, simulated request object for the error message.
 * It safely tries to get the current authenticated user.
 * @param context The context of the failed Firestore operation.
 * @returns A structured request object.
 */
function buildRequestObject(context: SecurityRuleContext): SecurityRuleRequest {
  let authObject: FirebaseAuthObject | null = null;
  try {
    // Safely attempt to get the current user.
    const firebaseAuth = getAuth();
    const currentUser = firebaseAuth.currentUser;
    if (currentUser) {
      authObject = buildAuthObject(currentUser);
    }
  } catch {
    // This will catch errors if the Firebase app is not yet initialized.
    // In this case, we'll proceed without auth information.
  }

  return {
    auth: authObject,
    method: context.operation,
    path: \`/databases/(default)/documents/\${context.path}\`,
    resource: context.requestResourceData ? { data: context.requestResourceData } : undefined,
  };
}

/**
 * Builds the final, formatted error message for the LLM.
 * @param requestObject The simulated request object.
 * @returns A string containing the error message and the JSON payload.
 */
function buildErrorMessage(requestObject: SecurityRuleRequest): string {
  return \`Missing or insufficient permissions: The following request was denied by Firestore Security Rules:
\${JSON.stringify(requestObject, null, 2)}\`;
}

/**
 * A custom error class designed to be consumed by an LLM for debugging.
 * It structures the error information to mimic the request object
 * available in Firestore Security Rules.
 */
export class FirestorePermissionError extends Error {
  public readonly request: SecurityRuleRequest;

  constructor(context: SecurityRuleContext) {
    const requestObject = buildRequestObject(context);
    super(buildErrorMessage(requestObject));
    this.name = 'FirebaseError';
    this.request = requestObject;
  }
}
`,
  "src/firebase/firestore/mutations.ts": `'use client';

import { collection, addDoc, updateDoc, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { initializeFirebase } from '../index';
import type { Product, Settings, Page, NavigationLink } from '@/lib/types';
import { revalidateProducts } from '@/app/actions';
import { FirestorePermissionError } from '../errors';
import { errorEmitter } from '../error-emitter';

type ProductInput = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;


export function addProduct(productData: ProductInput): Promise<string> {
    const { firestore } = initializeFirebase();
    const productCollection = collection(firestore, 'products');
    
    const docData = {
        ...productData,
        reviews: productData.reviews || [],
        rating: productData.rating || 0,
        pros: productData.pros || [],
        cons: productData.cons || [],
        videos: productData.videos || [],
        wholesale: productData.wholesale || [],
    };
    
    return new Promise((resolve, reject) => {
        addDoc(productCollection, docData)
            .then(docRef => {
                revalidateProducts();
                resolve(docRef.id);
            })
            .catch(error => {
                console.error("Error adding product to Firestore: ", error);
                 if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: productCollection.path,
                        operation: 'create',
                        requestResourceData: docData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to add product: \${error.message}\`));
                }
            });
    });
}

export function updateProduct(productId: string, productData: Partial<ProductInput>): Promise<void> {
    const { firestore } = initializeFirebase();
    const productRef = doc(firestore, 'products', productId);

    return new Promise((resolve, reject) => {
        updateDoc(productRef, productData)
            .then(() => {
                revalidateProducts();
                resolve();
            })
            .catch(error => {
                console.error("Error updating product: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: productRef.path,
                        operation: 'update',
                        requestResourceData: productData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to update product: \${error.message}\`));
                }
            });
    });
}

export function deleteProduct(productId: string): Promise<void> {
    const { firestore } = initializeFirebase();
    const productRef = doc(firestore, 'products', productId);
    
    return new Promise((resolve, reject) => {
        deleteDoc(productRef)
            .then(() => {
                revalidateProducts();
                resolve();
            })
            .catch(error => {
                console.error("Error deleting product: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: productRef.path,
                        operation: 'delete',
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                   reject(new Error(\`Failed to delete product: \${error.message}\`));
                }
            });
    });
}

export function addCategory(name: string, parentId: string | null): Promise<string> {
    const { firestore } = initializeFirebase();
    const categoryCollection = collection(firestore, 'categories');
    const categoryData = { name, parentId };

    return new Promise((resolve, reject) => {
        addDoc(categoryCollection, categoryData)
            .then(docRef => resolve(docRef.id))
            .catch(error => {
                console.error("Error adding category: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: categoryCollection.path,
                        operation: 'create',
                        requestResourceData: categoryData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to add category: \${error.message}\`));
                }
            });
    });
}

export function updateCategory(categoryId: string, name: string, parentId: string | null): Promise<void> {
    const { firestore } = initializeFirebase();
    const categoryRef = doc(firestore, 'categories', categoryId);
    const categoryData = { name, parentId };

    return new Promise((resolve, reject) => {
        updateDoc(categoryRef, categoryData)
            .then(resolve)
            .catch(error => {
                console.error("Error updating category: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: categoryRef.path,
                        operation: 'update',
                        requestResourceData: categoryData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to update category: \${error.message}\`));
                }
            });
    });
}

export function deleteCategory(categoryId: string): Promise<void> {
    const { firestore } = initializeFirebase();
    const categoryRef = doc(firestore, 'categories', categoryId);

    return new Promise((resolve, reject) => {
        deleteDoc(categoryRef)
            .then(resolve)
            .catch(error => {
                console.error("Error deleting category: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: categoryRef.path,
                        operation: 'delete',
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to delete category: \${error.message}\`));
                }
            });
    });
}

export function saveSettings(settings: Settings): Promise<void> {
    const { firestore } = initializeFirebase();
    const settingsRef = doc(firestore, 'settings', 'site');

    return new Promise((resolve, reject) => {
        setDoc(settingsRef, settings, { merge: true })
            .then(resolve)
            .catch(error => {
                console.error("Error saving settings: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: settingsRef.path,
                        operation: 'update',
                        requestResourceData: settings,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error(\`Failed to save settings: \${error.message}\`));
                }
            });
    });
}

export function savePage(pageData: Page): Promise<void> {
    const { firestore } = initializeFirebase();
    const pageRef = doc(firestore, 'pages', pageData.id);

    return new Promise((resolve, reject) => {
        setDoc(pageRef, pageData)
            .then(resolve)
            .catch(error => {
                console.error("Error saving page: ", error);
                 if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: pageRef.path,
                        operation: 'update',
                        requestResourceData: pageData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error("Failed to save page."));
                }
            });
    });
}

export function addNavigationLink(text: string, url: string, order: number): Promise<string> {
    const { firestore } = initializeFirebase();
    const navCollection = collection(firestore, 'navigation');
    const linkData = { text, url, order };

    return new Promise((resolve, reject) => {
        addDoc(navCollection, linkData)
            .then(docRef => resolve(docRef.id))
            .catch(error => {
                console.error("Error adding navigation link: ", error);
                 if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: navCollection.path,
                        operation: 'create',
                        requestResourceData: linkData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error("Failed to add navigation link."));
                }
            });
    });
}

export function updateNavigationLink(id: string, text: string, url: string, order: number): Promise<void> {
    const { firestore } = initializeFirebase();
    const linkRef = doc(firestore, 'navigation', id);
    const linkData = { text, url, order };

    return new Promise((resolve, reject) => {
        updateDoc(linkRef, linkData)
            .then(resolve)
            .catch(error => {
                console.error("Error updating navigation link: ", error);
                 if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: linkRef.path,
                        operation: 'update',
                        requestResourceData: linkData,
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error("Failed to update navigation link."));
                }
            });
    });
}

export function deleteNavigationLink(id: string): Promise<void> {
    const { firestore } = initializeFirebase();
    const linkRef = doc(firestore, 'navigation', id);

    return new Promise((resolve, reject) => {
        deleteDoc(linkRef)
            .then(resolve)
            .catch(error => {
                console.error("Error deleting navigation link: ", error);
                if (error.code === 'permission-denied') {
                    const permissionError = new FirestorePermissionError({
                        path: linkRef.path,
                        operation: 'delete',
                    });
                    errorEmitter.emit('permission-error', permissionError);
                    reject(permissionError);
                } else {
                    reject(new Error("Failed to delete navigation link."));
                }
            });
    });
}
`,
  "src/firebase/firestore/queries.ts": `'use server';
import { collection, getDocs, getDoc, doc, query, where, limit, DocumentData, Timestamp } from 'firebase/firestore';
import { getSdks } from '../server-init'; 
import type { Product, Category, Settings, Page, NavigationLink } from '@/lib/types';

// Initialize server-side instances
const { firestore } = getSdks();

// Helper function to convert Firestore Timestamps to JSON-serializable format
const convertTimestamps = (data: DocumentData): DocumentData => {
    const newData: DocumentData = {};
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            if (value instanceof Timestamp) {
                newData[key] = value.toDate().toISOString();
            } else if (value && typeof value === 'object' && !Array.isArray(value)) {
                newData[key] = convertTimestamps(value);
            } else if (Array.isArray(value)) {
                newData[key] = value.map(item => 
                    item && typeof item === 'object' && !(item instanceof Timestamp) ? convertTimestamps(item) :
                    item instanceof Timestamp ? item.toDate().toISOString() :
                    item
                );
            } else {
                newData[key] = value;
            }
        }
    }
    return newData;
};


export async function getProducts(count?: number): Promise<Product[]> {
    try {
        let productQuery = query(collection(firestore, 'products'));
        if (count) {
            productQuery = query(collection(firestore, 'products'), limit(count));
        }
        const querySnapshot = await getDocs(productQuery);
        
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            const serializableData = convertTimestamps(data);
            return { id: doc.id, ...serializableData } as Product
        });
    } catch (error) {
        console.error("Error fetching products: ", error);
        return [];
    }
}

export async function searchProducts(searchTerm: string): Promise<Product[]> {
    if (!searchTerm) return [];
    try {
        const allProducts = await getProducts();
        const lowercasedTerm = searchTerm.toLowerCase();
        
        const filteredProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(lowercasedTerm) ||
            product.reviewArticle.toLowerCase().includes(lowercasedTerm)
        );

        return filteredProducts;
    } catch (error) {
        console.error("Error searching products: ", error);
        return [];
    }
}


export async function getProduct(id: string): Promise<Product | null> {
    try {
        const docRef = doc(firestore, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data) {
                const serializableData = convertTimestamps(data);
                return { id: docSnap.id, ...serializableData } as Product;
            }
        }
        return null;
    } catch (error) {
        console.error(\`Error fetching product with id \${id}: \`, error);
        return null;
    }
}

export async function getProductsByIds(ids: string[]): Promise<Product[]> {
    if (ids.length === 0) return [];
    try {
        const productQuery = query(collection(firestore, 'products'), where('__name__', 'in', ids));
        const querySnapshot = await getDocs(productQuery);
        
        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            const serializableData = convertTimestamps(data);
            return { id: doc.id, ...serializableData } as Product;
        }).filter((p): p is Product => p !== null);

    } catch (error) {
        console.error("Error fetching products by ids: ", error);
        return [];
    }
}

export async function getCategories(): Promise<Category[]> {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'categories'));
        const categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...convertTimestamps(doc.data()) } as Category));
        
        return categories.sort((a, b) => {
            if (a.parentId === null && b.parentId !== null) return -1;
            if (a.parentId !== null && b.parentId === null) return 1;
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
    } catch (error) {
        console.error("Error fetching categories: ", error);
        return [];
    }
}

export async function getCategory(id: string): Promise<Category | null> {
    try {
        const docRef = doc(firestore, 'categories', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data) {
                return { id: docSnap.id, ...convertTimestamps(data) } as Category;
            }
        }
        return null;
    } catch (error) {
        console.error(\`Error fetching category with id \${id}: \`, error);
        return null;
    }
}

export async function getProductsByCategoryId(categoryIds: string[]): Promise<Product[]> {
    if (categoryIds.length === 0) return [];
    try {
        const productQuery = query(collection(firestore, 'products'), where('categoryId', 'in', categoryIds));
        const querySnapshot = await getDocs(productQuery);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...convertTimestamps(doc.data()) } as Product));
    } catch (error) {
        console.error("Error fetching products by category id: ", error);
        return [];
    }
}


export async function getSettings(): Promise<Settings | null> {
    try {
        const docRef = doc(firestore, 'settings', 'site');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data) {
                const serializableData = convertTimestamps(data);
                return serializableData as Settings;
            }
        }
        return null;
    } catch (error) {
        console.error(\`Error fetching settings: \`, error);
        return null;
    }
}

export async function getPage(id: string): Promise<Page | null> {
    try {
        const docRef = doc(firestore, 'pages', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data) {
                return { id: docSnap.id, ...convertTimestamps(data) } as Page;
            }
        }
        return null;
    } catch (error) {
        console.error(\`Error fetching page with id \${id}: \`, error);
        return null;
    }
}


export async function getNavigationLinks(): Promise<NavigationLink[]> {
    try {
        const q = query(collection(firestore, 'navigation'), where('order', '>=', 0));
        const querySnapshot = await getDocs(q);
        const links = querySnapshot.docs.map(doc => ({ id: doc.id, ...convertTimestamps(doc.data()) } as NavigationLink));
        return links.sort((a, b) => a.order - b.order);
    } catch (error) {
        console.error("Error fetching navigation links: ", error);
        return [];
    }
}

export async function getPages(): Promise<Page[]> {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'pages'));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...convertTimestamps(doc.data()) } as Page));
    } catch (error) {
        console.error("Error fetching pages: ", error);
        return [];
    }
}

export async function getNavigationLink(id: string): Promise<NavigationLink | null> {
    try {
        const docRef = doc(firestore, 'navigation', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...convertTimestamps(docSnap.data()) } as NavigationLink;
        }
        return null;
    } catch (error) {
        console.error(\`Error fetching navigation link with id \${id}: \`, error);
        return null;
    }
}
`,
  "src/firebase/firestore/use-collection.tsx": `'use client';

import { useState, useEffect } from 'react';
import {
  Query,
  onSnapshot,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
  CollectionReference,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/** Utility type to add an 'id' field to a given type T. */
export type WithId<T> = T & { id: string };

/**
 * Interface for the return value of the useCollection hook.
 * @template T Type of the document data.
 */
export interface UseCollectionResult<T> {
  data: WithId<T>[] | null; // Document data with ID, or null.
  isLoading: boolean;       // True if loading.
  error: FirestoreError | Error | null; // Error object, or null.
}

/* Internal implementation of Query:
  https://github.com/firebase/firebase-js-sdk/blob/c5f08a9bc5da0d2b0207802c972d53724ccef055/packages/firestore/src/lite-api/reference.ts#L143
*/
export interface InternalQuery extends Query<DocumentData> {
  _query: {
    path: {
      canonicalString(): string;
      toString(): string;
    }
  }
}

/**
 * React hook to subscribe to a Firestore collection or query in real-time.
 * Handles nullable references/queries.
 * 
 *
 * IMPORTANT! YOU MUST MEMOIZE the inputted memoizedTargetRefOrQuery or BAD THINGS WILL HAPPEN
 * use useMemo to memoize it per React guidence.  Also make sure that it's dependencies are stable
 * references
 *  
 * @template T Optional type for document data. Defaults to any.
 * @param {CollectionReference<DocumentData> | Query<DocumentData> | null | undefined} targetRefOrQuery -
 * The Firestore CollectionReference or Query. Waits if null/undefined.
 * @returns {UseCollectionResult<T>} Object with data, isLoading, error.
 */
export function useCollection<T = any>(
    memoizedTargetRefOrQuery: ((CollectionReference<DocumentData> | Query<DocumentData>) & {__memo?: boolean})  | null | undefined,
): UseCollectionResult<T> {
  type ResultItemType = WithId<T>;
  type StateDataType = ResultItemType[] | null;

  const [data, setData] = useState<StateDataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FirestoreError | Error | null>(null);

  useEffect(() => {
    if (!memoizedTargetRefOrQuery) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Directly use memoizedTargetRefOrQuery as it's assumed to be the final query
    const unsubscribe = onSnapshot(
      memoizedTargetRefOrQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const results: ResultItemType[] = [];
        for (const doc of snapshot.docs) {
          results.push({ ...(doc.data() as T), id: doc.id });
        }
        setData(results);
        setError(null);
        setIsLoading(false);
      },
      (error: FirestoreError) => {
        // This logic extracts the path from either a ref or a query
        const path: string =
          memoizedTargetRefOrQuery.type === 'collection'
            ? (memoizedTargetRefOrQuery as CollectionReference).path
            : (memoizedTargetRefOrQuery as unknown as InternalQuery)._query.path.canonicalString()

        const contextualError = new FirestorePermissionError({
          operation: 'list',
          path,
        })

        setError(contextualError)
        setData(null)
        setIsLoading(false)

        // trigger global error propagation
        errorEmitter.emit('permission-error', contextualError);
      }
    );

    return () => unsubscribe();
  }, [memoizedTargetRefOrQuery]); // Re-run if the target query/reference changes.
  if(memoizedTargetRefOrQuery && !memoizedTargetRefOrQuery.__memo) {
    throw new Error(memoizedTargetRefOrQuery + ' was not properly memoized using useMemoFirebase');
  }
  return { data, isLoading, error };
}
`,
  "src/firebase/firestore/use-doc.tsx": `'use client';
    
import { useState, useEffect } from 'react';
import {
  DocumentReference,
  onSnapshot,
  DocumentData,
  FirestoreError,
  DocumentSnapshot,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/** Utility type to add an 'id' field to a given type T. */
type WithId<T> = T & { id: string };

/**
 * Interface for the return value of the useDoc hook.
 * @template T Type of the document data.
 */
export interface UseDocResult<T> {
  data: WithId<T> | null; // Document data with ID, or null.
  isLoading: boolean;       // True if loading.
  error: FirestoreError | Error | null; // Error object, or null.
}

/**
 * React hook to subscribe to a single Firestore document in real-time.
 * Handles nullable references.
 * 
 * IMPORTANT! YOU MUST MEMOIZE the inputted memoizedTargetRefOrQuery or BAD THINGS WILL HAPPEN
 * use useMemo to memoize it per React guidence.  Also make sure that it's dependencies are stable
 * references
 *
 *
 * @template T Optional type for document data. Defaults to any.
 * @param {DocumentReference<DocumentData> | null | undefined} docRef -
 * The Firestore DocumentReference. Waits if null/undefined.
 * @returns {UseDocResult<T>} Object with data, isLoading, error.
 */
export function useDoc<T = any>(
  memoizedDocRef: DocumentReference<DocumentData> | null | undefined,
): UseDocResult<T> {
  type StateDataType = WithId<T> | null;

  const [data, setData] = useState<StateDataType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<FirestoreError | Error | null>(null);

  useEffect(() => {
    if (!memoizedDocRef) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    // Optional: setData(null); // Clear previous data instantly

    const unsubscribe = onSnapshot(
      memoizedDocRef,
      (snapshot: DocumentSnapshot<DocumentData>) => {
        if (snapshot.exists()) {
          setData({ ...(snapshot.data() as T), id: snapshot.id });
        } else {
          // Document does not exist
          setData(null);
        }
        setError(null); // Clear any previous error on successful snapshot (even if doc doesn't exist)
        setIsLoading(false);
      },
      (error: FirestoreError) => {
        const contextualError = new FirestorePermissionError({
          operation: 'get',
          path: memoizedDocRef.path,
        })

        setError(contextualError)
        setData(null)
        setIsLoading(false)

        // trigger global error propagation
        errorEmitter.emit('permission-error', contextualError);
      }
    );

    return () => unsubscribe();
  }, [memoizedDocRef]); // Re-run if the memoizedDocRef changes.

  return { data, isLoading, error };
}
`,
  "src/firebase/index.ts": `'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  storage: FirebaseStorage;
}

// Caches Firebase instances for the client
let firebaseServices: FirebaseServices | undefined;

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
function getFirebaseServices(): FirebaseServices {
    if (firebaseServices) {
        return firebaseServices;
    }

    let firebaseApp: FirebaseApp;
    if (!getApps().length) {
        firebaseApp = initializeApp(firebaseConfig);
    } else {
        firebaseApp = getApp();
    }

    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);
    
    firebaseServices = { firebaseApp, auth, firestore, storage };
    
    return firebaseServices;
}

export function initializeFirebase() {
  return getFirebaseServices();
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './errors';
export * from './error-emitter';
`,
  "src/firebase/provider.tsx": `'use client';

import React, { DependencyList, createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth, User, onAuthStateChanged } from 'firebase/auth';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener'

interface FirebaseProviderProps {
  children: ReactNode;
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
}

// Internal state for user authentication
interface UserAuthState {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

// Combined state for the Firebase context
export interface FirebaseContextState {
  areServicesAvailable: boolean; // True if core services (app, firestore, auth instance) are provided
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null; // The Auth service instance
  // User authentication state
  user: User | null;
  isUserLoading: boolean; // True during initial auth check
  userError: Error | null; // Error from auth listener
}

// Return type for useFirebase()
export interface FirebaseServicesAndUser {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

// Return type for useUser() - specific to user auth state
export interface UserHookResult { // Renamed from UserAuthHookResult for consistency if desired, or keep as UserAuthHookResult
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

// React Context
export const FirebaseContext = createContext<FirebaseContextState | undefined>(undefined);

/**
 * FirebaseProvider manages and provides Firebase services and user authentication state.
 */
export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
  firebaseApp,
  firestore,
  auth,
}) => {
  const [userAuthState, setUserAuthState] = useState<UserAuthState>({
    user: null,
    isUserLoading: true, // Start loading until first auth event
    userError: null,
  });

  // Effect to subscribe to Firebase auth state changes
  useEffect(() => {
    if (!auth) { // If no Auth service instance, cannot determine user state
      setUserAuthState({ user: null, isUserLoading: false, userError: new Error("Auth service not provided.") });
      return;
    }

    setUserAuthState({ user: null, isUserLoading: true, userError: null }); // Reset on auth instance change

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => { // Auth state determined
        setUserAuthState({ user: firebaseUser, isUserLoading: false, userError: null });
      },
      (error) => { // Auth listener error
        console.error("FirebaseProvider: onAuthStateChanged error:", error);
        setUserAuthState({ user: null, isUserLoading: false, userError: error });
      }
    );
    return () => unsubscribe(); // Cleanup
  }, [auth]); // Depends on the auth instance

  // Memoize the context value
  const contextValue = useMemo((): FirebaseContextState => {
    const servicesAvailable = !!(firebaseApp && firestore && auth);
    return {
      areServicesAvailable: servicesAvailable,
      firebaseApp: servicesAvailable ? firebaseApp : null,
      firestore: servicesAvailable ? firestore : null,
      auth: servicesAvailable ? auth : null,
      user: userAuthState.user,
      isUserLoading: userAuthState.isUserLoading,
      userError: userAuthState.userError,
    };
  }, [firebaseApp, firestore, auth, userAuthState]);

  return (
    <FirebaseContext.Provider value={contextValue}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
};

/**
 * Hook to access core Firebase services and user authentication state.
 * Throws error if core services are not available or used outside provider.
 */
export const useFirebase = (): FirebaseServicesAndUser => {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider.');
  }

  if (!context.areServicesAvailable || !context.firebaseApp || !context.firestore || !context.auth) {
    throw new Error('Firebase core services not available. Check FirebaseProvider props.');
  }

  return {
    firebaseApp: context.firebaseApp,
    firestore: context.firestore,
    auth: context.auth,
    user: context.user,
    isUserLoading: context.isUserLoading,
    userError: context.userError,
  };
};

/** Hook to access Firebase Auth instance. */
export const useAuth = (): Auth => {
  const { auth } = useFirebase();
  return auth;
};

/** Hook to access Firestore instance. */
export const useFirestore = (): Firestore => {
  const { firestore } = useFirebase();
  return firestore;
};

/** Hook to access Firebase App instance. */
export const useFirebaseApp = (): FirebaseApp => {
  const { firebaseApp } = useFirebase();
  return firebaseApp;
};

type MemoFirebase <T> = T & {__memo?: boolean};

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): T | (MemoFirebase<T>) {
  const memoized = useMemo(factory, deps);
  
  if(typeof memoized !== 'object' || memoized === null) return memoized;
  (memoized as MemoFirebase<T>).__memo = true;
  
  return memoized;
}

/**
 * Hook specifically for accessing the authenticated user's state.
 * This provides the User object, loading status, and any auth errors.
 * @returns {UserHookResult} Object with user, isUserLoading, userError.
 */
export const useUser = (): UserHookResult => { // Renamed from useAuthUser
  const { user, isUserLoading, userError } = useFirebase(); // Leverages the main hook
  return { user, isUserLoading, userError };
};
`,
  "src/firebase/server-init.ts": `import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

// This file is intended for server-side use ONLY.

interface FirebaseServerServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  storage: FirebaseStorage;
}

// Caches Firebase admin instances.
let firebaseServerServices: FirebaseServerServices | undefined;

function getFirebaseServerServices(): FirebaseServerServices {
    if (firebaseServerServices) {
        return firebaseServerServices;
    }

    let firebaseApp: FirebaseApp;
    if (!getApps().length) {
        firebaseApp = initializeApp(firebaseConfig);
    } else {
        firebaseApp = getApp();
    }

    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);
    
    firebaseServerServices = { firebaseApp, auth, firestore, storage };
    
    return firebaseServerServices;
}


export function getSdks() {
  return getFirebaseServerServices();
}
`,
  "src/hooks/use-mobile.tsx": `import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(\`(max-width: \${MOBILE_BREAKPOINT - 1}px)\`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
`,
  "src/hooks/use-toast.ts": `"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
`,
  "src/lib/mock-data.ts": `import type { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  // Top-level categories
  { id: 'electronics', name: 'Electronics', parentId: null },
  { id: 'home-kitchen', name: 'Home & Kitchen', parentId: null },
  { id: 'books', name: 'Books', parentId: null },
  { id: 'clothing', name: 'Clothing, Shoes & Jewelry', parentId: null },
  { id: 'toys-games', name: 'Toys & Games', parentId: null },
  { id: 'sports-outdoors', name: 'Sports & Outdoors', parentId: null },
  
  // Sub-categories
  { id: 'computers-accessories', name: 'Computers & Accessories', parentId: 'electronics' },
  { id: 'camera-photo', name: 'Camera & Photo', parentId: 'electronics' },
  { id: 'headphones', name: 'Headphones', parentId: 'electronics' },
  { id: 'kitchen-dining', name: 'Kitchen & Dining', parentId: 'home-kitchen' },
  { id: 'home-decor', name: 'Home Décor', parentId: 'home-kitchen' },
  { id: 'bedding', name: 'Bedding', parentId: 'home-kitchen' },
  { id: 'science-fiction', name: 'Science Fiction & Fantasy', parentId: 'books' },
  { id: 'biographies', name: 'Biographies & Memoirs', parentId: 'books' },
  { id: 'mens-fashion', name: 'Men\\'s Fashion', parentId: 'clothing' },
  { id: 'womens-fashion', name: 'Women\\'s Fashion', parentId: 'clothing' },
  { id: 'board-games', name: 'Board Games', parentId: 'toys-games' },
  { id: 'camping-hiking', name: 'Camping & Hiking', parentId: 'sports-outdoors' },
];

export const PRODUCTS: Omit<Product, 'createdAt' | 'updatedAt'>[] = [
  {
    id: '1',
    name: 'Premium Wireless Noise-Cancelling Headphones',
    reviewArticle: 'Immerse yourself in pure music. Our premium wireless headphones feature industry-leading noise cancellation, superior sound quality, and up to 30 hours of battery life. These are perfect for travelers and commuters who need to block out external noise and enjoy high-fidelity audio. The build quality is excellent, with plush earcups that provide all-day comfort.',
    price: 349.99,
    imageUrl: 'https://picsum.photos/seed/product1/600/600',
    imageHint: 'headphones technology',
    categoryId: 'headphones',
    affiliateLink: 'https://amazon.com',
    rating: 4.8,
    pros: ['Industry-leading noise cancellation', 'Superb sound quality', 'Long battery life (30 hours)', 'Comfortable for long wear'],
    cons: ['Premium price point', 'Bulky carrying case'],
    reviews: [
      { id: 'r1', author: 'John Doe', rating: 5, title: 'Amazing sound quality!', text: 'The noise cancellation is incredible, and the battery life is fantastic.', createdAt: '2023-05-10T00:00:00.000Z' },
      { id: 'r2', author: 'Jane Smith', rating: 4, title: 'Very comfortable', text: 'Can wear them all day, but they are a bit pricey.', createdAt: '2023-05-12T00:00:00.000Z' },
    ],
    videos: [{ title: "Official Product Trailer", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }],
    wholesale: [{ minQuantity: 10, price: 319.99 }],
  },
  {
    id: '2',
    name: '14-Inch Ultra-Thin Laptop',
    reviewArticle: 'A perfect blend of performance and portability. This 14-inch laptop features a powerful processor, a vibrant display, and an all-day battery life, weighing just 2.5 lbs. Ideal for students and professionals on the move.',
    price: 1299.00,
    imageUrl: 'https://picsum.photos/seed/product2/600/600',
    imageHint: 'laptop computer',
    categoryId: 'computers-accessories',
    affiliateLink: 'https://amazon.com',
    rating: 4.7,
    pros: ['Incredibly lightweight', 'Powerful for its size', 'Excellent battery life', 'Beautiful high-resolution screen'],
    cons: ['Limited port selection', 'Can get warm under heavy load'],
    reviews: [
        { id: 'r3', author: 'Emily White', rating: 5, title: 'The perfect travel laptop!', text: 'So light I forget it\\'s in my bag. The screen is gorgeous.', createdAt: '2023-06-20T00:00:00.000Z' },
    ],
    videos: [],
    wholesale: [],
  },
  {
    id: '3',
    name: 'Professional Mirrorless Camera Kit',
    reviewArticle: 'Capture your world in stunning detail. This mirrorless camera offers a 24MP full-frame sensor, 4K video recording, and a versatile 24-70mm lens. Its compact body and advanced autofocus make it a favorite among enthusiasts and pros.',
    price: 1999.99,
    imageUrl: 'https://picsum.photos/seed/product3/600/600',
    imageHint: 'camera photography',
    categoryId: 'camera-photo',
    affiliateLink: 'https://amazon.com',
    rating: 4.9,
    pros: ['Exceptional image quality', 'Fast and accurate autofocus', 'Compact and weather-sealed body', 'Excellent 4K video features'],
    cons: ['Menu system can be complex', 'Battery life could be better'],
    reviews: [
        { id: 'r4', author: 'Michael Brown', rating: 5, title: 'A powerhouse in a small package.', text: 'I sold my DSLR for this and have no regrets. The image quality is breathtaking.', createdAt: '2023-07-01T00:00:00.000Z' },
    ],
    videos: [],
    wholesale: [],
  },
  {
    id: '4',
    name: 'Smart Robot Vacuum Cleaner',
    reviewArticle: 'Keep your floors spotless effortlessly. This robot vacuum uses LiDAR navigation to map your home for efficient cleaning. With strong suction and an auto-empty station, it provides a truly hands-off cleaning experience.',
    price: 499.50,
    imageUrl: 'https://picsum.photos/seed/product4/600/600',
    imageHint: 'robot vacuum',
    categoryId: 'home-kitchen',
    affiliateLink: 'https://amazon.com',
    rating: 4.6,
    pros: ['LIDAR navigation is very accurate', 'Powerful suction for pet hair', 'Convenient auto-empty station', 'App is easy to use'],
    cons: ['Can be loud, especially the empty station', 'Sometimes avoids dark-colored rugs'],
    reviews: [
        { id: 'r5', author: 'Sarah Green', rating: 4, title: 'A huge time saver', text: 'Does a great job on my hardwood floors. The auto-empty is a game-changer.', createdAt: '2023-04-15T00:00:00.000Z' },
    ],
    videos: [],
    wholesale: [],
  },
  {
    id: '5',
    name: 'The Starlight Odyssey: A Sci-Fi Epic',
    reviewArticle: 'A sprawling space opera that has been hailed as a modern classic. Follow the journey of the starship \\'Wanderer\\' as its crew navigates political intrigue, ancient mysteries, and the vast emptiness of space. A must-read for any sci-fi fan.',
    price: 18.99,
    imageUrl: 'https://picsum.photos/seed/product5/600/600',
    imageHint: 'book cover',
    categoryId: 'science-fiction',
    affiliateLink: 'https://amazon.com',
    rating: 4.9,
    pros: ['Incredible world-building', 'Deeply developed characters', 'A gripping, unpredictable plot'],
    cons: ['Pacing is slow in the first few chapters'],
    reviews: [
        { id: 'r6', author: 'David Chen', rating: 5, title: 'One of the best books I\\'ve ever read.', text: 'I couldn\\'t put it down. The universe the author created is just incredible.', createdAt: '2023-03-22T00:00:00.000Z' },
    ],
    videos: [],
    wholesale: [],
  },
  {
    id: '6',
    name: 'Cast Iron Dutch Oven, 5.5-Quart',
    reviewArticle: 'A versatile kitchen workhorse. Perfect for slow-cooking, searing, baking, and more. The enamel coating prevents sticking and makes cleanup easy, while the cast iron provides exceptional heat retention and distribution.',
    price: 69.95,
    imageUrl: 'https://picsum.photos/seed/product6/600/600',
    imageHint: 'dutch oven',
    categoryId: 'kitchen-dining',
    affiliateLink: 'https://amazon.com',
    rating: 4.8,
    pros: ['Excellent heat retention', 'Extremely versatile', 'Durable enamel finish', 'Great value for the price'],
    cons: ['Very heavy', 'Enamel can chip if handled roughly'],
    reviews: [
        { id: 'r7', author: 'Jessica Miller', rating: 5, title: 'My new favorite pot!', text: 'I use this for everything from baking bread to making stews. It cooks so evenly.', createdAt: '2023-08-05T00:00:00.000Z' },
    ],
    videos: [],
    wholesale: [],
  },
  {
    id: '7',
    name: 'Men\\'s Classic Leather Sneakers',
    reviewArticle: 'Timeless style meets modern comfort. These sneakers are crafted from premium leather with a cushioned insole for all-day wear. Their minimalist design makes them versatile enough to be dressed up or down.',
    price: 85.00,
    imageUrl: 'https://picsum.photos/seed/product7/600/600',
    imageHint: 'sneakers shoes',
    categoryId: 'mens-fashion',
    affiliateLink: 'https://amazon.com',
    rating: 4.5,
    pros: ['High-quality leather', 'Very comfortable', 'Versatile, minimalist design'],
    cons: ['Requires a break-in period', 'White soles get dirty easily'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '8',
    name: 'Abstract Canvas Wall Art',
    reviewArticle: 'Add a touch of modern elegance to your space with this beautiful abstract canvas print. The gallery-wrapped canvas is stretched over a durable wood frame, ready to hang. A perfect statement piece for your living room or office.',
    price: 120.00,
    imageUrl: 'https://picsum.photos/seed/product8/600/600',
    imageHint: 'art painting',
    categoryId: 'home-decor',
    affiliateLink: 'https://amazon.com',
    rating: 4.7,
    pros: ['Vibrant colors', 'High-quality print', 'Comes ready to hang'],
    cons: ['Frame is a bit thin'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '9',
    name: 'Gaming Mouse with RGB Lighting',
    reviewArticle: 'Gain a competitive edge with this high-precision gaming mouse. Featuring a 16,000 DPI optical sensor, programmable buttons, and customizable RGB lighting. Its ergonomic design ensures comfort during long gaming sessions.',
    price: 49.99,
    imageUrl: 'https://picsum.photos/seed/product9/600/600',
    imageHint: 'gaming mouse',
    categoryId: 'computers-accessories',
    affiliateLink: 'https://amazon.com',
    rating: 4.6,
    pros: ['Highly accurate sensor', 'Comfortable ergonomic shape', 'Lots of customization options', 'Great price for the features'],
    cons: ['Software can be confusing at first'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '10',
    name: 'True Wireless Earbuds with Charging Case',
    reviewArticle: 'Enjoy true freedom with these wireless earbuds. Offering crisp sound, a comfortable fit, and a pocket-friendly charging case that provides up to 24 hours of total listening time. They pair instantly and provide a stable connection.',
    price: 79.99,
    imageUrl: 'https://picsum.photos/seed/product10/600/600',
    imageHint: 'earbuds audio',
    categoryId: 'headphones',
    affiliateLink: 'https://amazon.com',
    rating: 4.4,
    pros: ['Good sound for the price', 'Compact and portable', 'Stable bluetooth connection', 'Comfortable fit'],
    cons: ['No active noise cancellation', 'Microphone quality is average'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '11',
    name: 'Luxury Goose Down Comforter',
    reviewArticle: 'Experience hotel-quality sleep every night. Our luxury comforter is filled with premium, ethically sourced goose down for ultimate softness and warmth. The baffle box construction prevents shifting, and the 100% cotton shell is breathable and soft to the touch.',
    price: 299.00,
    imageUrl: 'https://picsum.photos/seed/product11/600/600',
    imageHint: 'bed comforter',
    categoryId: 'bedding',
    affiliateLink: 'https://amazon.com',
    rating: 4.9,
    pros: ['Incredibly soft and fluffy', 'Provides excellent warmth without being heavy', 'High-quality materials and construction'],
    cons: ['Dry clean only', 'Initial down odor that dissipates'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '12',
    name: 'The Alchemist by Paulo Coelho',
    reviewArticle: 'A timeless fable about following your dream. Paulo Coelho\\'s enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.',
    price: 12.50,
    imageUrl: 'https://picsum.photos/seed/product12/600/600',
    imageHint: 'book novel',
    categoryId: 'books',
    affiliateLink: 'https://amazon.com',
    rating: 4.7,
    pros: ['Inspiring and motivational story', 'Beautifully written and easy to read', 'Profound life lessons'],
    cons: ['Some may find the story too simplistic'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '13',
    name: 'Women\\'s High-Waisted Yoga Pants',
    reviewArticle: 'The perfect leggings for yoga, workouts, or just lounging. Made with a buttery-soft, four-way stretch fabric that is completely opaque. The high-waisted design provides gentle tummy control and a flattering silhouette.',
    price: 25.00,
    imageUrl: 'https://picsum.photos/seed/product13/600/600',
    imageHint: 'yoga pants',
    categoryId: 'womens-fashion',
    affiliateLink: 'https://amazon.com',
    rating: 4.6,
    pros: ['Extremely comfortable and soft', 'Squat-proof and non-see-through', 'Flattering high-waist fit', 'Available in many colors'],
    cons: ['Can attract pet hair', 'Sizing can be inconsistent between colors'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '14',
    name: 'Catan The Board Game',
    reviewArticle: 'The classic game of settlement, trade, and development. In Catan, players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players collect these resources to build up their civilizations to get to 10 victory points.',
    price: 44.99,
    imageUrl: 'https://picsum.photos/seed/product14/600/600',
    imageHint: 'board game',
    categoryId: 'board-games',
    affiliateLink: 'https://amazon.com',
    rating: 4.8,
    pros: ['High replayability', 'Engaging for a wide range of ages', 'Good balance of strategy and luck'],
    cons: ['Can be frustrating if you don\\'t get good dice rolls', 'Game length can be long for new players'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '15',
    name: '2-Person Camping Tent',
    reviewArticle: 'Lightweight, waterproof, and easy to set up, this tent is perfect for your next backpacking adventure. It features a durable rainfly, mesh windows for ventilation, and interior pockets for storage. Packs down small for easy transport.',
    price: 79.95,
    imageUrl: 'https://picsum.photos/seed/product15/600/600',
    imageHint: 'tent camping',
    categoryId: 'camping-hiking',
    affiliateLink: 'https://amazon.com',
    rating: 4.5,
    pros: ['Lightweight and compact', 'Easy to assemble', 'Good waterproofing'],
    cons: ['A bit snug for two large adults', 'Stakes could be more durable'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '16',
    name: 'Steve Jobs by Walter Isaacson',
    reviewArticle: 'Based on more than forty interviews with Steve Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.',
    price: 20.00,
    imageUrl: 'https://picsum.photos/seed/product16/600/600',
    imageHint: 'biography book',
    categoryId: 'biographies',
    affiliateLink: 'https://amazon.com',
    rating: 4.6,
    pros: ['In-depth and well-researched', 'Provides fascinating insights into Jobs\\' personality', 'Engaging and well-written'],
    cons: ['Can be repetitive at times', 'Very long'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '17',
    name: 'Waterproof Hiking Boots',
    reviewArticle: 'Conquer any trail with these rugged, waterproof hiking boots. They feature a high-traction outsole for superior grip, a cushioned midsole for comfort, and a waterproof membrane to keep your feet dry. The ankle-high design provides excellent support.',
    price: 130.00,
    imageUrl: 'https://picsum.photos/seed/product17/600/600',
    imageHint: 'hiking boots',
    categoryId: 'camping-hiking',
    affiliateLink: 'https://amazon.com',
    rating: 4.7,
    pros: ['Excellent traction on various surfaces', 'Truly waterproof', 'Great ankle support', 'Durable construction'],
    cons: ['Heavier than trail running shoes', 'Can be warm in hot weather'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
  {
    id: '18',
    name: 'Portable Bluetooth Speaker',
    reviewArticle: 'Take the party with you wherever you go. This portable speaker offers surprisingly powerful sound and deep bass in a compact, waterproof design. With a 12-hour battery life, you can keep the music going all day long.',
    price: 39.99,
    imageUrl: 'https://picsum.photos/seed/product18/600/600',
    imageHint: 'bluetooth speaker',
    categoryId: 'electronics',
    affiliateLink: 'https://amazon.com',
    rating: 4.5,
    pros: ['Impressive sound for its size', 'Waterproof and durable', 'Long battery life', 'Easy to pair and use'],
    cons: ['Lacks a 3.5mm audio jack', 'Charges via Micro-USB, not USB-C'],
    reviews: [],
    videos: [],
    wholesale: [],
  },
];
`,
  "src/lib/placeholder-images.json": `{
  "placeholderImages": [
    {
      "id": "prod_1",
      "description": "Modern wireless headphones",
      "imageUrl": "https://images.unsplash.com/photo-1675589052020-0489b8a84f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aGVhZHBob25lcyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzY2NDcyNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "headphones technology"
    },
    {
      "id": "prod_2",
      "description": "Smart watch with fitness tracker",
      "imageUrl": "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjY0NzI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "smartwatch technology"
    },
    {
      "id": "prod_3",
      "description": "Ergonomic mechanical keyboard",
      "imageUrl": "https://images.unsplash.com/photo-1608742213632-1dfd28dfb0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNvbXB1dGVyfGVufDB8fHx8MTc2NjM4MjkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "keyboard computer"
    },
    {
      "id": "prod_4",
      "description": "High-resolution 4K monitor",
      "imageUrl": "https://images.unsplash.com/photo-1666771410003-8437c4781d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb25pdG9yJTIwc2NyZWVufGVufDB8fHx8MTc2NjQyMzkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "monitor screen"
    },
    {
      "id": "prod_5",
      "description": "Portable power bank",
      "imageUrl": "https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxwb3dlciUyMGJhbmt8ZW58MHx8fHwxNzY2NDE3NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "power bank"
    },
    {
      "id": "prod_6",
      "description": "Professional DSLR camera",
      "imageUrl": "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3NjY0NDI3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "camera photography"
    },
    {
      "id": "prod_7",
      "description": "Robot vacuum cleaner",
      "imageUrl": "https://images.unsplash.com/photo-1765970101361-dda0e0eb4648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx2YWN1dW0lMjBob21lfGVufDB8fHx8MTc2NjQ3MjYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "vacuum home"
    },
    {
      "id": "prod_8",
      "description": "Espresso coffee machine",
      "imageUrl": "https://images.unsplash.com/photo-1607396528402-6fd91c7074a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb2ZmZWUlMjBtYWNoaW5lfGVufDB8fHx8MTc2NjQwNTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "coffee machine"
    },
    {
      "id": "prod_9",
      "description": "Electric standing desk",
      "imageUrl": "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkZXNrJTIwb2ZmaWNlfGVufDB8fHx8MTc2NjQ3MjYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "desk office"
    },
    {
      "id": "prod_10",
      "description": "Air fryer for healthy cooking",
      "imageUrl": "https://images.unsplash.com/photo-1617775047746-5b36a40109f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhaXIlMjBmcnllcnxlbnwwfHx8fDE3NjYzOTAyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "air fryer"
    },
    {
      "id": "hero_image",
      "description": "A vibrant display of various products.",
      "imageUrl": "https://images.unsplash.com/photo-1656360088907-5109c245851d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0cyUyMHNob3BwaW5nfGVufDB8fHx8MTc2NjQ3MjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "imageHint": "products shopping"
    }
  ]
}
`,
  "src/lib/placeholder-images.ts": `import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
`,
  "src/lib/types.ts": `import { Timestamp } from 'firebase/firestore';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  title: string;
  text: string;
  createdAt: string; // Storing date as ISO string
};

export type ProductVideo = {
  title: string;
  url: string;
};

export type WholesaleTier = {
  minQuantity: number;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  reviewArticle: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  categoryId: string;
  reviews: Review[];
  affiliateLink: string;
  videos: ProductVideo[];
  wholesale?: WholesaleTier[];
  rating: number;
  pros: string[];
  cons: string[];
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
};

export type Category = {
  id: string;
  name: string;
  parentId: string | null;
};

export type Settings = {
  siteName: string;
  wholesaleEmail: string;
  seo: {
    home: SEOSettings;
    product: SEOSettings;
    category: SEOSettings;
    search: SEOSettings;
  };
  sitemap: {
    lastGenerated: string | null;
  };
  heroImage: {
    url: string;
    alt: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
};

export type SEOSettings = {
    title: string;
    description: string;
    keywords: string;
}

export type Page = {
    id: 'about' | 'contact';
    title: string;
    content: string; // HTML content
}

export type NavigationLink = {
    id: string;
    text: string;
    url: string;
    order: number;
}
`,
  "src/lib/utils.ts": `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`,
  "src/scripts/seed-db.ts": `
'use client';

import { collection, doc, writeBatch } from 'firebase/firestore';
import { initializeFirebase } from '../firebase';
import { PRODUCTS, CATEGORIES } from '../lib/mock-data';

const { firestore: db } = initializeFirebase();

export async function seedDatabaseClientSide() {
  console.log('Starting to seed database from the client...');

  try {
    // Seed Categories
    const categoriesBatch = writeBatch(db);
    const categoriesCollection = collection(db, 'categories');
    console.log(\`Seeding \${CATEGORIES.length} categories...\`);
    CATEGORIES.forEach(category => {
      const docRef = doc(categoriesCollection, category.id);
      categoriesBatch.set(docRef, { name: category.name, parentId: category.parentId });
    });
    await categoriesBatch.commit();
    console.log('Successfully seeded categories.');

    // Seed Products
    const productsBatch = writeBatch(db);
    const productsCollection = collection(db, 'products');
    console.log(\`Seeding \${PRODUCTS.length} products...\`);
    PRODUCTS.forEach(product => {
      const docRef = doc(productsCollection, product.id);
      const { id, ...productData } = product; // Exclude the ID from the document data itself
      productsBatch.set(docRef, productData);
    });
    await productsBatch.commit();
    console.log('Successfully seeded products.');

    console.log('Database seeding completed successfully from the client!');
  } catch (error) {
    console.error('Error seeding database from client:', error);
    if (error instanceof Error) {
        throw new Error(\`Database seeding failed: \${error.message}\`);
    } else {
        throw new Error('An unknown error occurred during database seeding.');
    }
  }
}
`,
  "tailwind.config.ts": `import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['PT Sans', 'sans-serif'],
        headline: ['PT Sans', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
`,
  "tsconfig.json": `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`,
};

// This function is a placeholder for the user's action of creating the file on GitHub.
// In a real scenario, the AI would wait for the user to confirm they've created the file.
function userCreatesFileOnGitHub(fileName, content) {
  console.log(\`[User Action] Please create a file named '\${fileName}' on GitHub with the following content:\`);
  // In a real scenario, this would be a manual step for the user.
  // For this simulation, we'll assume it's done.
}

userCreatesFileOnGitHub('seed-repo.js', \`
const fs = require('fs');
const path = require('path');

const projectFiles = ${JSON.stringify(projectFiles, null, 2)};

function createProjectStructure() {
  console.log('Reconstructing project files...');
  for (const [filePath, content] of Object.entries(projectFiles)) {
    const dir = path.dirname(filePath);
    if (dir !== '.' && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(\`Created directory: \${dir}\`);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(\`Created file: \${filePath}\`);
  }
  console.log('Project reconstruction complete.');
}

createProjectStructure();
\`);
