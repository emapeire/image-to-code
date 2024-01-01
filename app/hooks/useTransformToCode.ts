'use client'

import { STEP, type Steps } from '@/app/constants/steps'
import { streamReader } from '@/lib/streamReader'
import { toBase64 } from '@/lib/toBase64'
import { useState } from 'react'

export function useTransformToCode() {
	const [result, setResult] = useState('')
	const [step, setStep] = useState<Steps>(STEP.INITIAL)

	const transformToCode = async (body: string) => {
		setStep(STEP.LOADING)
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body,
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

	const transformUrlToCode = async (url: string) => {
		await transformToCode(JSON.stringify({ url }))
	}

	const transformImageToCode = async (file: File) => {
		const img = await toBase64(file)
		await transformToCode(JSON.stringify({ img }))
	}

	return { transformUrlToCode, transformImageToCode, step, result }
}
