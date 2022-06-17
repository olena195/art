<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'base'
})
</script>

<template>
  <main class="prose">
    <ContentDoc v-slot="{doc}">
      <img :alt="doc.title" :src="doc.art">
    </ContentDoc>
  </main>
</template>
