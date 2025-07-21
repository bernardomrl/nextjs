import Link from 'next/link';

export default function Page() {
	return (
		<main className="flex h-dvh w-full items-center justify-center">
			<h1 className="text-xl font-medium">
				<Link
					href="https://github.com/bernardomrl"
					target="_blank"
					className="font-bold hover:underline hover:underline-offset-4"
				>
					bernardomrl&apos;s
				</Link>{' '}
				next.js boilerplate
			</h1>
		</main>
	);
}
