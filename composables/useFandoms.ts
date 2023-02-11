import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

let promise:  Promise<ParsedContent[]> | null = null

export default function useFandoms() {
  if (promise === null) {
    promise = queryContent('fandom').find()
  }

  return promise


}
