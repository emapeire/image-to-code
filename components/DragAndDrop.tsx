'use client'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export function DragAndDrop() {
	const updateFiles = (files: ExtFile[]) => {
		console.log(files)
	}

	return <Dropzone onChange={updateFiles} />
}
