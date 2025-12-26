import { AppSidebar } from '@/components/layout/app-sidebar';
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
