import { Metadata } from 'next';

import { RootProvider } from '@/components/providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Next.js',
		template: '%s| Next.js'
	},
	description: 'Next.js boilerplate.'
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en-US" suppressHydrationWarning>
			<body className="antialised h-dvh scroll-smooth">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
