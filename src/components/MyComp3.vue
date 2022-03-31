<template>
	<h1 :style="{ color: title.color }">{{ title.value }}</h1>
	<p>{{ msg }}</p>
	<p>{{ num }}</p>
	<p>{{ doubleNum }}</p>
	<div v-for="item in goods" :key="item.id">{{ item.id }} -- {{ item.name }} -- {{ item.price }}</div>
	<p></p>
	<button @click="add(2)">++</button>
</template>
<script lang="ts" setup>
import { ref, computed, defineProps, PropType, onMounted } from 'vue'

interface IProduct {
	id: number
	name: string
	price: number
}
interface titleInfo {
	value: string
	color: string
}
defineProps({
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
})

let goods = ref([] as IProduct[])
let num = ref(10 as number)
let add = (n: number) => (num.value += n)

let doubleNum = computed(() => num.value * 2)

onMounted(() => {
	goods.value.push({
		id: 1,
		name: 'TypeScript',
		price: 112
	})
})
</script>
<style scoped></style>
