<template>
  <div class="pointofinterest">
    <cover :title="name" :image="require(`@/assets/Poi_Cover/${cover_img}`)" crumb="Points of Interest" crumbLink="points-of-interest-intro"/>
    <div class="container">
      <table class="poi-intro">
        <div class="row">
          <div class="col text">
            <p>
              {{ intro }}
              <br />
              <br />
              {{ details }}
              <br />
              <br />
            </p>
          </div>
          <div class="col image">
            <img
              :src="require(`@/assets/${img}`)"
              alt="point of interest detail"
            />
            <br />
            <br />
            <figcaption>{{ img_caption }}</figcaption>
          </div>
        </div>
      </table>

      <table class="events-table">
        <tr>
          <h2>Events related to this point of interest</h2>
          <br />
          <br />
        </tr>
        <tr>
          <transition-group name="fade">
            <td v-for="event of events" :key="event.id">
              <event-card
                :id="event.id"
                :description="event.description"
                :type="event.type"
                :name="event.title"
                :poi="name"
                :time="'H ' + event.time.slice(0, -3)"
                :img-name="event.cover_img"
                :date="event.date"
              />
            </td>
          </transition-group>
        </tr>
      </table>

      <table class="itineraries-table">
        <tr>
          <h2>Visit through these itineraries</h2>
          <br />
          <br />
        </tr>
        <tr>
          <transition-group name="fade">
            <td v-for="itinerary of itineraries" :key="itinerary.id">
              <round-image-card
                :title="itinerary.name"
                :id="itinerary.id"
                :description="itinerary.short_description"
                :cover-img="itinerary.thumbnail"
                @click.native="$router.push('/itinerary/' + itinerary.id)"
              /></td
          ></transition-group>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Cover from '~/components/Cover.vue'
import EventCard from '~/components/EventCard.vue'
import RoundImageCard from '~/components/RoundImageCard.vue'
export default {
  name: 'PointOfInterestPage',
  components: {
    Cover,
    EventCard,
    RoundImageCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/points-of-interest/' + id)
    const poI = data
    return {
      name: poI.name,
      cover_img: poI.cover_img,
      img: poI.img,
      img_caption: poI.img_caption,
      intro: poI.intro,
      details: poI.details,
      id: poI.id,
      events: poI.events,
      itineraries: poI.itineraries,
    }
  },
}
</script>


 <style scoped>
* {
  color: #d8eff5;
}

.poi-intro {
  margin-top: 8rem;
}

.text {
  /* padding-left: 3%; */
  /* padding-right: 10%; */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.image {
  padding-left: 13%;
}

.events-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
  margin-top: 9rem;
}
.events-table tr {
  margin: auto;
  text-align: left;
}

.events-table td {
  display: inline-block;
}

.h2 {
  text-align: left;
}

img {
  max-width: 100%;
}

.itineraries-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
  margin-top: 9rem;
}
.itineraries-table tr {
  margin: auto;
  text-align: left;
}

.itineraries-table td {
  display: inline-block;
}
</style>
