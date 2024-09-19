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
  <input
      v-bind="$attrs"
      :placeholder="label"
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>