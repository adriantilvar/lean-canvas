import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lean Canvas Builder",
  description: "A simple app that lets you create a Lean Canvas document.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪧</text></svg>"
        />
      </head>
      <body className="flex h-screen w-screen flex-col bg-zinc-100">
        <main className="flex-1 p-6">{children}</main>
        <footer className="px-6 py-2 text-xs italic text-zinc-400">
          The Lean Canvas, adapted by Ash Maurya from the Business Model Canvas,
          CC BY-SA 3.0 license.
        </footer>
      </body>
    </html>
  );
}
