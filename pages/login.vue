<script lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
	name: '',
	email: '',
	select: null,
	checkbox: null,
}
</script>

<template>
	<v-form>
		<v-btn class="me-4"> submit </v-btn>
		<v-btn> clear </v-btn>
	</v-form>
</template>
