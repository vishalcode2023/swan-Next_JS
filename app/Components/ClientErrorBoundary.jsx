"use client";

import dynamic from "next/dynamic";

// Use dynamic import with no SSR for client components
const ErrorBoundary = dynamic(() => import("./ErrorBoundary"), { ssr: false });

export default function ClientErrorBoundary({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
} 