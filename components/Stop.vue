<template>
<!-- si potrebbe aggiungere un riassunto all'inizio delle varie tappe -->
	<div class="v-list">
		<div v-for="(poi,k) in list" :key="k" class="stop">
			<div class="text">
				<p class="stp">Stop <span>{{k+1}}</span></p>
				<p class="title"><nuxt-link :to="'/points-of-interest/'+ poi.id">{{poi.name}}</nuxt-link></p>
			</div>
			<div class="double-arrow"><img src="~/assets/Line 1.png" alt="connection arrow between point of interest name and img"/></div>
			<div class="stop-img"><nuxt-link :to="'/points-of-interest/'+ poi.id"><img :src="require(`@/assets/poI_thumbnail/${poi.thumbnail}`)" alt="The point of interest:"></nuxt-link></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheStop',
	props:{
		list:{
			type: Array,
			required: true
		}
	},
	mounted(){
		console.log(this.list)
	}
}
</script>

<style scoped>

*{
	box-sizing: border-box;
}
.stop{
	display: flex;
	justify-content:space-around;
	align-items: center;
	width:90%;
	margin:5rem auto;
	/* border: 1px solid red; */
	height: 70vh
}
.text{
	width:25%;
	font-family: Inter, serif;
	font-weight: 100;
	/* border: 1px solid yellow */
}
.stp{
	font-size:1.1rem;
	text-decoration: underline;
}
.title{
	font-weight:400;
	font-size: 1.2rem;
}
.double-arrow{
	/* padding:1%; */
	width:18%;
	/* border: 1px solid green; */
	
	
}
.double-arrow img{
	width: 100%;
	/* border: 1px solid violet; */
	height:100%
	/* margin:auto 0; */
}
.stop-img{
	width: 50%;
	/* border: 1px solid blue; */
	height:inherit;
}
.stop-img img{
	width:100%;
	/* border: 1px solid salmon; */
	height:100%
}
a{
  color: inherit;
  text-decoration: none;	
}
a:hover{
	color:#59FFF5;
}
</style>
