<template>
  <section class="section">
    <h4>Sourdough Starter</h4>
    <p>We must feed her... </p>
  </section>
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
  <section class="section">
    <v-data-iterator :items="articles" :page="articlesPage" class="articles">
      <template v-slot:default="{items}">
        <template v-for="(item, i) in items" :key="i">
          <v-card v-bind="item.raw" class="__article-card" />
        </template>
      </template>
      <template v-slot:header="{page, pageCount, prevPage, nextPage}">
        <v-row class="__header align-center">
          <h4>Data List with pagination</h4>
          <v-spacer></v-spacer>
          <div class="__pagination">
            <v-btn @click="prevPage()" icon="mdi-chevron-left" density="compact" />
            <div class="text-caption">{{ page }} of {{pageCount}}</div>
            <v-btn @click="nextPage()" icon="mdi-chevron-right" density="compact" />
          </div>
        </v-row>
        <p class="text-md-subtitle-1">Very similar with data-table</p>
      </template>
    </v-data-iterator>
  </section>
  <section class="section">
    <ul>
      <li>Poop</li>
    </ul>
  </section>



</template>
<script setup>
  const openPanel = ref(0)

  const articles = Array.from({length: 12}, (k, v) => ({
    title: `Article ${v+1}`,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '
  }))
  const articlesPage = ref(1)
</script>
<style lang="stylus">
.section
  &:not(:last-of-type)
    margin-bottom 2rem
.accordion
  .__title
    background-color var(--theme)
    color var(--accent)
.image-card
  padding 1rem
  border-radius $border-radius-lg
  text-align center
.articles
  background-color var(--background)
  padding 1rem
  .__header
    padding 0 1rem 0.5rem
  .__article-card
    margin 1rem 0
  .__pagination
    flexbox center flex-end row 1rem
    padding 0.5rem 0
</style>