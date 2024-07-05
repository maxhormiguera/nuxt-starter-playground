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
      {{logo}}
    </div>
  </header>
</template>

<style scoped lang="stylus">
@css {
  header {
    background-color: color-mix(in srgb, var(--theme-background), #000 20%);
    color: color-mix(in srgb, var(--theme-primary), #fff 20%);
  }
}


</style>