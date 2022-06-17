<script lang="ts" setup></script>

<template>
  <main>
    <ContentList v-slot="{ list }" path="/arts" tag="ul">
      <li v-for="art in list" :key="art._path">
        <nuxt-link :to="art._path">
          <img :alt="art.title" :src="art.art">
        </nuxt-link>
      </li>
    </ContentList>
  </main>
</template>


<style scoped>

</style>
