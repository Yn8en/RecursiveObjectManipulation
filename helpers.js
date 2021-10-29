// working fine in backend, but browser throws error:
// Uncaught TypeError: Error resolving module specifier “fs/promises”.
import { readFile } from 'fs/promises';
import { readFileSync } from 'fs';

export const readJSON = async (path) => {
    return JSON.parse(
        await readFile (
            new URL(path, import.meta.url)
        )
    )
}

export const readJSONsync = (path) => {
    return JSON.parse(readFileSync(path));
}