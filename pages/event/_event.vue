<template>
  <div>
    <cover-component :title="title" :image="require(`@/assets/Cover_Event/${cover_img}`)" crumb="Events" crumbLink="events"/>
    <div class="container">
      <table id="info-table">
        <tr>
          <td>
            <p class="description">{{ description }}</p>
          </td>
          <td>
            <div id="info-box">
              <b>Information about the event</b>
              <p>{{ type }}</p>
              <br/>
              <p>Date: {{ date }}</p>
              <p>Time: {{ time }}</p>
              <p v-if="fee!==0">
            Fee: €{{ fee }}</p>
             <p v-else>
            Fee: free</p>
              <br/>
              <p>Venue: <a :href="'/points-of-interest/' +  poi.id">{{ poi.name }}</a></p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <!-- <table id="image-carousel">
      <tr>
        <td>
          <img src="~/assets/concert-1.jpeg" alt="">
        </td>
        <td>
          <img src="~/assets/concert-2.jpeg" alt="">
        </td>
        <td>
          <img src="~/assets/concert-3.jpeg" alt="">
        </td>
        <td>
          <img src="~/assets/brescia_ser.jpg" alt="">
        </td>
        <td>
          <img src="~/assets/brescia_poi.jpg" alt="">
        </td>
        <td>
          <img src="~/assets/brescia_poi.jpg" alt="">
        </td>
      </tr>
    </table> -->
    <img class="mid_img" :src="require(`@/assets/Event_image/${event_img}`)" alt="">

    <div class="container">
      <br/><br/><br/><br/>
      <h3>Discover more about this venue:</h3>
      <br/><br/>
      <po-i-card  :poi="poi"/>
    </div>
  </div>
</template>

<script>
import CoverComponent from "~/components/Cover";

export default {
  name: "EventPage",
  components: {CoverComponent},
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the details about the event '+ this.title
        }
      ]
    }
  },
  async asyncData({route, $axios}) {
    const id = route.params.event
    const {data} = await $axios.get('/api/event/' + id)
    return {
      date: data.date,
      cover_img: data.cover_img,
      event_img:data.event_img,
      time: data.time.slice(0, -3),
      poi: data.pointOfInterest,
      title: data.title,
      type: data.type,
      description: data.description,
      season: data.season,
      fee: data.fee
    }
  },
  methods: {
    goToEvents() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
.description {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.container {
  margin-top: 70px;
}

#info-table {
  width: 100%;
  overflow-x: auto;
}

#info-table td {
  display: inline-block;
  width: 50%;
  padding: 40px;
}

#info-box {
  display: inline-block;
  background: #d8eff5;
  color: #234c60;
  border-radius: 20px;
  padding: 7% 12% 7% 12%;
  width: 100%;
  max-width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
}

#info-box p {
  text-align: left;
}

#image-carousel {
  margin-top: 50px;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

#image-carousel tr {
  width: 100%;
}

#image-carousel td {
  display: inline-block;
  overflow: auto;
}

#image-carousel img {
  height: 45vh;
  overflow: auto
}

a {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 600;
  text-decoration-line: underline;
  color: #234c60;
}

@media all and (max-width: 500px) {
  #info-table td {
    width: 100%;
  }
}

.mid_img {

width: 100%;

}

</style>
