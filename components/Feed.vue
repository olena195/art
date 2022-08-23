<script lang="ts" setup>
import { FeedArt, FeedComics, FeedFanfic, FeedItem } from "#components";
import { queryContent, useAsyncData, useRoute } from "#imports";


const route = useRoute();

const query = (Array.isArray(route.params?.query) ? route.params.query : [route.params?.query]).filter(q => !!q?.trim());


const {data: postsOrTaxonomy} = await useAsyncData(
  `${route.fullPath}-preflight`,
  () =>
    queryContent(...query)
      .find(),
);

const targetItem = postsOrTaxonomy.value.find(i => i._path === '/' + query.join('/'))

let posts;
if (!postsOrTaxonomy.value.length || !targetItem || !targetItem.taxonomy) {
  posts = postsOrTaxonomy;
} else {

  const {data} = await useAsyncData(
    route.fullPath,
    () => queryContent('/')
      .where({
        [query[0]]: {
          $contains: targetItem.title,
        },
      })
      .find(),
  );

  posts = data;
}



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
