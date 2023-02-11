import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

let promise:  Promise<ParsedContent[]> | null = null

export default function usePairing() {
  if (promise === null) {
    promise = queryContent('pairing').find()
  }

  return promise


}
