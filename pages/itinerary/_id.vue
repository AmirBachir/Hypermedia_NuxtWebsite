<template>
  <div>
    <cover
      :title="name"
      :image="cover_img"
      crumb="Itineraries"
      crumbLink="itineraries"
    />
    <div class="add-info">
      <div v-if="duration" class="info">
        Duration: {{ duration / 60 }} hours
      </div>
      <div v-if="category" class="info">Category: {{ category }}</div>
      <div v-if="inout" class="info">Environment: {{inout}}</div>
    </div>
    <div class="overview">
      <h4>Overview</h4>
      <p>{{short_description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItinerayDetail',
  async asyncData({ route, $axios }) {
    const id = route.params.id
    const { data } = await $axios.get('/api/itinerary/' + id)
    console.log(data)
    return {
      name: data.name,
      cover_img: data.cover_img,
      short_description: data.short_description,
      thumbnail: data.thumbnail,
      title: data.title,
      inout: data.inout,
      category: data.category,
      duration: data.duration,
      pois: data.pointOfInterests,
    }
  },
}
</script>

<style scoped>
.add-info {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 5rem auto;
}
.info {
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #d8eff5;
}
.info + .info {
  margin-left: 3rem;
}
.overview{
  width:45%;
  margin-left: 5vw;
}
.overview h4{
  margin-bottom:2rem
}
</style>
