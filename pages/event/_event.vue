<template>
  <div>
    <cover-component :title="title" :image="cover_img"/>
    <div class="container">
      <table>
        <tr>
          <td>
            <p>{{ description }}</p>
          </td>
          <td>
            <div class="info-box">
              <b>Information about the event</b>
              <p>Date: {{ date }}</p>
              <p>Time: {{ time }}</p>
              <p>Venue: {{ poi }}</p>
              <p>{{ type }}</p>
            </div>
          </td>
        </tr>
      </table>
      <button @click="backToEvents">All events</button>
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
    return {
      date: data.date,
      cover_img: data.cover_img,
      time: data.time,
      poi: data.poi,
      title: data.title,
      type: data.type,
      description: data.description,
      season: data.season
    }
  },
  methods: {
    backToEvents() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>

.container {
  margin-top: 70px;
}

td {
  width: 50%;
  padding: 40px;
}

.info-box {
  display: inline-block;
  background: #d8eff5;
  color: #234c60;
  border-radius: 20px;
  padding: 10%;
}

.info-box p {
  text-align: left;
}

</style>
