<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'base'
})
</script>
<template>
  <main>
    <ContentList path="/arts" v-slot="{ list }" tag="ul">
      <li v-for="art in list" :key="art._path">
        <nuxt-link :to="art._path">
          <img :src="art.art" :alt="art.title">
        </nuxt-link>
      </li>
    </ContentList>
  </main>
</template>


<style scoped>

</style>
