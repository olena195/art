<script setup lang="ts">
definePageMeta({
  layout: 'base'
})

const route = useRoute()
const pathWithoutEndSlash = route.fullPath.endsWith('/') ? route.fullPath.slice(0,-1) : route.fullPath

const {data: taxonomy} = await useAsyncData('taxonomy-'+pathWithoutEndSlash, () => queryContent(pathWithoutEndSlash).where({
  _path: {$eq: pathWithoutEndSlash}
})
  .findOne())

const {data: posts} = await useAsyncData(
  'content-'+pathWithoutEndSlash,
  async () => {

    if (!taxonomy) {
      return []
    }

    return queryContent('/').where({
      taxonomy: {
        $ne: true
      },
      tags: {
        $exists: true,
        $contains: taxonomy.title
      }
    }).find()
  }
)
</script>

<template>
  <pre>taxonomy: {{taxonomy}}</pre>
  <pre>posts: {{posts}}</pre>
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
