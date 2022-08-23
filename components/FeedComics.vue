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


const optimizedPreview = computed(() => {
  const host = process.client ? location.host : useRequestHeaders().host
  const art = props.comics[0]
  const absoluteUrl = art.startsWith('http') ? art : host ? `http${host.startsWith('localhost') ? '' : 's'}://${host}${art}` : art

  try {
    const parsedUrl = new URL(absoluteUrl)

    if (parsedUrl.hostname === 'localhost') {
      return art
    }

    parsedUrl.pathname = parsedUrl.host + parsedUrl.pathname
    parsedUrl.port = ''
    parsedUrl.host = 'i0.wp.com'
    parsedUrl.protocol = 'https:'
    parsedUrl.searchParams.set('w', '320')
    parsedUrl.searchParams.set('quality', '50')

    return parsedUrl.toString()
  } catch (_) {
    console.warn(_)
    return art
  }
})
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
