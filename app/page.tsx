export default function Home() {
	return (
		<div className="grid grid-cols-[400px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
				<header>
					<h2 className="text-3xl font-semibold">Image to code</h2>
					<p className="text-sm opacity-75">Convert image to code</p>
				</header>

				<section>Filters...</section>

				<footer>
					<p>
						By{' '}
						<a href="https://github.com/emapeire" target="_blank" rel="noopener noreferrer">
							emapeire
						</a>
					</p>
				</footer>
			</aside>
			<main className="bg-gray-500">Main section...</main>
		</div>
	)
}
