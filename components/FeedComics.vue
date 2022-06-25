<script lang="ts" setup>
import { ElCard } from 'element-plus';

defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  comics: string[]
  _path: string
}>();
</script>

<template>
  <nuxt-link class="link-card" :to="_path">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="comics[0]" alt=""/>

      <taxonomy-list style="padding: 14px"
                     :fandom="fandom"
                     :pairing="pairing"
                     :tags="tags"
      />
    </el-card>
  </nuxt-link>
</template>


<style scoped>
.link-card {
  text-decoration: inherit;
  color: inherit;
  max-width: 20rem;
  width: 100%;
  display: block;
}


img {
  width: 100%;
  display: block;
}
</style>
