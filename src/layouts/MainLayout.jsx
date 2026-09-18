import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Ambient } from '../components/Ambient';
import { ScrollProgress } from '../components/ScrollProgress';
import { useContentStore } from '../store/contentStore';

export default function MainLayout() {
  const hydrate = useContentStore((s) => s.hydrate);

  // Bundled content renders immediately; live content swaps in once fetched.
  useEffect(() => { hydrate(); }, [hydrate]);

  return (
    <>
      <Ambient />
      <ScrollProgress />
      <div className="relative z-[2] flex min-h-svh flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
}
