<template>
	<div class="container">
	  <CardComponent>
		<h4>Add new item</h4>
		<AddItem />
	  </CardComponent>
	  <CardComponent>
		<h4>Total items {{ cart.itemsCount }} </h4>
		<ItemsList />
	  </CardComponent>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import CardComponent from '@/components/CardComponent.vue';
  import AddItem from '@/components/AddItem.vue'
  import ItemsList from '@/components/ItemsList.vue'
  import { useCartStore } from '@/stores/cart';
  
  export default defineComponent({
	  components: { CardComponent, AddItem, ItemsList },
	  setup () {
		  const cart = useCartStore()
	  return { cart }
	  }
  })
  
  </script>
  