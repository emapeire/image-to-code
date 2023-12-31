import { Form } from '@/components/Form'

export default function Home() {
	const transformUrlToCode = async (url: string) => {
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (!res.ok || res.body === null) {
			throw new Error('Something went wrong')
		}

		const reader = res.body.getReader()
		const decoder = new TextDecoder('utf-8')

		while (true) {
			const { done, value } = await reader.read()
			const chunk = decoder.decode(value)
			console.log(chunk)
			if (done) break
		}
	}

	return (
		<div className="grid grid-cols-[400px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
				<header className="text-center">
					<h2 className="text-3xl font-semibold">Image 2 code</h2>
					<p className="text-sm opacity-75">Convert image to code</p>
				</header>

				<section className="text-center">Filters...</section>

				<footer className="text-center">
					<p>
						By{' '}
						<a
							href="https://github.com/emapeire"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:underline"
						>
							emapeire
						</a>
					</p>
				</footer>
			</aside>

			<main className="">
				<section className="max-w-2xl mx-auto p-10">
					<Form />
				</section>
			</main>
		</div>
	)
}
