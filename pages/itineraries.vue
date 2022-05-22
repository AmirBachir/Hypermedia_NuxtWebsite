<template>
    <div class="container">
    <div style="text-align:end">
      <img class="intro-img" src="~/assets/itineraries-intro.png" alt="service types image"/>
    </div>
    <h1>Itineraries</h1>
    <!-- <p>&lt; Back</p> -->
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5"/>
    </svg>
    <h3>A good place to start</h3>
    <p class="intro">Unsure about what to see first? Here are some itinerary and visit recommendations curated specially by our local guides. There is something for everyone at Brescia!</p>
    <br /><br />
    <table class="itineraries-table">
      <tr>
        <td v-for="(itinerary) of stList" :key="itinerary.id">
        <itinerary-card
                :name="itinerary.name"
                :id="itinerary.id"
                :description="itinerary.short_description"
                :img-name="itinerary.thumbnail"
              />
        </td>
      </tr>
    </table>
    <br>
    <br>
    <h1 class="end">Brescia waits for you!</h1>
    <p class="contact">
      For more information please contact <br /><a
        href="mailto:hello@brescia.it"
        >hello@brescia.it</a
      >
    </p>
  </div>
    
</template>

<script>
import ItineraryCard from "~/components/ItineraryCard";

export default {
  name: 'ItinerariesPage',
  components: {
    ItineraryCard
  },
  // Note: This happens on backend (server) side
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/itineraries')
    return {
      stList: data,
    }
  },
  data() {
    return {
      stList: []
    }
  },
}

</script>

<style scoped>

@font-face {
  font-family: "Casual";
  src: local("~/assets/Casual-Regular.ttf");
}

img {
  max-width: 100%;
  padding: 10px;
}

h1 {
  font-family: "Casual", serif;
}

.end {
  font-family: 'Casual', serif;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}

.contact {
  font-family: Inter, serif;
  font-weight: 100;
  text-align: center;
}

.intro{
  font-family: Inter, serif;
  font-weight: 100;
  max-width: 600px;
}


/* button {
  display: inline-block;
  min-width: 20%;
  margin: auto 2% auto auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
} */

/* button:hover {
  background: #d8eff5;
  color: #234c60;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
} */

a {
  color: #d8eff5;
}

.intro-img {
  margin-right: 0;
}

.arrow-down {
  display: block;
  margin: 50px auto 50px;
}

.itineraries-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
  
}

.itineraries-table tr {
  margin: auto;
  text-align: center;
   
}

.itineraries-table td {
  display: inline-block;
}

/* ANIMATIONS AND TRANSITIONS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
