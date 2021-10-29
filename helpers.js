import { readFile } from 'fs/promises';

export const readJSON = async (path) => {
    return JSON.parse(
        await readFile (
            new URL(path, import.meta.url)
        )
    )
}