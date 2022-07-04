<template>
<a :href="'/event/' + id">
  <div class="card" id="card">
    <p id="date-day">{{ day }}</p>
    <p id="date-month-year">{{ month }} {{ year }}</p>
    <img :src="require(`@/assets/Event_thumbnail/${imgName}`)" class="card-img-top" :alt="name+' image'"/>
    <div id="card-body">
      <!-- <p id="card-subtitle">{{ time }}</p> -->
      <p id="point-of-interest">{{ poi }}</p>
      <div id="title-container">
        <h5 id="card-title" style="">{{ name }}</h5>
      </div>
      <hr>
      <p id="card-subtitle">{{ eventType }}</p>
      <p id="intro">{{ intro }}</p>
    </div>
  </div>
  </a>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    poi: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
  },

  computed: {
    day() {
      return this.date.split('-')[2].replace("0", "")
    },
    month() {
      switch (this.date.split('-')[1]) {
        case '01':
          return 'Jan'
        case '02':
          return 'Feb'
        case '03':
          return 'Mar'
        case '04':
          return 'Apr'
        case '05':
          return 'May'
        case '06':
          return 'Jun'
        case '07':
          return 'Jul'
        case '08':
          return 'Aug'
        case '09':
          return 'Sep'
        case '10':
          return 'Oct'
        case '11':
          return 'Nov'
        case '12':
          return 'Dec'
        default:
          return 'Month'
      }
    },
    year() {
      return this.date.split('-')[0]
    },
    eventType() {
      return this.type.toUpperCase()
    },
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
p {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: left;
  color: #d8eff5;
}

img {
  object-fit: cover;
  max-height: 20vh;
}

#card {
  width: 15rem;
  height: 32.7rem;
  background: transparent;
  margin: 0 0 0.6rem 0.6rem;
  border-width: 1px;
  border-color: #d8eff5;
}

#card:hover {
  cursor: pointer;
  background: #103749;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;

}

#date-day {
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 60px;
  font-weight: 700;
}

#date-month-year {
  margin-left: 1rem;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
}

#card-body {
  margin: 0.5rem;
  text-align: center;
  overflow: hidden;
}

#title-container {
  height: 60px;
  display: table;
  width: 100%;
}

#card-title {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-top: 0.3rem;
  color: #d8eff5;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

#card-subtitle {
  font-weight: 500;
  text-align: center;
}

#point-of-interest {
  font-size: small;
  text-align: center;
}

#intro {
  margin-top: 1rem;
  text-align: center !important;
}
</style>
