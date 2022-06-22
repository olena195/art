<script lang="ts" setup>
import { ElButton, ElCard } from 'element-plus';
import TaxonomyList from "~/components/TaxonomyList.vue";

defineProps<{
  fandom?: string[]
  pairing?: string[]
  tag?: string[]
  art: string
}>();
</script>

<template>
  <nuxt-link class="link-card" :to="art" target="_blank">
    <el-card :body-style="{ padding: '0px' }">
      <img
        :src="art"
        class="image"
      />
      <taxonomy-list style="padding: 14px"
                     :fandom="fandom"
                     :pairing="pairing"
                     :tag="tag"
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


.image {
  width: 100%;
  display: block;
}
</style>
