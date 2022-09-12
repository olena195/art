<script lang="ts" setup>
import {FeedArt, FeedComics, FeedFanfic, FeedItem} from "#components";
import {queryContent, useAsyncData, useRoute} from "#imports";
import {useTerm} from "~/composables/useTerm";
import {callWithNuxt} from "#app";


const route = useRoute();
const nuxtApp = useNuxtApp();

const query = (Array.isArray(route.params?.query) ? route.params.query : [route.params?.query]).filter(q => !!q?.trim());

const isTaxonomy = (s: string | undefined): s is 'fandom' | 'pairing' | 'tags' => typeof s === 'string' && ['fandom', 'pairing', 'tags'].includes(s)

const {data: posts} = await useAsyncData(`content-${route.fullPath}`, async () => {
  const [type, slug] = query

  if (isTaxonomy(type)) {
    const term = await useTerm({type, slug})
    /**
     * WORKAROUND
     * @see https://github.com/nuxt/content/issues/1510#issuecomment-1243620985
     */
    return callWithNuxt(nuxtApp, () => queryContent().where({
      [type]: {
        $contains: term.title!
      }
    }).find())
  }

  return queryContent(type || '').where({
    taxonomy: {
      $ne: true
    }
  }).find()
})

//
// const {data: postsOrTaxonomy} = await useAsyncData(
//   `${route.fullPath}-preflight`,
//   () =>
//     queryContent(...query)
//       .find(),
// );
//
// const targetItem = postsOrTaxonomy.value.find(i => i._path === '/' + query.join('/'))
//
// let posts;
// if (!postsOrTaxonomy.value.length || !targetItem || !targetItem.taxonomy) {
//   posts = postsOrTaxonomy;
// } else {
//
//   const {data} = await useAsyncData(
//     route.fullPath,
//     () => queryContent('/')
//       .where({
//         [query[0]]: {
//           $contains: targetItem.title,
//         },
//       })
//       .find(),
//   );
//
//   posts = data;
// }


/**
 * @param id в форматі content:dir:filename
 */
function getComponentById(id: string) {
  const [, dir] = id.split(':');
  switch (dir) {
    case 'arts' :
      return FeedArt;
    case 'comics' :
      return FeedComics;
    case 'fanfics' :
      return FeedFanfic;
    default :
      return FeedItem;
  }
}

</script>

<template>
  <div class="feed-container">
    <component v-for="post of posts" :is="getComponentById(post._id)" v-bind="post"/>
  </div>
</template>

<style scoped>
.feed-container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
