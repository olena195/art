<script lang="ts" setup>
import {ElCard} from 'element-plus';
import TaxonomyList from "~/components/TaxonomyList.vue";
import {computed, useRequestHeaders} from "#imports";

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  art: string
}>();

</script>

<template>
  <el-card class="link-card"  :body-style="{ padding: '0px' }">
    <nuxt-link :to="art" target="_blank">
      <ImageThumbnail :src="art" class="image"/>
    </nuxt-link>
    <taxonomy-list style="padding: 14px"
                   :fandom="fandom"
                   :pairing="pairing"
                   :tags="tags"
    />
  </el-card>
</template>


<style scoped>
.link-card {
  text-decoration: inherit;
  color: inherit;
  max-width: 16rem;
  width: 100%;
  display: block;
  height: min-content;
}


.image {
  width: 100%;
  display: block;
}
</style>
