<template>
  <div class="editor-wrapper">
    <div class="__menu">
      <v-btn-group density="compact" variant="elevated" divided rounded>
        <v-btn class="__btn" @click="editor.chain().focus().toggleBold().run()" icon="mdi-format-bold" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleItalic().run()" icon="mdi-format-italic" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleUnderline().run()" icon="mdi-format-underline" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleStrike().run()" icon="mdi-format-strikethrough-variant" ></v-btn>
      </v-btn-group>
      <v-btn-group density="compact" variant="elevated" divided>

      </v-btn-group>
      <v-btn-group density="compact" variant="elevated" divided rounded>
        <v-btn class="__btn" @click="editor.chain().focus().toggleBulletList().run()" icon="mdi-format-list-bulleted" border density="comfortable" ></v-btn>
        <v-btn class="__btn" @click="editor.chain().focus().toggleOrderedList().run()" icon="mdi-format-list-numbered" border density="comfortable" ></v-btn>
      </v-btn-group>
    </div>
    <editor-content :editor="editor" class="__editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import {Underline} from '@tiptap/extension-underline'
import {Placeholder} from '@tiptap/extension-placeholder'

const editor = useEditor({
  content: null,
  components: {
    EditorContent
  },
  extensions: [
    StarterKit,
    Underline,
    Placeholder.configure({
      considerAnyAsEmpty: true,
      placeholder: 'Write something habibi'
    })
  ],
})
</script>

<style lang="stylus" scoped>
.editor-wrapper
  .__menu
    background-color var(--theme-tertiary-lighten-4)
    border 1px solid $border-color
    border-bottom none
    border-radius $border-radius-md $border-radius-md 0 0
    padding 0.25rem
    flexbox center space-between row 1rem
  .__btn
    background var(--theme-tertiary-lighten-1)
  &:deep()
    .__editor
      background-color var(--theme-tertiary-lighten-4)
      border-radius 0 0 $border-radius-md $border-radius-md
      border 1px solid $border-color
      padding 2rem 1rem
    .tiptap
      &:focus
      &:active
        outline none
        .is-editor-empty:before
          display none
      .is-editor-empty
        &:before
          content attr(data-placeholder)
          display block
          height 0


</style>