import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/product-card';
import Link from 'next/link';
import { getProducts, getSettings } from '@/firebase/firestore/queries';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

async function HomePageContent() {
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

export default function Page() {
  return (
    <Suspense>
      <HomePageContent />
    </Suspense>
  );
}
