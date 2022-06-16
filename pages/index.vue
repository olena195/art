<script setup lang="ts">
</script>

<template>
  <main>
    <ul>
      <ContentNavigation v-slot="{ navigation }">
        <li v-for="nav of navigation">
          <nuxt-link :to="nav._path">{{ nav.title }}</nuxt-link>
          <ol v-if="nav.children.length">
            <li v-for="child of nav.children">
              <nuxt-link :to="child._path">{{ child.title }}</nuxt-link>
            </li>
          </ol>
        </li>
      </ContentNavigation>
    </ul>
  </main>
</template>
