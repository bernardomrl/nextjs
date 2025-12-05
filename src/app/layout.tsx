import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Next.js boilerplate',
		template: '%s | Next.js'
	}
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="pt-BR">
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
