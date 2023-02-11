<script setup lang="ts">

definePageMeta({
  layout: 'base'
})

const route = useRoute()
const pathWithoutEndSlash = route.fullPath.endsWith('/') ? route.fullPath.slice(0,-1) : route.fullPath

const {data: posts} = await useAsyncData(
  pathWithoutEndSlash,
  async () => {
    const tax = await queryContent(pathWithoutEndSlash).where({
      _path: pathWithoutEndSlash
    })
      .findOne()

    if (!tax) {
      return []
    }

    return queryContent('/').where({
      tags: {
        $contains: tax.title
      }
    }).find()
  }
)
</script>

<template>
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
