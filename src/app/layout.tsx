import { RootProvider } from "@/components/providers";

import "@/styles/globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
