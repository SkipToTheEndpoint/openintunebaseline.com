import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(scriptDir, '..')
const distDir = path.resolve(rootDir, 'dist')
const serverDir = path.resolve(rootDir, 'dist-server')

const htmlTemplate = await readFile(path.resolve(distDir, 'index.html'), 'utf8')
const serverBundleFiles = await readdir(serverDir)
const serverEntryFile = serverBundleFiles.find((file) => file.endsWith('.js'))

if (!serverEntryFile) {
  throw new Error('Unable to locate the SSR server bundle in dist-server.')
}

const serverEntryUrl = pathToFileURL(path.resolve(serverDir, serverEntryFile)).href
const { render } = await import(serverEntryUrl)
const appHtml = render()

const prerenderedHtml = htmlTemplate.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
)

await writeFile(path.resolve(distDir, 'index.html'), prerenderedHtml)
await rm(serverDir, { recursive: true, force: true })
