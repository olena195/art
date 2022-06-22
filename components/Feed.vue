<script lang="ts" setup>
import { FeedArt, FeedComics, FeedFanfic, FeedItem } from "#components";
import { computed, queryContent, useAsyncData, useRoute } from "#imports";


const route = useRoute();

const path = computed(() => {
  if (Array.isArray(route.params?.query) && ['tags', 'pairing', 'fandom'].includes(route.params?.query[0])) {
    return '/'
  } else {
    return route.path;
  }
});

const where = computed(() => {
  if (!Array.isArray(route.params?.query) || !['tags', 'pairing', 'fandom'].includes(route.params?.query[0]) || !route.params?.query[1]) {
    return {}
  }

  return {
    [route.params?.query[0]]: {
      $contains: route.params?.query[1]
    }
  }
})


const {data: content} = await useAsyncData(
  route.fullPath,
  () =>
    queryContent(path.value)
      .where({
        ...where.value,
        taxonomy: {$ne: true},
      })
      .find(),
);



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
    <component v-for="post of content" :is="getComponentById(post._id)" v-bind="post"/>
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
