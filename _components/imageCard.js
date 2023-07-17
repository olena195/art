import {extname} from "https://deno.land/std/path/mod.ts";


export default function ({src, comp}) {

  const ext = extname(src)

  return comp.card({
    content: `<img src="${src.replace(ext, `-preview${ext}`)}" alt="${src}">`
  })
}
