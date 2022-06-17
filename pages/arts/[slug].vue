<template>
  <main class="prose">
    <ContentDoc v-slot="{doc}">
      <img :alt="doc.title" :src="doc.art">
    </ContentDoc>
  </main>
</template>
