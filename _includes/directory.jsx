export const layout = 'withMenu.jsx'

function ImageCard({image}) {
    if (!image.data.image) {
        console.log(image.data)
    }
    const mayBeOptimized = !image.data.image.endsWith('.gif')
    const imagickAttr = mayBeOptimized ? 'avif webp png 300 300@2' : ''

    return <a href={image.data.url}>
        <img src={image.data.image} alt={image.slug} imagick={imagickAttr}/>
    </a>
}

export default function ({nav, page}) {
    const children = nav.menu(page.data.url).children?.filter(c => c?.data?.image)

    if (!children?.length) {
        return <p>У цій папці немає картинок</p>
    }

    return <div>
        {
            children.map(c => <ImageCard key={c.slug} image={c}/>)
        }
    </div>
}
