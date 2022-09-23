<script lang="ts" setup>
import {ElCard} from 'element-plus';
import {computed} from "#imports";

const props = defineProps<{
  fandom?: string[]
  pairing?: string[]
  tags?: string[]
  description?: string
  pictures: string | string[]
  _path: string
}>();

const preview = computed(() => Array.isArray(props.pictures) ? props.pictures[0] : props.pictures)

</script>

<template>
  <el-card  class="link-card" :body-style="{ padding: '0px' }">
    <nuxt-link :to="_path">
      <ImageThumbnail :src="preview" :alt="description"/>
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
