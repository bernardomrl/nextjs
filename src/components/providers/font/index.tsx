import { Geist as Sans, Geist_Mono as Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

const sans = Sans({
	subsets: ['latin'],
	variable: '--font-sans'
});
const mono = Mono({
	subsets: ['latin'],
	variable: '--font-mono'
});

export function FontProvider({ children }: React.PropsWithChildren) {
	return <div className={cn('font-sans', sans.variable, mono.variable)}>{children}</div>;
}
