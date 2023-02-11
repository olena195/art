<script setup lang="ts">

definePageMeta({
  layout: 'base'
})

const route = useRoute()

const {data: posts} = await useAsyncData(
  route.fullPath,
  async () => {
    const tax = await queryContent(route.fullPath).where({
      _path: route.fullPath
    })
      .findOne()

    if (!tax) {
      return []
    }

    return queryContent('/').where({
      pairing: {
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
