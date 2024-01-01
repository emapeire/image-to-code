'use client'

import { STEP, type Steps } from '@/app/constants/steps'
import { streamReader } from '@/lib/streamReader'
import { useState } from 'react'

export function useTransformUrlToCode() {
	const [result, setResult] = useState('')
	const [step, setStep] = useState<Steps>(STEP.INITIAL)

	const transformUrlToCode = async (url: string) => {
		setStep(STEP.LOADING)
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		if (!res.ok || res.body == null) {
			setStep(STEP.ERROR)
			throw new Error('Something went wrong')
		}

		setStep(STEP.RESULT)

		for await (const chunk of streamReader(res)) {
			setResult((prev) => prev + chunk)
		}
	}

	return { transformUrlToCode, step, result }
}
