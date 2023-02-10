<template>
  <picture>
<!--    <source :srcset="thumbnailSrc">-->
    <img src="https://fakeimg.pl/200x300" :alt="alt || ''" />
  </picture>

</template>

<script setup lang="ts">
import {computed} from "#imports";

const props = defineProps<{
  src: string
  alt?: string
}>()

const thumbnailSrc = computed(() => props.src.replace('/images/', '/thumbnails/'))
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
