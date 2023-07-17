<template>
  <component :is="component" class="btn" :class="color" :to="to">
    {{ title }}
  </component>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  color: {
    type: String,
    default: 'primary' || 'secondary' || 'gray'
  },
  to: {
    type: String,
  }
})


const component = computed(() => {
  if (props.to) {
    return 'router-link'
  } else {
    return 'button'
  }
})

</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  height: 35px;
  padding-inline: 9px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &.primary {
    background-color: var(--primary-color);
    color: var(--white-color);
  }

  &.secondary {
    background-color: var(--secondary-color);
    color: var(--white-color);
  }

  &.gray {
    background-color: var(--gray-color);
    color: var(--black-color);
  }
}
</style>