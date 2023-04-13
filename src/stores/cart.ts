import { defineStore } from 'pinia'

export type Item = { name: string, url: string }

export const useCartStore = defineStore({
	id: 'cart',
	state: () => ({
		items: [] as Item[]
	}),
	getters: {
		itemsCount(): number {
			return this.items.length
		}
	},
	actions: {
		addItem(item: Item) {
			this.items.push(item)
		},
		removeItem(item: Item) {
			const index = this.items.findIndex(storeItem => storeItem.name === item.name)
			if (index > -1) this.items.splice(index, 1)
		}
	}
})

/**
 * export type = create a new type in Typescript
 * 
 * about Pinia's defineStore args:
 * 
 * {
 * 		state: we keep the properties of our Store here
 * 		getters: we keep methods that obtain state data here
 * 		actions: we keep methods that change/update state data here
 * }
 */