import type { Metadata } from 'next';
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
      template: `%s | ${siteName}`,
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
