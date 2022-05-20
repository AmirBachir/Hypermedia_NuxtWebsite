<template>
  <div>
    <cover-component :title="title" :image="cover_img" crumb="Events" crumbLink="events"/>
    <div class="container">
      <table class="info">
        <tr>
          <td>
            <p>{{ description }}</p>
          </td>
          <td>
            <div class="info-box">
              <b>Information about the event</b>
              <p>{{ type }}</p>
              <br/>
              <p>Date: {{ date }}</p>
              <p>Time: {{ time }}</p>
              <br/>
              <p>Venue: {{ poi.name }}</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <table class="image-carousel">
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
    </table>
    <div class="container">
      <br/><br/><br/><br/>
      <h3>Discover more about this venue:</h3>
      <br/><br/>
      <img :src="poi.img" alt="">
      <p>{{ poi.name }}</p>
    </div>
  </div>
</template>

<script>
import CoverComponent from "~/components/Cover";

export default {
  name: "EventPage",
  components: {CoverComponent},
  async asyncData({route, $axios}) {
    const id = route.params.event
    const {data} = await $axios.get('/api/event/' + id)
    console.log(data)
    return {
      date: data.date,
      cover_img: data.cover_img,
      time: data.time,
      poi: data.pointOfInterest,
      title: data.title,
      type: data.type,
      description: data.description,
      season: data.season
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

.container {
  margin-top: 70px;
}

.info td {
  width: 50%;
  padding: 40px;
}

.info-box {
  display: inline-block;
  background: #d8eff5;
  color: #234c60;
  border-radius: 20px;
  padding: 8%;
  min-width: 60vh;
}

.info-box p {
  text-align: left;
}

.image-carousel {
  margin-top: 50px;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

.image-carousel tr {
  width: 100%;
}

.image-carousel td {
  display: inline-block;
  overflow: auto;
}

.image-carousel img {
  height: 45vh;
  overflow: auto
}

</style>
