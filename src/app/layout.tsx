import { Inter as Sans } from 'next/font/google';

import { RootProvider } from '@/components/providers';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const sans = Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'text-foreground bg-background font-sans subpixel-antialiased',
					sans.variable
				)}
			>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
