<script setup lang="ts">
const openPanel = ref(0)

</script>

<template>
  <section class="section">
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
                  <v-img :src="imageSrc('stars.jpg')" height="400" cover></v-img>
                </template>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="image-card">
                <template v-slot:title>
                  <p>ascending and descending</p>
                </template>
                <template v-slot:item>
                  <v-img :src="imageSrc('ascending and descending.jpg')" height="400" cover/>
                </template>
              </v-card>
            </v-col>
            <v-col>
              <v-card class="image-card">
                <template v-slot:title>
                  <p>nothing</p>
                </template>
                <template v-slot:item>
                  <v-img :src="imageSrc('does not exist.jpg')" height="400" cover>
                    <template v-slot:placeholder>
                      <v-skeleton-loader type="image" height="100%" cover/>
                    </template>
                  </v-img>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel value="1" class="__panel">
        <v-expansion-panel-title class="__title">
          <h4>Something else...</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Literally anything...
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<style scoped lang="stylus">
.accordion
  .__title
    background-color var(--theme-secondary)
    color inherit
.image-card
  padding 1rem
  border-radius $border-radius-lg
  text-align center
</style>