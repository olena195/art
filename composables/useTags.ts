import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

let promise:  Promise<ParsedContent[]> | null = null

export default function useTags() {
  if (promise === null) {
    promise = queryContent('tags').find()
  }

  return promise


}
