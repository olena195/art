export const layout = 'base.tmpl.js'

/**
 * @typedef {Object} DirEntry
 * @property {string} url
 * @property {boolean} isDirectory
 * @property {DirEntry[] | undefined} childPages
 */

/**
 *
 * @param {string} content
 * @param url
 * @param {DirEntry[]} childPages
 * @param comp
 * @returns {string}
 */

export default function ({url, childPages, comp }) {

  const subDirs = childPages
    .filter(e => e.isDirectory)
    .map(e => `<a href="${e.url}">${e.name}</a>`)

  const cards = childPages
    .filter(e => !e.isDirectory)
    .map(entry => {
    return comp.imageCard({
      src: `/img${entry.url.replace(/\/$/, '')}`
    })
  })
  return subDirs.join('') + cards.join('')
}
