<script setup lang="ts">
import {useTheme} from 'vuetify'

const theme = useTheme()

const changeTheme = (themeName:string) => {
  theme.global.name.value = themeName
}
const themeSelected = ref(theme.global.name.value)
</script>

<template>
<v-btn-toggle class="theme-select" divided v-model="themeSelected" >
  <v-btn append-icon="mdi-carrot" @click="changeTheme('carrot')">carrot</v-btn>
  <v-btn append-icon="mdi-fruit-grapes" @click="changeTheme('grape')">grape</v-btn>
  <v-btn append-icon="mdi-peanut" @click="changeTheme('peanut')">peanut</v-btn>
  <v-btn append-icon="mdi-fruit-watermelon">watermelon</v-btn>
</v-btn-toggle>
</template>