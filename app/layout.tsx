// "use client";
// import { createRoot } from 'react-dom/client'
// import App from './App'

// "use client";
// createRoot(document.getElementById("root")!).render(<App />);
// app/layout.tsx
// import './globals.css';

import "./index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

// Add this configuration
export const metadata = {
  // ... your other metadata
  scrollRestoration: "manual",
};
