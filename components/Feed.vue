<script lang="ts" setup>
import { FeedArt, FeedItem, FeedComics, FeedFanfic } from "#components";
import { computed, queryContent, useAsyncData, useRoute } from "#imports";


const route = useRoute();

const type = computed(() => {
  return typeof route.name === 'string' && [
    'arts',
    'comics',
    'fanfics',
  ].includes(route.name)
    ? route.name
    : '/';
});

const {data: content} = await useAsyncData(type.value, () => queryContent(type.value).find());



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
