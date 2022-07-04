<template>
  <div class="container">
    <intro-pages-cover img-name="itineraries-intro.png"/>
    <h1>Itineraries</h1>
    <!-- <p>&lt; Back</p> -->
    <arrow-down id="arrow-down" @click.native="toContent"/>
    <h3>A good place to start</h3>
    <p id="intro">Unsure about what to see first? Here are some itinerary and visit recommendations curated specially
      by our local guides. There is something for everyone at Brescia!</p>
    <br/><br/>
    <table id="itineraries-table">
      <tr>
        <td v-for="(itinerary) of stList" :key="itinerary.id">
          <round-image-card
            :title="itinerary.name"
            :id="itinerary.id"
            :description="itinerary.short_description"
            :cover-img="require(`@/assets/Itinerary_thumbnail/${itinerary.thumbnail}`)"
            :url="'/itinerary/' + itinerary.id"
          />
        </td>
      </tr>
    </table>
    <br>
    <br>
    <h1 class="end">Brescia waits for you!</h1>
    <p class="contact">
      For more information please contact <br/><a
      href="mailto:hello@brescia.it"
    >hello@brescia.it</a
    >
    </p>
  </div>

</template>

<script>
import RoundImageCard from "~/components/RoundImageCard";

export default {
  name: 'ItinerariesPage',
   head() {
    return {
      title: 'Itineraries',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains the itineries to experience Brescia at best'
        }
      ]
    }
  },
  components: {
    RoundImageCard
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

  methods: {
    toContent() {
      const arrow = document.getElementById('arrow-down')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },

  mounted() {
    const menuItems = document.querySelectorAll('.nav-link')
    menuItems[2].classList.add('current-topic')
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

#intro {
  font-family: Inter, serif;
  font-weight: 100;
  width: 100%;
  max-width: 600px;
  text-align: justify;
}

a {
  color: #d8eff5;
}

#arrow-down {
  display: block;
  margin: 50px auto 50px auto;
}

#itineraries-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

#itineraries-table tr {
  margin: auto;
  text-align: center;
  vertical-align: top;
}

#itineraries-table td {
  display: inline-block;
}
</style>
