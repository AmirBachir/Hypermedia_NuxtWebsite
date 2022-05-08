<template>
  <div class="container">
    <div style="text-align:end">
      <img class="intro-img" src="~/assets/events-intro.png" alt="events image"/>
    </div>
    <h1>Events</h1>
    <p>&lt; Back</p>
    <button @click="setFilter('all')">All events</button>
    <button @click="setFilter('winter')">Winter events</button>
    <button @click="setFilter('summer')">Summer events</button>
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
        <transition-group name="fade">
          <td v-for="(event) of filteredEvents" :key="event.id">
            <event-card :id="event.id" :description="event.description" :type="event.type" :name="event.title" :poi="event.poi"
                        :time="'H ' + event.time.slice(0, -3)" :img-name="event.cover_img" :date="event.date"/>
          </td>
        </transition-group>
      </tr>
    </table>
  </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import EventCard from "~/components/EventCard";

export default {
  name: 'EventsPage',
  components: {
    EventCard
  },
  // Note: This happens on backend (server) side
  async asyncData({$axios}) {
    // const { data } = await $axios.get('http://localhost:3000/api/events/all')
    const {data} = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  data() {
    return {
      filter: 'all',
      eventList: []
    }
  },
  computed: {
    filteredEvents() {
      let result
      if (this.filter !== 'all') {
        result = this.eventList.filter(event => event.season === this.filter)
      } else {
        result = this.eventList
      }
      return result
    },
  },
  methods: {
    setFilter(filter) {
      this.filter = filter
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
  min-width: 20%;
  margin: auto 2% auto auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
}

button:hover {
  background: #d8eff5;
  color: #234c60;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

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

/* ANIMATIONS AND TRANSITIONS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
