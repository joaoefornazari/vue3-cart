<template>
	<div v-for="item in items" :key="item.name" class="row my-1">
		<div class="col">
			<a :href="item.url">
				<h5>{{ item.name }}</h5>
			</a>
		</div>
		<div class="cols col-auto"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
	setup () {
		const cart = useCartStore()
		return { cart }
	}
})
</script>
