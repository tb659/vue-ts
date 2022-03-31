<template>
	<div class="home">
		<img src="~_a/images/1.png" alt="">
		<!-- <my-comp1 msg="helloWorld" :title="{ value: '标题', color: 'red' }"></my-comp1>
		<my-comp2 msg="helloWorld" :title="{ value: '标题', color: 'blue' }"></my-comp2>
		<my-comp3 msg="helloWorld" :title="{ value: '标题', color: 'green' }"></my-comp3> -->
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import MyComp1 from '_c/MyComp1.vue'
// import MyComp2 from '_c/MyComp2.vue'
// import MyComp3 from '_c/MyComp3.vue'

export default defineComponent({
	name: 'Home',
	components: {
		// HelloWorld,
		// MyComp1,
		// MyComp2,
		// MyComp3
	}
})
</script>
