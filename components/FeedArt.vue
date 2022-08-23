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

const optimizedPreview = computed(() => {
  const host = process.client ? location.host : useRequestHeaders().host
  const absoluteUrl = props.art.startsWith('http') ? props.art : host ? `http${host.startsWith('localhost') ? '' : 's'}://${host}${props.art}` : props.art

  try {
    const parsedUrl = new URL(absoluteUrl)

    if (parsedUrl.hostname === 'localhost') {
      return props.art
    }

    parsedUrl.pathname = parsedUrl.host+parsedUrl.pathname
    parsedUrl.port = ''
    parsedUrl.host = 'i0.wp.com'
    parsedUrl.protocol = 'https:'
    parsedUrl.searchParams.set('w', '320')
    parsedUrl.searchParams.set('quality','50')

    return parsedUrl.toString()
  } catch (_) {
    console.warn(_)
    return props.art
  }
})

</script>

<template>
  <nuxt-link class="link-card" :to="art" target="_blank">
    <el-card :body-style="{ padding: '0px' }">
      <img
        :src="optimizedPreview"
        class="image"
      />
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
  max-width: 16rem;
  width: 100%;
  display: block;
}


.image {
  width: 100%;
  display: block;
}
</style>
