<script setup lang="ts">
const editorReturnType = ref('html')
const editorValue = ref('')

</script>

<template>
  <section class="section">
    <h4 id="tiptapeditor">Editor</h4>
    <v-btn-toggle variant="flat" v-model="editorReturnType" divided base-color="secondary">
      <v-btn value="html" prepend-icon="mdi mdi-language-html5">HTML</v-btn>
      <v-btn value="json" prepend-icon="mdi-code-json">JSON</v-btn>
      <v-btn value="text" prepend-icon="mdi-text">Text</v-btn>
    </v-btn-toggle>
    <tiptap-editor v-model="editorValue" :return-type="editorReturnType" :key="editorReturnType"></tiptap-editor>
    <v-divider></v-divider>
    <h4>Result</h4>
    <pre class="result">{{editorValue}}</pre>
  </section>
</template>

<style scoped lang="stylus">
.result
  min-height 4rem
  width-height 100%
  background-color var(--theme-surface)
  border-radius $border-radius-md
  padding 2rem 1rem
</style>