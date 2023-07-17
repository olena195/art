import * as path from "https://deno.land/std/path/mod.ts";

const ROOT = path.resolve('./img')

/**
 *
 * @param {string} fileOrDirPath
 */
function normalizeEntryPath(fileOrDirPath) {
  if (fileOrDirPath === ROOT) {
    return '/'
  }
  const url = fileOrDirPath.replace(ROOT, '').replaceAll('\\', '/')
  return url.endsWith('/') ? url : `${url}/`
}

/**
 *
 * @param {string} dirPath
 * @returns {any}
 */
async function* getDirEntry(dirPath) {
  const childPages = []
  for await (const dirEntry of Deno.readDir(dirPath)) {

    if (dirEntry.name.startsWith('.') || dirEntry.name.startsWith('_')) {
      continue
    }

    const childPath = path.resolve(dirPath, dirEntry.name)

    if (dirEntry.isDirectory) {
      yield * getDirEntry(childPath)
      childPages.push({
        url: normalizeEntryPath(childPath),
        content: dirPath,
        isDirectory: true,
        name: dirEntry.name,

        layout: 'dir.tmpl.js'
      })
    } else {
      const childEntry = {
        url: normalizeEntryPath(childPath),
        content: childPath,
        isDirectory: false
      }

      childPages.push(childEntry)

      yield childEntry
    }
  }

  yield {
    url: normalizeEntryPath(dirPath),
    childPages,
    content: dirPath,
    isDirectory: true,
    name: path.basename(dirPath),

    layout: 'dir.tmpl.js'
  }
}

/**
 *
 * @param {string} filePath
 */
function getFileEntry(filePath) {

}


export default async function* () {

  yield* await getDirEntry(ROOT)


  // yield {
  //   url: "/page-1/",
  //   content: "This is the first page",
  // };
  // yield {
  //   url: "/page-2/",
  //   content: "This is the second page",
  // };
  // yield {
  //   url: "/page-3/",
  //   content: "This is the third page",
  // };
}
