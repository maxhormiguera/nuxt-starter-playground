<script setup lang="ts">
import {useTheme} from 'vuetify';

const themeName = useTheme().global.name.value
/* todo:  change logo dynamically with theme
          use store to get all changes ..?
*/
const logo = computed(() =>
  themeName === 'grape' ? 'mdi-fruit-grapes' :
  themeName === 'carrot' ? 'mdi-carrot' : ''
)

console.log(':: logo ', logo)

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


</style>