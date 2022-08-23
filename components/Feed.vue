<script lang="ts" setup>
import {FeedArt, FeedComics, FeedFanfic, FeedItem} from "#components";
import {queryContent, useAsyncData, useRoute} from "#imports";


const route = useRoute();

const query = (Array.isArray(route.params?.query) ? route.params.query : [route.params?.query]).filter(q => !!q?.trim());


const {data: posts} = await useAsyncData('a', async () => {
  const postsOrTaxonomy = await queryContent(...query).find()
  if (!postsOrTaxonomy || !postsOrTaxonomy.length) {
    return []
  }

  const isTaxonomy = postsOrTaxonomy[0].taxonomy === true

  if (!isTaxonomy) {
    return postsOrTaxonomy.filter(p => !p.taxonomy)
  }
  console.log(query[0], postsOrTaxonomy[0].title)
  const p2 = await queryContent('/')
    .where({
      'fandom': {
        $contains: postsOrTaxonomy[0].title,
      },
    })
    .find()

  console.log({p2})

  return p2
})

// const componentsForPosts = computed(() => posts.value.map(p => getComponentById(p._id) ))

// let posts;
// if (!postsOrTaxonomy.value.length || !postsOrTaxonomy.value[0].taxonomy) {
//   posts = postsOrTaxonomy;
// } else {
//
//
//   const {data} = await useAsyncData(
//     route.fullPath,
//     () => queryContent('/')
//       .where({
//         [query[0]]: {
//           $contains: postsOrTaxonomy.value[0].title,
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
