import { ThemeProvider } from "@/components/providers";

export function RootProvider({ children }: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
