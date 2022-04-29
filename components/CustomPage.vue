<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4">{{ title }}</h1>
      <img :src="image" alt="" />
      <hr class="my-4" />
      <p class="lead">{{ description }}</p>
    </div>
    <topic-card />
    <br />
    <event-card
      date="5-May-2022"
      img-path="~/assets/brescia_poi.jpg"
      time="H 9.30"
      poi="Duomo"
      name="Giga party"
      type="Music and entertainment"
      description="The big party is going to be lit, come and enjoy neomelodical singers from Naples fill your ears with pleasurable sounds!"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
img {
  height: 300px;
  margin: 20px 0;
}
.page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
p {
  text-align: left;
}
</style>
