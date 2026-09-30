import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Home ships in the main chunk; the rest split out.
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const page = (El) => (
  <Suspense fallback={<div className="min-h-svh" aria-busy="true" />}>
    <El />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: page(Products) },
      { path: '/products/:range/:model', element: page(ProductDetail) },
      { path: '/industries', element: page(Industries) },
      { path: '/about', element: page(About) },
      { path: '/blog', element: page(Blog) },
      { path: '/blog/:slug', element: page(PostDetail) },
      { path: '/contact', element: page(Contact) },
      { path: '*', element: page(NotFound) },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
