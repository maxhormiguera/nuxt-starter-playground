<script lang="ts" setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import {Underline} from '@tiptap/extension-underline'
import {Placeholder} from '@tiptap/extension-placeholder'

const { modelValue } = defineProps({
  modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: modelValue,
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false
    }),
    Underline,
    Placeholder.configure({
      considerAnyAsEmpty: true,
      placeholder: 'Short blurb...'
    })
  ],
  onUpdate: ({editor}) => {
    emit('update:modelValue', editor.getHTML())
  }
})

const setLink = ref({
  active: false,
  toHref: '',
  toTarget: '_blank'
})

</script>

<template>
  <div class="editor-wrapper">
    <div class="__menu">
      <v-btn-group density="compact" variant="elevated" divided rounded>
        <v-btn class="__btn" @click="editor?.chain().focus().toggleBold().run()" icon="mdi-format-bold" ></v-btn>
        <v-btn class="__btn" @click="editor?.chain().focus().toggleItalic().run()" icon="mdi-format-italic" ></v-btn>
        <v-btn class="__btn" @click="editor?.chain().focus().toggleUnderline().run()" icon="mdi-format-underline" ></v-btn>

        <v-btn class="__btn" @click="editor?.chain().focus().toggleStrike().run()" icon="mdi-format-strikethrough-variant" ></v-btn>
      </v-btn-group>
      <v-btn-group density="compact" variant="elevated" divided>
        <v-btn class="__btn" @click="setLink.active = true" icon="mdi-link" ></v-btn>
        <v-btn class="__btn" @click="editor?.commands.unsetLink()" icon="mdi-link-off" ></v-btn>
      </v-btn-group>
      <v-btn-group density="compact" variant="elevated" divided rounded>
        <v-btn class="__btn" @click="editor?.chain().focus().toggleBulletList().run()" icon="mdi-format-list-bulleted" border density="comfortable" ></v-btn>
        <v-btn class="__btn" @click="editor?.chain().focus().toggleOrderedList().run()" icon="mdi-format-list-numbered" border density="comfortable" ></v-btn>
      </v-btn-group>
    </div>
    <client-only>
      <editor-content :editor="editor" class="__editor" />
    </client-only>
    <popup @confirmed="editor?.commands.setLink({href:setLink.toHref, target: setLink.toTarget})" v-model:active="setLink.active" confirm-btn-text="Set Link" reverse-buttons-order>
      <template #content>
        <v-text-field v-model="setLink.toHref" label="Href"></v-text-field>
        <p class="__popup-note"><small>Right-click to open added links*</small></p>
      </template>
    </popup>
  </div>
</template>

<style lang="stylus" scoped>
.editor-wrapper
  position relative
  min-height 16rem
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


  .__popup-note
    padding-left 1rem
</style>