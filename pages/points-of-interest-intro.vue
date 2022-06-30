<template>
  <div>
    <div class="container">
      <!-- <cover :image="'poi-intro.png'" :title="'Points of Interest'"> </cover> -->
      <intro-pages-cover img-name="poi-intro.png"/>
      <h1>Points of Interest</h1>
      <!-- TODO inserire qui una piccola OVERVIEW -->
      <arrow-down id="arrow-down" @click.native="toGrid"/>
      <div style="text-align: center; margin-bottom: 40px">
        <br>
        <br>
        <h3>Amazing Views</h3>
        <p id="intro">Discover all of the incredible historical sites, monuments, nature and piazzas that Brescia has to
          offer.</p>
        <br/><br/>

      </div>
      <!-- fino a qui -->
      <!-- <table id="poi-table">
        <tr>
          <td v-for="(element, key) of list" :key="key">
            <poi-card :poi="element"/>
          </td>
        </tr>
        </table>-->
      <div class="row row-cols-1 row-cols-md-3 ms-2 me-2 g-4">
        <div v-for="(element, key) of list" :key="key" class="col">
          <poi-card :poi="element"/>
        </div>
      </div>

      <!-- <a href="#grid"> -->
      <div class="button-up" @click="toGrid()">
        <p class="arrow up"></p>
      </div>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
import poiCard from '~/components/PoICard.vue'
// import cover from '~/components/Cover.vue'
export default {
  name: 'PointsOfInterestPage',
  components: {
    poiCard,
    // cover,
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
      const arrow = document.getElementById('arrow-down')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    const menuItems = document.querySelectorAll('.nav-link')
    menuItems[3].classList.add('current-topic')
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
  text-align: left;
}

h3 {
  text-align: left;
}

.button-up {
  cursor: pointer;
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

#intro {
  font-family: Inter, serif;
  font-weight: 100;
  width: 100%;
  max-width: 600px;
  text-align: left;
}
</style>
