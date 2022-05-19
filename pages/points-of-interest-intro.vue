<template>
  <div class="container">
    <!-- di tutta questa parte si potrebbe fare un component (si ripete anche nella introductory page di events) -->
    <div style="text-align: end" >
      <img
        class="intro-img"
        src="~/assets/poi-intro.png"
        alt="Points of Interest introductory image">
    </div>
    <h1>Points of Interest</h1>
    <!-- inserire qui una piccola OVERVIEW -->
    <div style="text-align: center">
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5" />
    </svg>
    </div>
    <!-- fino a qui -->
    <div class="grid-container">
      <poi-card
        v-for="(element, key) of list"
        :key="key"
        :poi="element"
      />
    </div>
  </div>
</template>

<script>
import poiCard from '~/components/PoICard.vue'
export default {
  name: 'PointsOfInterestPage',
  components: {
    poiCard,
  },
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/events/all')
    const { data } = await $axios.get('/api/points-of-interest')
    return {
      list: data,
    }
  },
  data() {
    return {
      list: [],
    }
  },
}
</script>

<style scoped>

h1 {
  font-family: "Casual", serif;
  margin-bottom:3rem;
}
.grid-container {
  margin:0.1rem;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 1rem;
}
</style>
<style>
.intro-img{
  height:23rem;
  max-width:100%
}
</style>