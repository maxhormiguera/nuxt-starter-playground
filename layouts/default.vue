
<template>
  <main>
    <page-header class="header" />
    <div class="wrapper content">
      <div class="container">
        <slot />
      </div>
    </div>
    <page-footer class="footer" />
  </main>
</template>

<style scoped lang="stylus">
main
  display grid
  grid-template-columns 1fr minmax(10rem, 15%)
  grid-template-rows $header-height auto $footer-height
  grid-template-areas 'header header' 'body body' 'footer footer'
  .container
    column-count 2
  .content
    grid-area body
  .header
    grid-area header
  .footer
    grid-area footer
</style>
<script setup lang="ts">
import PageHeader from '~/components/page-header.vue';
</script>