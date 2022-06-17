<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'base'
})
</script>

<template>
  <main class="prose">
    <ContentDoc v-slot="{doc}" >
      <img :src="doc.art" :alt="doc.title">
    </ContentDoc>
  </main>
</template>
