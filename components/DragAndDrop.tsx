'use client'

import { Dropzone, ExtFile } from '@files-ui/react'

export function DragAndDrop({ transformImageToCode }: { transformImageToCode: (file: File) => Promise<void> }) {
	const updateFiles = (files: ExtFile[]) => {
		console.log(files)
	}

	return (
		<Dropzone
			header={false}
			footer={false}
			maxFiles={1}
			label="Drop your image here"
			accept="image/*"
			onChange={updateFiles}
		/>
	)
}
