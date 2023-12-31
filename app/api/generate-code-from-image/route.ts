import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { USER_PROMPT, SYSTEM_PROMPT } from '@/app/constants/prompts'

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Response) {
	const { url } = await req.json()
	const response = await openai.chat.completions.create({
		model: 'gpt-4-vision-preview',
		messages: [
			{
				role: 'system',
				content: SYSTEM_PROMPT,
			},
			{
				role: 'user',
				content: [
					{ type: 'text', text: USER_PROMPT },
					{
						type: 'image_url',
						image_url: {
							url: url,
						},
					},
				],
			},
		],
	})
	console.log(response.choices[0])
	return new StreamingTextResponse(stream)
}