<template>
  <section>
    <h4>Sourdough Starter</h4>
    <p>We must feed her... </p>
  </section>
<!--  <v-img :src="imageSrc('stars.jpg')"></v-img>-->
  <v-expansion-panels v-model="openPanel" class="accordion">
    <v-expansion-panel value="0" class="__panel">
      <v-expansion-panel-title class="__title">
        <h4>Dynamic images</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>
          <v-col>
            <v-card class="image-card">
              <template v-slot:title>
                <p>stars</p>
              </template>
              <template v-slot:item>
                <v-img :src="imageSrc('stars.jpg')" height="400"></v-img>
              </template>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="image-card">
              <template v-slot:title>
                <p>ascending and descending</p>
              </template>
              <template v-slot:item>
                <v-img :src="imageSrc('ascending and descending.jpg')" height="400"/>
              </template>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="image-card">
              <template v-slot:title>
                <p>nothing</p>
              </template>
              <template v-slot:item>
                <v-img :src="imageSrc('does not exist.jpg')" height="400">
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="image" height="400" />
                  </template>
                </v-img>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>




</template>
<script setup>
  import {imageSrc} from '~/utils/index.ts'

  const openPanel = [0]
</script>
<style lang="stylus">
.accordion
  .__title
    background-color var(--theme)
    color var(--accent)
.image-card
  padding 1rem
  border-radius $border-radius-lg
  text-align center
</style>