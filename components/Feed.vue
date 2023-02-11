<script lang="ts" setup>
import {useTerm} from "~/composables/useTerm";


const route = useRoute();
const config = useAppConfig()

const query = (Array.isArray(route.params?.query) ? route.params.query : [route.params?.query]).filter(q => !!q?.trim());


const isTaxonomy = (s: string | undefined): s is 'fandom' | 'pairing' | 'tags' => typeof s === 'string' && !!config.taxonomies.find(t => s === t.slug)

const {data: posts} = await useAsyncData(`content-${route.fullPath}`, async () => {
  const [type, slug] = query
//
  if (isTaxonomy(type)) {
    const term = await useTerm({type, slug})
    return queryContent().where({
      [type]: {
        $contains: term.title!
      }
    }).find()
  }
  return queryContent(type || '').where({
    taxonomy: {
      $ne: true
    }
  }).find()
})

/**
 * @param id в форматі content:dir:filename
 */
// function getComponentById(id: string) {
//   const [, dir] = id.split(':');
//   switch (dir) {
//     case 'arts' :
//     case 'comics' :
//       return FeedComics;
//     case 'fanfics' :
//       return FeedFanfic;
//     default :
//       return FeedItem;
//   }
// }

</script>

<template>
  <div class="feed-container">
    {{posts}}
<!--    <component v-for="post of posts" :is="getComponentById(post._id)" v-bind="post"/>-->
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
