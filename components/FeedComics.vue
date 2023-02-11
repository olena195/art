<script lang="ts" setup>

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  description?: string
  pictures: string | string[]
  _path: string
}>();

const preview = computed(() => Array.isArray(props.pictures) ? props.pictures[0] : props.pictures)

</script>

<template>
<div class="bg-light-50">
  <nuxt-link :to="_path">
    <img :src="preview" class="object-cover" :alt="description || ''">
  </nuxt-link>
  <TaxonomyList class="p-3" :fandom="fandom"
                 :pairing="pairing"
                 :tags="tags"
  />
</div>
</template>


<style scoped>



img {
  width: 100%;
  display: block;
  aspect-ratio: 2280/3460;
}
</style>
