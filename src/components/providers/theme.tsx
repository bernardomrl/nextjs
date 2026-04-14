'use client';

import { ThemeProvider as Comp } from 'next-themes';

export const ThemeProvider = ({ children }: Readonly<React.PropsWithChildren>) => {
	const scriptProps =
		typeof window === 'undefined' ? undefined : ({ type: 'application/json' } as const);

	return (
		<Comp
			scriptProps={scriptProps}
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</Comp>
	);
};
