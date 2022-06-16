<script setup lang="ts">
import {ElButton} from "element-plus";
</script>

<template>
  <main>
    <ElButton>
      Кнопка
    </ElButton>
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
