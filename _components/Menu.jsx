
/**
 * @typedef {{slug: string, data?: {url: string, addToMenu?: boolean}, parent?:MenuItem, children?: MenuItem[]}} MenuItem
 */

/**
 * @param {MenuItem} item
 * @param breadcrumb
 */
function MenuItem({item, breadcrumb}) {
  const url = item.data.url
  const rel = breadcrumb.at(-1).data.url === url ? 'current' : breadcrumb.at(-2)?.data?.url === url ? 'parent' : ''

  return <li>
      {url ? (<a rel={rel} href={url}>{item.slug}</a>) : <span>{item.slug}</span>}
      <Menu items={item.children} breadcrumb={breadcrumb}/>
    </li>

}


/**
 *
 * @param breadcrumb
 * @param {MenuItem[]} items
 */
export default function Menu({breadcrumb, items}) {
  const itemsToShow = (items || []).filter(item => item?.data?.addToMenu)
  return (itemsToShow.length)
    ? <ul>
      {itemsToShow.map(item => <MenuItem key={item.slug} item={item} breadcrumb={breadcrumb}/>)}
    </ul>
    : ''
}
