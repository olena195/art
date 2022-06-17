<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'base'
})
</script>

<template>
  <main>
    <ContentList path="/fanfics" v-slot="{ list }" tag="ul">
        <li v-for="fanfic in list" :key="fanfic._path">
          <nuxt-link :to="fanfic._path">
            <h2>{{fanfic.title}}</h2>
            <p>{{fanfic.description}}</p>
          </nuxt-link>
        </li>
    </ContentList>
  </main>
</template>
