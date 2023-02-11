<script setup lang="ts">

definePageMeta({
  layout: 'base',
  title: 'Всі комікси'
})

const {data: posts} = await useAsyncData(
  'comics',
  () => queryContent('/comics')
    .sort({date: -1, $numeric: true})
    .find()
)
</script>

<template>
  <h1 class="mb-8 text-6xl font-thin">Всі комікси</h1>
  <div class="feed-container" role="feed" v-if="posts && posts.length">
    <FeedComics v-for="post of posts" :key="post._path" v-bind="post"/>
  </div>
</template>

<style scoped>
.feed-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
