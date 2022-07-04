<template>
  <div>
    <div class="container">
      <intro-pages-cover img-name="poi-intro.png"/>
      <h1>Points of Interest</h1>
      <arrow-down id="arrow-down" @click.native="toContent"/>
      <div style="text-align: center; margin-bottom: 40px">
        <br>
        <br>
        <h3>Amazing Views</h3>
        <p id="intro">Discover all of the incredible historical sites, monuments, nature and piazzas that Brescia has to
          offer.</p>
        <br/><br/>
      </div>
      <div class="button-up" @click="toContent()">
        <p class="arrow up"></p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 ms-2 me-2 g-4">
        <div v-for="(element, key) of list" :key="key" class="col">
          <poi-card :poi="element"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poiCard from '~/components/PoICard.vue'

export default {
  name: 'PointsOfInterestPage',
  head() {
    return {
      title: 'Points of Interest',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the most attractive points of interest in Brescia'
        }
      ]
    }
  },
  components: {
    poiCard,
  },
  async asyncData({$axios}) {
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
  methods: {},
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
  position: sticky;
  top: 94%;
  left: 100%;
  margin-top: 800px;
  margin-bottom: -800px;
  margin-right: -4.5%;
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

@media all and (max-width: 500px) {
  .button-up {
    margin-right: -2.5%;
    width: 1.5rem;
  }
}
</style>
