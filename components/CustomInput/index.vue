<script setup lang="ts">
interface IProps {
	modelValue: ''
}

const props = defineProps<IProps>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
	<input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>

<style lang="scss" module>
@use './style.scss';
</style>
