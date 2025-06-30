import { FontProvider, ThemeProvider } from '@/components/providers';

export function RootProvider({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider>
			<FontProvider>{children}</FontProvider>
		</ThemeProvider>
	);
}
