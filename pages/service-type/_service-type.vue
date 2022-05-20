<template>
  <div class="pointofinterest">
    <p>Heyo</p>
  </div>
</template>

<script>
export default {
  name: 'PointOfInterestPage',
  components: {
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/service-type/' + id)
    const poI = data
    return {
      name: poI.name,
      cover_img: poI.cover_img,
      img: poI.img,
      img_caption: poI.img_caption,
      intro: poI.intro,
      details: poI.details,
      id: poI.id,
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

.text {
  /* padding-left: 3%; */
  /* padding-right: 10%; */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.image {
  padding-left: 13%;
}

.events-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
  margin-top: 9rem;
}
.events-table tr {
  margin: auto;
  text-align: left;
}

.events-table td {
  display: inline-block;
}

.h2 {
  text-align: left;
}

img {
  max-width: 100%;
}

.itineraries-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
  margin-top: 9rem;
}
.itineraries-table tr {
  margin: auto;
  text-align: left;
}

.itineraries-table td {
  display: inline-block;
}
</style>
