<template>
  <div class="container">
    <div style="text-align:end">
      <img class="intro-img" src="~/assets/events-intro.png" alt="events image"/>
    </div>
    <h1>Events</h1>
    <p>&lt; Back</p>
    <button>All events</button>
    <button>Winter events</button>
    <button>Summer events</button>
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5"/>
    </svg>
    <table class="events-table">
      <tr>
        <td v-for="(event) of eventList" :key="event.id">
          <event-card :description="event.description" :type="event.type" :name="event.title" :poi="event.poi"
                      :time="'H ' + event.time.slice(0, -3)" :img-name="event.cover_img" :date="event.date"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import EventCard from "~/components/EventCard";

export default {
  name: 'IndexPage',
  components: {
    EventCard
    //    CustomPage,
  },
  data() {
    return {
      eventList: []
    }
  },

  // Note: This happens on backend (server) side
  async asyncData({$axios}) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const {data} = await $axios.get('/api/events/all')
    return {
      eventList: data,
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

p {
  font-family: Inter, serif;
  font-weight: 100;
}

button {
  display: inline-block;
  margin: auto 2% auto auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  background: #234c60;
  color: #d8fff5;
  border-color: #d8fff5;
}

button:hover {
  background: #103749;
}

a {
  color: #d8fff5;
}

.intro-img {
  margin-right: 0;
}

.arrow-down {
  display: block;
  margin: 50px auto 50px;
}

.events-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

.events-table tr {
  margin: auto;
  text-align: center;
}

.events-table td {
  display: inline-block;
}

</style>
