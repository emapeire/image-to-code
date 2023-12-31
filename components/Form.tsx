'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function Form() {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(event) => {
				event.preventDefault()
				const form = event.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement
				console.log(url.value)
			}}
		>
			<Label htmlFor="url">Put your image url here</Label>
			<Input name="url" id="url" type="url" placeholder="https://example.com/image.png" />
			<Button>Convert image to code</Button>
		</form>
	)
}
