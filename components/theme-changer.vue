<script setup lang="ts">
import {useTheme} from 'vuetify'

const theme = useTheme()

const changeTheme = (themeName:string) => {
  console.log('::: themeName ', themeName)
  theme.global.name.value = themeName
}
const themeSelected = ref(theme.global.name.value)

const themes = [
  {value: 'carrot', icon: 'mdi-carrot' },
  {value: 'grape', icon: 'mdi-fruit-grapes' },
  {value: 'peanut', icon: 'mdi-peanut' },
  {value: 'watermelon', icon: 'mdi-fruit-watermelon' },
]
</script>

<template>
  <v-btn-toggle class="theme-select" divided v-model="themeSelected" color="secondary" @update:model-value="changeTheme(themeSelected)" >
    <v-btn v-for="{value, icon} in themes" :text="value" :prepend-icon="icon" :value="value" />
  </v-btn-toggle>
</template>