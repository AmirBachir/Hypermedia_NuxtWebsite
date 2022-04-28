<template>
  <div class="card" style="width: 15rem; background: #103749; margin: 0.2rem">
    <p class="date-day">{{ day }}</p>
    <p class="date-month-year">{{ month }} {{ year }}</p>
    <img :src="imgPath" class="card-img-top" alt="image" />
    <div class="card-body" style="margin: 0.5rem">
      <p class="card-subtitle">{{ time }}</p>
      <p class="card-text point-of-interest">{{ poi }}</p>
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-subtitle">{{ type }}</p>
      <p class="card-text description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    date: {
      type: String,
      required: true,
    },
    imgPath: {
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
      required:true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  computed: {
    day() {
      return this.date.split("-")[0]
    },
    month() {
      return this.date.split("-")[1]
    },
    year() {
      return this.date.split("-")[2]
    }
  },
}
</script>

<style scoped>
h5 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 29px;
  text-align: left;
  margin-top: 0.3rem;
  color: #d8fff5;
}

p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: left;
  color: #d8fff5;
}

img {
  object-fit: cover;
  max-height: 20vh;
}

.date-day {
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 60px;
  font-weight: 700;
}

.date-month-year {
  margin-left: 1rem;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
}

.point-of-interest {
  text-transform: uppercase;
}

.description {
  margin-top: 1rem;
}
</style>