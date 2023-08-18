export default function* ({ get_images }) {

  const dirs = new Set();

  for (const image of get_images()) {
    const mayBeOptimized = !image.endsWith('.gif')
    const imagickAttr = mayBeOptimized ? 'imagick="avif webp png 600"' : ''

    dirs.add(image.split('/').slice(0, -1).join('/'))

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
      url: dir + '/index.html',
      addToMenu: true,
      content: dir
    }
  }
}
