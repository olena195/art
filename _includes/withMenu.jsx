export const layout = 'base.tmpl.js'


export default function ({children, nav, comp, page}) {
  return <div className={'main-layout-container'}>
    <nav id={'menu'} className={'main-nav'}>
      <comp.Menu items={nav.menu().children} breadcrumb={nav.breadcrumb(page.data.url)}/>
      <a className={'bottom-menu-toggle'} href="javascript:history.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10l-7.071 7.071l1.414 1.414L10 11.414l7.071 7.071l1.414-1.414L11.414 10l7.071-7.071l-1.414-1.414L10 8.586z"/></svg>
      </a>
    </nav>
    <a className={'bottom-menu-toggle'} href={'#menu'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </a>
    <main>{children}</main>
  </div>
}


