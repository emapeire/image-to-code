export const STEP = {
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	PREVIEW: 'PREVIEW',
	RESULT: 'RESULT',
	ERROR: 'ERROR',
} as const

export type Steps = (typeof STEP)[keyof typeof STEP]
