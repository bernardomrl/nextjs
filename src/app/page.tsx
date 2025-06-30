import Link from 'next/link';

export const metadata = {
	title: 'Home'
};

export default function Page() {
	return (
		<main className="flex h-dvh w-full flex-col items-center justify-center">
			<h1 className="font-sans text-3xl">Next.js Boilerplate</h1>
			<Link
				href="https://github.com/bernardomrl/nextjs"
				target="_blank"
				className="underline"
			>
				Github
			</Link>
		</main>
	);
}
