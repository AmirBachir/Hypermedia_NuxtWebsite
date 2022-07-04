<template>
  <div class="container">
    <intro-pages-cover img-name="events-intro.png"/>
    <h1>Events</h1>
    <arrow-down id="arrow-down" @click.native="toContent"/>
    <br><br>
    <h3>Amazing Experiences</h3>
    <p id="intro">Discover all of the incredible experiences and moments that Brescia has to offer.</p>
    <br/>
    <div id="filters">
      <button @click="setFilter('all')" :class="filter==='all'?'selected':''">All events</button>
      <button @click="setFilter('winter')" :class="filter==='winter'?'selected':''">Winter events</button>
      <button @click="setFilter('summer')" :class="filter==='summer'?'selected':''">Summer events</button>
    </div>

    <hr>

    <table class="events-table">
      <tr>
        <transition-group name="fade">
          <td v-for="event of filteredEvents" :key="event.id">
            <event-card
              :id="event.id"
              :intro="event.intro"
              :type="event.type"
              :name="event.title"
              :poi="event.pointOfInterest.name"
              :time="'H ' + event.time.slice(0, -3)"
              :img-name="event.thumbnail"
              :date="event.date"
            />
          </td>
        </transition-group>
      </tr>
    </table>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'

export default {
  name: 'EventsPage',
   head() {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the available events in Brescia for this year'
        }
      ]
    }
  },
  components: {
    EventCard,
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
      param: this.$route.query.filter,
      eventList: [],
    }
  },

  mounted() {
    const menuItems = document.querySelectorAll('.nav-link')
    menuItems[4].classList.add('current-topic')
  },
  computed: {
    filteredEvents() {
      let result
      if (this.filter !== 'all' && this.filter !== undefined) {
        result = this.eventList.filter((event) => event.season === this.filter)
      } else {
        result = this.eventList
      }
      return result
    },
    filter() {
      if (this.$route.query.filter === undefined)
        return 'all'
      return this.$route.query.filter
    }
  },
  methods: {
    setFilter(f) {
      this.$router.push({path: '/events', query: {filter: f}})
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Casual';
  src: local('~/assets/Casual-Regular.ttf');
}

img {
  max-width: 100%;
  padding: 10px;
}

h1 {
  font-family: 'Casual', serif;
}

p {
  font-family: Inter, serif;
  font-weight: 100;
}

button {
  display: inline-block;
  min-width: 20%;
  margin: auto 2% auto auto;
  padding: 1% 1.5% 1% 1.5%;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
}

#intro {
  font-family: Inter, serif;
  font-weight: 100;
  width: 100%;
  max-width: 500px;
  text-align: justify;
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

#filters {
  position: sticky;
  top: 70px;
  padding-top: 8px;
  background: #234c60;
  z-index: 1;
  padding-bottom: 20px;
  text-align: center;
}

.selected {
  background: #d8eff5;
  color: #234c60;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
