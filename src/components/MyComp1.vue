<template>
	<h1 :style="{ color: title.color }">{{ title.value }}</h1>
	<p>{{ msg }}</p>
	<p>{{ num }}</p>
	<p>{{ doubleNum }}</p>
	<div v-for="item in goods" :key="item.id">{{ item.id }} -- {{ item.name }} -- {{ item.price }}</div>
  <p></p>
	<button @click="add(2)">++</button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IProduct {
	id: number
	name: string
	price: number
}
interface titleInfo {
	value: string
	color: string
}

export default defineComponent({
	name: 'MyComp1',
	props: {
		msg: {
			type: String,
			required: true,
			default: 'msg'
		},
		title: {
			type: Object as PropType<titleInfo>,
			default: () => {
				return { value: 'title', color: '#000' }
			}
		}
	},
	data() {
		return {
			goods: [] as IProduct[],
			num: 10
		}
	},
	computed: {
		doubleNum() {
			return this.num * 2
		}
	},
	mounted() {
		this.goods.push({
			id: 1,
			name: 'TypeScript',
			price: 112
		})
	},
	methods: {
		add(num: number) {
			this.num += num
		}
	}
})
</script>
<style scoped></style>
