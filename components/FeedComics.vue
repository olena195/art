<script lang="ts" setup>
import {ElCard} from 'element-plus';
import {computed, useRequestHeaders} from "#imports";

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  comics: string[]
  _path: string
}>();


const optimizedPreview = process.env.NODE_ENV === 'prerenderer'
  ? computed(() => `https://i0.wp.com/kyivska-zefirka.netlify.app${props.comics[0]}?w=320&quality=50`)
  : props.comics[0]

</script>

<template>
  <el-card  class="link-card" :body-style="{ padding: '0px' }">
    <nuxt-link :to="_path">
      <img :src="optimizedPreview" alt=""/>
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
