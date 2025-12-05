import Link from 'next/link';

export default function Page() {
	return (
		<main className="flex h-dvh w-full flex-col items-center justify-center">
			<h1 className="text-xl font-medium">
				<Link
					href="https://bernardomrl.dev"
					className="font-bold hover:underline hover:underline-offset-4"
				>
					bernardomrl&apos;s
				</Link>{' '}
				next.js template.
			</h1>
		</main>
	);
}
