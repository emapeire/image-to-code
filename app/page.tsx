'use client'

import { Form } from '@/components/Form'
import { useTransformUrlToCode } from '@/app/hooks/useTransformUrlToCode'
import { STEP } from './constants/steps'
import { Spinner } from '@/components/Spinner'
import styles from './page.module.css'

export default function Home() {
	const { transformUrlToCode, step, result } = useTransformUrlToCode()

	return (
		<div className="grid grid-cols-[260px_1fr]">
			<aside className={`${styles.aside} flex flex-col justify-between min-h-screen p-4 bg-gray-900`}>
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

			<main className={styles.main}>
				<section className="max-w-5xl w-full mx-auto p-10">
					{step === STEP.LOADING && <Spinner />}

					{step === STEP.INITIAL && <Form transformUrlToCode={transformUrlToCode} />}

					{step === STEP.RESULT && (
						<div className="rounded flex flex-col gap-4">
							<iframe srcDoc={result} className="w-full h-full rounded border-4 border-gray-700 aspect-video" />
							<pre className="mt-10">
								<code>{result}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}
