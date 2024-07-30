<template>
  <section class="section">
    <v-data-iterator :items="articles" :page="articlesPage" class="articles">
      <template v-slot:default="{items}">
        <div class="__items">
          <template v-for="(item, i) in items" :key="i">
            <v-card v-bind="item.raw" class="__article-card" />
          </template>
        </div>
      </template>
      <template v-slot:header="{page, pageCount, prevPage, nextPage}">
        <div class="__header">
          <v-row class="align-center">
            <h4>Data List with pagination</h4>
            <v-spacer></v-spacer>
            <div class="__pagination">
              <v-btn @click="prevPage()" icon="mdi-chevron-left" density="compact" />
              <div class="text-caption">{{ page }} of {{pageCount}}</div>
              <v-btn @click="nextPage()" icon="mdi-chevron-right" density="compact" />
            </div>
          </v-row>
          <p class="text-md-subtitle-1">Very similar with data-table</p>
        </div>
      </template>
    </v-data-iterator>
  </section>
</template>
<script setup>
  const articles = Array.from({length: 12}, (k, v) => ({
    title: `Article ${v+1}`,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '
  }))
  const articlesPage = ref(1)
</script>
<style lang="stylus">
.articles
  background-color var(--theme-tertiary)
  border-radius $border-radius-sm
  padding-bottom 0.5rem
  .__header
    background-color var(--theme-secondary)
    color var(--theme-on-surface)
    positioning sticky 0 0 false 0
    padding 2rem 2rem 0.5rem
    z-index 1
  .__article-card
    margin 2rem 1rem
    background-color var(--theme-tertiary-lighten-4)
  .__pagination
    flexbox center flex-end row 1rem
    padding 0.5rem 0
</style>