export const title = 'Київська Зефірка'

export default function* ({get_images, get_raw_content_url, comp}) {

  const dirs = new Set(['/']);

  /**
   *
   * @type {Map<string, string[]>}
   */
  const pathToImagesMap = new Map();

  /**
   * @param {string} imagePath
   */
  function addImageToDir(imagePath) {
    const dirPathParts = imagePath.split('/').slice(0, -1)

    const fullPathTree = dirPathParts.map((p, i) => dirPathParts.slice(0, i+1).join('/'))

    for (const p of fullPathTree) {
      if (!pathToImagesMap.has(p)) {
        pathToImagesMap.set(p,[])
      }
    }

    const dirPath = dirPathParts.join('/')
    pathToImagesMap.set(dirPath, [...pathToImagesMap.get(dirPath), imagePath])
  }

  get_images().forEach(addImageToDir)

  for (const [dir, images] of pathToImagesMap) {
    let resolvedUrl = `${dir.startsWith('/') ? '' : '/'}${dir}${dir.endsWith('/') ? '' : '/'}`

    const content = images.length
      ? images.map(image => (<comp.ImageCard key={image} src={image} href={get_raw_content_url(image)} size={300} />))
      : <p className={'empty-dir-message'}>В цій теці немає зображень</p>

    yield {
      title: resolvedUrl === '/' ? title : `${resolvedUrl} — ${title}`,
      layout: 'withMenu.jsx',
      url: resolvedUrl,
      addToMenu: true,
      content,
    }
  }
}
