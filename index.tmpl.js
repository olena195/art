export default function* ({get_images}) {

  const dirs = new Set(['/']);

  function addDir(filePath) {
    const pathParts = filePath.split('/').filter(p => !!p.trim()).slice(0, -1)
    let prevPath = ''
    for (const pathPart of pathParts) {
      prevPath = `${prevPath}/${pathPart}`
      dirs.add(prevPath)
    }
  }

  for (const image of get_images()) {
    addDir(image);

    const mayBeOptimized = !image.endsWith('.gif')
    const imagickAttr = mayBeOptimized ? 'imagick="avif webp png 600"' : ''


    yield {
      layout: 'withMenu.jsx',
      image,
      url: image + ".html",
      addToMenu: false,
      content: `<img alt="${image}" src="${image}" ${imagickAttr} />`
    }
  }

  for (const dir of dirs) {
    yield {
      layout: 'directory.jsx',
      url: dir.endsWith('/') ? dir : `${dir}/`,
      addToMenu: true,
      content: dir
    }
  }
}
