import {queryContent} from "#imports";
import {ParsedContent} from "@nuxt/content/dist/runtime/types";

const _cache = new Map<string, ParsedContent>()

export async function useTerm({type, slug}: { type: string, slug: string }) {
  const _path = `/${type}/${slug}`

  if (_cache.has(_path)) {
    return _cache.get(_path)!
  }

  const term = await queryContent(_path)
    .findOne()

  _cache.set(_path, term)

  return term
}
