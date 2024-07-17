<script setup lang="ts">
import {useTheme} from 'vuetify'
const themeName = useTheme().global.name.value
/* todo:  change logo dynamically with theme
          use store to get all changes ..?
*/
const logo = computed(() =>
  themeName === 'grape' ? 'mdi-fruit-grapes' :
  themeName === 'carrot' ? 'mdi-carrot' : ''
)

</script>

<template>
  <header>
    <div class="container">
      <v-icon :icon="logo" ></v-icon>
      <span>{{logo}}</span>
    </div>
  </header>
</template>

<style scoped lang="stylus">
header
  font-size 2.25rem
  background-color blend-color(var(--theme-background), #000, 30%)
  color blend-color(var(--theme-background), #fff, 50%)
</style>