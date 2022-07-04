<template>
  <div>
    <cover
      :title="name"
      :image="require(`@/assets/Itinerary_Cover/${cover_img}`)"
      crumb="Itineraries"
      crumb-link="itineraries"
    />
    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-between" style="margin:0">
      <div v-if="duration" class="col d-flex justify-content-center">
        <div><p class="text-muted"> Duration </p></div>
        <div><p> {{ duration / 60 }} hours </p></div>
      </div>
      <div v-if="category" class="col d-flex justify-content-center">
        <div><p class="text-muted">Category</p></div>
        <div><p>{{ category }}</p></div>
      </div>
      <div v-if="inout" class="col d-flex justify-content-center">
        <div><p class="text-muted">Environment</p></div>
        <div><p>{{ inout }}</p></div>
      </div>
    </div>
    <the-paragraph :img="require(`@/assets/Itinerary_thumbnail/${thumbnail}`)" :parag="overview" :title="'Overview'"
                   :imgSize="'overview'"/>
    <div class="v-list">
      <stop v-for="(poi,k) in pois" :key="k" :k="k" :poi="poi">
      </stop>
    </div>
    <div class="card">
      <iframe
        title="Map of the selected itinerary"
        class="map"
        frameborder="0"
        style="border: 0"
        referrerpolicy="no-referrer-when-downgrade"
        :src="'https://www.google.com/maps/embed/v1/directions?key=AIzaSyA43xG7rDzZF-wj6BHQXC4XxPqMgk0py9o'+
        '&origin='+ pois[0].address + 'brescia' +
        '&waypoints=' + wp +
        '&destination='+ dest +
        '&mode=walking'"

        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import Stop from '~/components/Stop.vue'
import TheParagraph from '~/components/TheParagraph.vue'

export default {
  name: 'ItinerayDetail',
  // eslint-disable-next-line vue/no-unused-components
  components: {TheParagraph, Stop},
   head() {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the details about the itineray '+ this.name
        }
      ]
    }
  },
  async asyncData({route, $axios}) {
    const id = route.params.id
    const {data} = await $axios.get('/api/itinerary/' + id)
    return {
      name: data.name,
      cover_img: data.cover_img,
      overview: data.overview,
      thumbnail: data.thumbnail,
      inout: data.inout,
      category: data.category,
      duration: data.duration,
      pois: data.pointOfInterests,
    }
  },
  computed: {
    wp() {
      let s = ''
      for (let i = 1; i < this.pois.length - 1; i++) {
        s = s + this.pois[i].address + ' brescia'
        if (i < this.pois.length - 2)
          s = s + '|'
      }
      return s
    },
    dest() {
      return this.pois[this.pois.length - 1].address + ' brescia'
    }
  }

}
</script>

<style scoped>
.overview {
  width: 45%;
  margin-left: 5vw;
}

.overview h4 {
  margin-bottom: 2rem
}

.card {
  margin: 20px 30px 0px 30px
}

.card iframe {
  height: 70vh;
}

.text-muted {
  font-weight: 100;
  color: #d8eff5 !important;
}

p {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  margin: 0.5rem;
}
</style>
