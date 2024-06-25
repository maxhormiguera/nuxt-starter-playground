<script setup lang="ts">
import {useTheme} from 'vuetify'

const theme = useTheme()

const changeTheme = (themeName:string) => {
  theme.global.name.value = themeName
}

console.log('::: theme ', theme)
</script>

<template>
<v-btn-group class="theme-select">
  <v-btn append-icon="mdi-carrot" @click="changeTheme('carrot')">carrot</v-btn>
  <v-btn append-icon="mdi-fruit-grapes" @click="changeTheme('grape')">grape</v-btn>
  <v-btn append-icon="mdi-peanut" @click="changeTheme('peanut')">peanut</v-btn>
  <v-btn append-icon="mdi-fruit-watermelon">watermelon</v-btn>
</v-btn-group>
</template>

<style scoped lang="stylus">
.theme-select
  gap 0.125rem
</style>