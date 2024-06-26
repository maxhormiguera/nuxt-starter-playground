<template>
  <v-app :style="themeColors">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
<script setup lang="ts">
import {useTheme} from 'vuetify'

const theme = useTheme()

const themeColors = computed(() => {
  const c = {} as {
    [x:string]: string
  }
  for(const key of Object.keys(theme.current.value.colors)) {
    c[`--theme-${key}`] = theme.current.value.colors[key]
  }
  console.log('::: c ', c
  )
  return c
})
</script>