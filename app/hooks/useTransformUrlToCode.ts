import { STEP, type Steps } from '@/app/constants/steps'
import { useState } from 'react'

export function useTransformUrlToCode() {
	const [step, setStep] = useState<Steps>(STEP.INITIAL)

	const transformUrlToCode = async ({ url }: { url: string }) => {
		setStep(STEP.LOADING)
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (!res.ok || res.body === null) {
			setStep(STEP.ERROR)
			throw new Error('Something went wrong')
		}

		setStep(STEP.SUCCESS)

		const reader = res.body.getReader()
		const decoder = new TextDecoder('utf-8')

		while (true) {
			const { done, value } = await reader.read()
			const chunk = decoder.decode(value)
			console.log(chunk)
			if (done) break
		}
	}

	return { transformUrlToCode }
}
