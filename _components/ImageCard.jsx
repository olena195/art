/**
 *
 * @param {string} src
 * @param {string} href
 * @param {string | number} size
 */
export default function ImageCard({src, href, size}) {

  const mayBeOptimized = !src.endsWith('.gif')
  const imagickAttr = mayBeOptimized ? `avif webp png ${size} ${size}@2` : ''

  return <a href={href} title={'Натисни, щоб відкрити оригінал в повному розмірі'}>
    <img src={src} alt={src} imagick={imagickAttr}/>
  </a>
}
