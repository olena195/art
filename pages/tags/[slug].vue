<script setup lang="ts">
definePageMeta({
  layout: 'base'
})

const TAXONOMY_TYPE = 'tags'
const route = useRoute()
const pathWithoutEndSlash = route.fullPath.endsWith('/') ? route.fullPath.slice(0, -1) : route.fullPath

const {data: taxonomy} = await useAsyncData(
  pathWithoutEndSlash,
  () => queryContent(pathWithoutEndSlash).where({
    _path: {$eq: pathWithoutEndSlash}
  })
    .findOne()
)


const {data: posts} = await useAsyncData(
  `content-${TAXONOMY_TYPE}-${taxonomy.value?.title}${pathWithoutEndSlash}`,
  async () => {

    if (!taxonomy.value) {
      return []
    }

    return queryContent('/').where({
      taxonomy: {
        $ne: true
      },
      [TAXONOMY_TYPE]: {
        $exists: true,
        $contains: taxonomy.value.title
      }
    }).find()
  },
  {
    watch: [taxonomy]
  }
)
</script>

<template>
  <h1 class="mb-8 text-6xl font-thin" v-if="taxonomy">Теґ: {{taxonomy.title}}</h1>

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
