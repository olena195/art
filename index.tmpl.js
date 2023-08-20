export const title = 'Київська Зефірка'

export default function* ({get_images, get_raw_content_url}) {

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
      title: `${image} — ${title}`,
      layout: 'withMenu.jsx',
      image,
      url: image + ".html",
      addToMenu: false,
      content: `<a href="${get_raw_content_url(image)}" title="Натисни, щоб відкрити в повному розмірі"><img alt="${image}" src="${image}" ${imagickAttr} /></a>`
    }
  }

  for (const dir of dirs) {
    yield {
      title: dir === '/' ? title : `${dir} — ${title}`,
      layout: 'directory.jsx',
      url: dir.endsWith('/') ? dir : `${dir}/`,
      addToMenu: true,
    }
  }
}
