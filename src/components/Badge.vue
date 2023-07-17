<template>
  <div class="badge" :class="{
    selected: selected
  }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  selected: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.badge {
  padding: 8px 7px;
  background-color: var(--gray-color);
  color: var(--black-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &.selected {
    background-color: #E42C5F;
    color: var(--white-color);
  }
}
</style>