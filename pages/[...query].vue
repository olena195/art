<script setup lang="ts">

definePageMeta({
  layout: 'base'
})

const { data } = await useAsyncData('all', () => queryContent().find())</script>

<template>
  <pre>
    ALL in [...query].vue
    {{data || null}}
  </pre>
</template>
