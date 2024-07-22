<script setup lang="ts">

</script>

<template>
  <v-slide-group show-arrows center-active>
    <v-slide-group-item>
      <v-card class="__card">
        <v-card-title>Text Editor</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="playground">playground</v-btn></v-card-actions>
      </v-card>
      <v-card class="__card">
        <v-card-title>Articles</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="playground">playground</v-btn></v-card-actions>
      </v-card>
      <v-card class="__card">
        <v-card-title>Articles</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="playground">playground</v-btn></v-card-actions>
      </v-card>
      <v-card class="__card">
        <v-card-title>Articles</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="playground">playground</v-btn></v-card-actions>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
<router-link to="/playground">Playground</router-link>
</template>

<style scoped lang="stylus">
.__card
  font-family 'PlaywriteCU'
</style>