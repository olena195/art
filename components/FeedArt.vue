<script lang="ts" setup>
import {ElCard} from 'element-plus';
import TaxonomyList from "~/components/TaxonomyList.vue";

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  art: string
}>();


const optimizedPreview = process.env.NODE_ENV === 'prerender'
  ? `https://i0.wp.com/kyivska-zefirka.netlify.app${props.art}?w=320&quality=50`
  : props.art

</script>

<template>
  <el-card class="link-card"  :body-style="{ padding: '0px' }">
    <nuxt-link :to="art" target="_blank">
      <img
        :src="optimizedPreview"
        class="image"
      />
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
