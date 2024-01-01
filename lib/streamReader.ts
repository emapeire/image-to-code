export async function* streamReader(res: Response) {
	const reader = res.body?.getReader()
	const decoder = new TextDecoder('utf-8')

	if (reader == null) return

	while (true) {
		const { done, value } = await reader.read()
		const chunk = decoder.decode(value)
		yield chunk
		if (done) break
	}
}
