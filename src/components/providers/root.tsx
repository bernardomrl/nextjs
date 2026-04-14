import { ThemeProvider } from '@/components/providers';

export const RootProvider = ({ children }: Readonly<React.PropsWithChildren>) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
