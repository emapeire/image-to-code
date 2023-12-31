'use client'

import { Form } from '@/components/Form'
import { useTransformToCode } from '@/app/hooks/useTransformToCode'
import { STEP } from './constants/steps'
import { Spinner } from '@/components/Spinner'
import styles from './page.module.css'
import { DragAndDrop } from '@/components/DragAndDrop'

export default function Home() {
	const { transformUrlToCode, transformImageToCode, step, result } = useTransformToCode()

	return (
		<div className="grid grid-cols-[260px_1fr]">
			<aside className={`${styles.aside} flex flex-col justify-between min-h-screen p-4`}>
				<header className="text-center">
					<h2 className="text-3xl font-semibold">Image 2 code</h2>
					<p className="text-sm opacity-75">Convert image to code</p>
				</header>

				<footer className="text-center">
					<p className="border rounded-md bg-gray-900 py-2 mx-2">
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

			<main className={`${styles.main} bg-gray-900`}>
				<section className="max-w-5xl w-full mx-auto p-10">
					{step === STEP.LOADING && <Spinner />}

					{step === STEP.INITIAL && (
						<div className="flex flex-col gap-12">
							<DragAndDrop transformImageToCode={transformImageToCode} />
							<Form transformUrlToCode={transformUrlToCode} />
						</div>
					)}

					{step === STEP.RESULT && (
						<div className="rounded-md flex flex-col gap-4">
							<iframe srcDoc={result} className="w-full h-full rounded-md border-4 border-gray-700 aspect-video" />
							<pre className={`${styles.pre} mt-10 overflow-x-auto`}>
								<code>{result}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}
