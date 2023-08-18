export const layout = 'base.tmpl.js'

/**
 * @typedef {{slug: string, data?: {url: string, addToMenu?: boolean}, parent?:MenuItem, children?: MenuItem[]}} MenuItem
 */

/**
 *
 * @param {MenuItem} item
 */
function MenuItem({item}) {
    const url = item?.data?.url || (item?.parent?.data?.url ? item?.parent?.data?.url + item.slug : undefined)
    return item?.data?.addToMenu
        ? <li>
            {url ? (<a href={url}>{item.slug}</a>) : <span>{item.slug}</span>}
            <Menu items={item.children}/>
        </li>
        : ''

}


/**
 * @param {MenuItem[] | null | undefined} items
 */
function Menu({items}) {
    return (Array.isArray(items) && items.length > 0)
        ? <ul>
            {items.map(item => <MenuItem key={item.slug} item={item}/>)}
        </ul>
        : ''
}

export default function ({children, nav}) {
    return <div>
        <nav>
            <Menu items={nav.menu().children}/>
        </nav>
        <div>{children}</div>
    </div>
}
