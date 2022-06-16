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

<script>
export default {
  name: 'index.vue',
};
</script>

<style scoped>

</style>
