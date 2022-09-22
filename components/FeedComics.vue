<script lang="ts" setup>
import {ElCard} from 'element-plus';

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  description?: string
  comics: string[]
  _path: string
}>();

</script>

<template>
  <el-card  class="link-card" :body-style="{ padding: '0px' }">
    <nuxt-link :to="_path">
      <img :src="comics[0]" :alt="description"/>
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


img {
  width: 100%;
  display: block;
}
</style>
