<template>
  <div>
    <intro-pages-cover img-name="poi-intro.png"/>
    <h1 style="margin-left: 10vw">Points of Interest</h1>
    <!-- TODO inserire qui una piccola OVERVIEW -->
    <div style="text-align: center; margin-bottom: 40px">
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
    <table id="poi-table">
      <tr>
        <td v-for="(element, key) of list" :key="key">
          <poi-card :poi="element"/>
        </td>
      </tr>
    </table>
    <!-- <a href="#grid"> -->
    <div class="button-up" @click="toGrid()">
      <p class="arrow up"></p>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
import poiCard from '~/components/PoICard.vue'

export default {
  name: 'PointsOfInterestPage',
  components: {
    poiCard,
  },
  async asyncData({$axios}) {
    // const { data } = await $axios.get('http://localhost:3000/api/events/all')
    const {data} = await $axios.get('/api/points-of-interest')
    return {
      list: data,
    }
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    toGrid() {
      const arrow = document.getElementsByClassName("arrow-down")
      console.log(arrow)
      arrow[0].scrollIntoView({
        behavior: 'smooth'
      })
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  font-family: 'Casual', serif;
  margin-bottom: 3rem;
}

#poi-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

#poi-table tr {
  margin: auto;
  text-align: center;
  vertical-align: top;
}

#poi-table td {
  display: inline-block;
}

.button-up {
  position: fixed;
  bottom: 10px;
  right: 7px;
  width: 2rem;
  background-color: #d8eff5;
  border: white solid 2px;
  border-radius: 125px;
  text-align: center;
  padding: 2px;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0;
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
</style>
