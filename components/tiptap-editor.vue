<template>
  <div class="editor-wrapper">
    <div class="__menu">
      <v-btn-group>
        <v-btn class="__btn" @click="editor.chain().focus().toggleBold().run()" icon="mdi-format-bold" border density="comfortable" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleItalic().run()" icon="mdi-format-italic" border density="comfortable" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleStrike()" icon="mdi-format-strike" border density="comfortable" ></v-btn>
      </v-btn-group>
    </div>
    <editor-content :editor="editor" class="__editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>This is a TipTap editor with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
  ],
})
</script>

<style lang="stylus" scoped>
.editor-wrapper
  .__menu
    border 1px solid $border-color
    border-bottom none
    border-radius $border-radius-md $border-radius-md 0 0
    padding 0.25rem
  .__editor:deep() .tiptap
    border 1px solid $border-color
    border-radius 0 0 $border-radius-md $border-radius-md
    padding 2rem 1rem
    &:focus
    &:active
      outline none
      box-shadow 0 0 0.25rem var(--theme)

</style>