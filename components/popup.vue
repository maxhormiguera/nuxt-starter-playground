<script setup lang="ts">
const props = defineProps({
  active: { type: Boolean, default: false },
  title: { type: String, default: null },
  message: { type: String, default: '' },
  cancelBtnClass: { type: String, default: 'btn-ghost1' },
  cancelBtnText: { type: String, default: 'Cancel' },
  confirmBtnClass: { type: String, default: 'btn-accent1' },
  confirmBtnText: { type: String, default: 'Ok' },
  reverseButtonsOrder: { type: Boolean, default: false },
  hideDefaultButtons: { type: Boolean, default: false },
  waitForResponse: { type: Boolean, default: false},
  responsePending: { type: Boolean, default: false},
})
const emit = defineEmits(['confirmed', 'update:active', 'update:responsePending'])

function onConfirm () {
  emit('confirmed')
  closeModal()
}
function closeModal () {
  emit('update:active', false)
}



</script>

<template>
  <div v-if="active" class="popup">
    <slot name="content">
      <h4>{{ title }}</h4>
      <p>{{ message }}</p>
    </slot>
    <slot name="actions">
      <div class="__actions" v-if="!hideDefaultButtons" :class="{'--reverse': reverseButtonsOrder}">
        <v-btn :class="confirmBtnClass" :text="confirmBtnText" @click="onConfirm" :disabled="waitForResponse && responsePending"/>
        <v-btn :class="cancelBtnClass" :text="cancelBtnText" @click="closeModal"/>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="stylus">
.popup
  padding 1rem
  background-color var(--theme-surface)
  border-radius $border-radius-md
  positioning absolute 50% 50%
  transform translate(50%, -50%)
  width clamp(12rem, 50%, 24rem)
  .__actions
    margin-top 1rem
    flexbox center center row 1rem
    &.--reverse
      flex-direction row-reverse
</style>