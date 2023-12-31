export const STEP = {
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
} as const

export type Steps = (typeof STEP)[keyof typeof STEP]
