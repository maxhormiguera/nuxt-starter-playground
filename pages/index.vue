<script setup lang="ts">
import {useSampleStore} from '~/stores/samples';

const buttonSelected = ref(null)

const {posts, getPosts} = useSampleStore()
getPosts()
console.log(':: posts ', posts)
</script>
<template>
  <section class="section">
    <h4>Sourdough Starter</h4>
    <p>We must feed her... </p>
  </section>
  <section class="section">
    <v-row>
      <theme-changer />
    </v-row>
  </section>
  <section class="section just-buttons">
    <v-btn-toggle variant="flat" v-model="buttonSelected" divided class="just-buttons-row">
      <v-btn>Ephraim</v-btn>
      <v-btn>Reverie</v-btn>
      <v-btn>Qua</v-btn>
      <v-btn>Active / Hover</v-btn>
      <v-btn disabled>Disabled</v-btn>
    </v-btn-toggle>
    <v-chip-group>
      <v-chip>Bruhh</v-chip>
      <v-chip>Bro</v-chip>
      <v-chip>Brother</v-chip>
      <v-chip>Brewski</v-chip>
    </v-chip-group>
  </section>
  <v-slide-group show-arrows center-active class="navigation_cards">
    <v-slide-group-item class="__card-wrapper">
      <v-card class="__card">
        <v-card-title>Image Cards</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="image-cards">image cards</v-btn></v-card-actions>
      </v-card>
      <v-card class="__card">
        <v-card-title>Articles</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="articles">articles</v-btn></v-card-actions>
      </v-card>
      <v-card class="__card">
        <v-card-title>Text Editor</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</v-card-text>
        <v-card-actions><v-btn to="text-editor">playground</v-btn></v-card-actions>
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
.navigation_cards
  margin-top 1rem
  border 1px solid var(--theme-text)
  &:deep()
    .v-slide-group__content
      gap 1rem
.just-buttons
  background-color var(--theme-tertiary)
  color var(--theme-primary)
  padding 0.5rem
  .just-buttons-row
    flex-wrap wrap
.__card
  background-color var(--theme-secondary)
  font-family 'PlaywriteCU'
  padding 1rem
  width clamp(16rem, 20%, 32rem)
</style>