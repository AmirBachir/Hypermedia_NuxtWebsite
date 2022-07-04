<template>
  <div class="pointofinterest">
    <cover :title="name" :image="require(`@/assets/PoI_Cover/${cover_img}`)" crumb="Points of Interest"
           crumbLink="points-of-interest-intro"/>
    <div class="container">
      <table class="poi-intro">
        <tr>
          <td id="text">
            <p>
              {{ intro }}
              <br/>
              <br/>
              {{ details }}
              <br/>
              <br/>
            </p>
          </td>
          <td class="image">
            <figure>
              <img
                :src="require(`@/assets/PoI_images/${img}`)"
                :alt="name+ ' detail'"
              />
              <br/>
              <br/>
              <figcaption style="text-align:center; font-style: italic">{{ img_caption }}</figcaption>
            </figure>
          </td>
        </tr>
      </table>
      <br>
      <table>
        <tr v-if="address!==null">
          <p id="text">
            <field id="info">Address</field>
            <br>
            {{ address }}
          </p>
        </tr>
        <tr v-if="opening_hours!==null">
          <p id="text">
            <field id="info">Opening hours</field> 
            <br>
            {{ opening_hours }}
          </p>
        </tr>
        <tr v-if="fee!==null">
          <p id="text">
            <field id="info">Fee</field> 
            <br>
            €{{ fee }}
          </p>
        </tr>
      </table>

      <table class="events-table">
        <tr>
          <h2>Events related to this point of interest</h2>
          <br/>
          <br/>
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
                :img-name="event.thumbnail"
                :date="event.date"
                :intro="event.intro"
              />
            </td>
          </transition-group>
        </tr>
      </table>

      <table class="itineraries-table">
        <tr>
          <h2>Visit through these itineraries</h2>
          <br/>
          <br/>
        </tr>
        <tr>
          <transition-group name="fade">
            <td v-for="itinerary of itineraries" :key="itinerary.id">
              <round-image-card
                :id="itinerary.id"
                :title="itinerary.name"
                :description="itinerary.short_description"
                :cover-img="require(`@/assets/Itinerary_thumbnail/${itinerary.thumbnail}`)"
                :url="'/itinerary/' + itinerary.id"
              />
            </td
            >
          </transition-group>
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
   head() {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the details about the point of interest '+ this.name
        }
      ]
    }
  },
  async asyncData({route, $axios}) {
    const {id} = route.params
    const {data} = await $axios.get('/api/points-of-interest/' + id)
    const poI = data
    return {
      name: poI.name,
      cover_img: poI.cover_img,
      img: poI.img,
      img_caption: poI.img_caption,
      intro: poI.intro,
      details: poI.details,
      id: poI.id,
      address: poI.address,
      opening_hours: poI.opening_hours,
      fee: poI.fee,
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

.poi-intro td {
  display: inline-block;
  width: 50%;
}

#text {
  /* padding-left: 3%; */
  /* padding-right: 10%; */
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.image {
  padding-left: 6%;
  width: 100%
}

#info {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #D8EFF5;
}

.events-table {
  width: 100%;
  overflow-x: auto;
  margin: 7rem auto auto;
}

.events-table tr {
  margin: auto;
  text-align: left;
}

.events-table td {
  display: inline-block;
}

img {
  max-width: 100%;
}

.itineraries-table {
  width: 100%;
  overflow-x: auto;
  margin: 9rem auto auto;
}

.itineraries-table tr {
  margin: auto;
  text-align: left;
}

.itineraries-table td {
  display: inline-block;
}

@media all and (max-width: 500px) {
  .poi-intro td {
    width: 100%;
  }
  .image {
    padding-left: 0;
  }
}
</style>
