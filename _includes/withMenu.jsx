export const layout = 'base.tmpl.js'


export default function ({children, nav, comp, page, get_raw_content_url}) {
  return <div className={'main-layout-container'}>
    <nav className={'main-nav'}>
      <comp.Menu items={nav.menu().children} breadcrumb={nav.breadcrumb(page.data.url)}/>
    </nav>
    <main>{children}</main>
  </div>
}


