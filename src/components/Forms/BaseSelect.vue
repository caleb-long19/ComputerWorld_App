<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  }
}
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <select
      :value="modelValue"
  >
    <option
    >
      :value="option"
      :selected="option === event."
      >
  </select>
</template>