<script lang="ts" setup>
const inputValue = ref('0')
</script>

<template>
	{{ inputValue }}
	<CustomInput v-model="inputValue" />

	<CustomInput v-model="inputValue" />
</template>
