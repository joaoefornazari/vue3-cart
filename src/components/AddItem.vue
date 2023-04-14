<template>
	<form class="form">
		<div class="mb-3">
			<label class="form-label">Name</label>
			<input v-model="inputs.name" type="text" class="form-control" />
		</div>
		<div class="mb-3">
			<label class="form-label">URL</label>
			<input v-model="inputs.url" type="text" class="form-control" />
		</div>
		<button @click="submit" class="btn btn-success">Add</button>
	</form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
	setup() {
		const inputs = reactive({ name: '', url: ''  })
		const cart = useCartStore()
		const submit = (event: Event) => {
			event.preventDefault()
			alert('Guacamole')
			cart.addItem({ ...inputs })
			inputs.name = ''
			inputs.url = ''
		}
		return { inputs, submit }
	}
})
</script>
