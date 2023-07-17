<template>
  <div>
    <p v-if="title">{{ title }}
    </p>
    <div class="badges">
      <Badge v-for="(item, index) in data" :key="index" :selected="modelValue.includes(item[valueLabel])"
        @click="onClick(item[valueLabel])">
        {{ item[titleLabel] }}
      </Badge>
    </div>
  </div>
</template>

<script setup>
import Badge from './Badge.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Array,
    required: true
  },
  valueLabel: {
    type: String,
    default: 'id'
  },
  titleLabel: {
    type: String,
    default: 'name'
  }
})

const emit = defineEmits(['update:modelValue'])

const onClick = (value) => {
  if (props.modelValue.includes(value)) {
    emit('update:modelValue', props.modelValue.filter(item => item !== value))
  } else {
    emit('update:modelValue', [...props.modelValue, value])
  }
}

</script>

<style scoped></style>