
/**
 * @typedef {{slug: string, data?: {url: string, addToMenu?: boolean}, parent?:MenuItem, children?: MenuItem[]}} MenuItem
 */

/**
 *
 * @param {MenuItem} item
 * @param {string} currentUrl
 */
function MenuItem({item, breadcrumb}) {
  const url = item.data.url
  const rel = breadcrumb.at(-1).data.url === url ? 'current' : breadcrumb.at(-2)?.data.url === url ? 'parent' : ''

  return item?.data?.addToMenu
    ? <li>
      {url ? (<a rel={rel} href={url}>{item.slug}</a>) : <span>{item.slug}</span>}
      <Menu items={item.children} breadcrumb={breadcrumb}/>
    </li>
    : ''

}


/**
 * @param {MenuItem[] | null | undefined} items
 * @param {string} currentUrl
 */
export default function Menu({breadcrumb, items}) {
  return (Array.isArray(items) && items.length > 0)
    ? <ul>
      {items.map(item => <MenuItem key={item.slug} item={item} breadcrumb={breadcrumb}/>)}
    </ul>
    : ''
}
