<script lang="ts" setup>

definePageMeta({
  layout: 'base',

})

const route = useRoute()
const pathWithoutEndSlash = route.fullPath.endsWith('/') ? route.fullPath.slice(0,-1) : route.fullPath

const {data: content} = await useAsyncData(pathWithoutEndSlash, () => queryContent(route.path).where({_path: pathWithoutEndSlash}).findOne());
const pictures = computed(() => content.value ? Array.isArray(content.value.pictures) ? content.value.pictures : [content.value.pictures] : [])
</script>

<template>
  <main v-if="content">
    <div class="card-header">
      <h1 class="p-3 mb-4 text-2xl  " v-if="content.description">{{ content.description }}</h1>
      <TaxonomyList class="p-2" v-bind="content"/>
    </div>

    <a title="Відкрити в повному розмірі" target="_blank" v-for="pic of pictures" :key="pic"
       :href="'https://github.com/olena195/blog_kyivska_zefirka/raw/main/public'+pic">
      <img :src="pic"/>
    </a>
  </main>
</template>

<style scoped>
main {
  background: white;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin: 0;
  font-weight: lighter;
}


img {
  width: 100%;
  display: block;
}
</style>
