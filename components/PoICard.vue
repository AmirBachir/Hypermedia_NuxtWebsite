<template>
  <div class="point-card" @click="$router.push('/points-of-interest/' + poi.id)">
    <img :src="require(`@/assets/` + poi.cover_img)" :alt="poi.name"/>
    <p>{{ poi.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PointOfInterestCard',
  props: {
    poi: {
      type: Object,
      required: true,
    },
  },

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

img {
  /* object-fit: cover; */
  /* display: inline-block; */
  /* max-width: 500px; */
  width: 100%;
  max-width: 400px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  /* margin: 0.5rem 0 0 0; */
  /* padding-bottom: 0.4rem; */
}

p {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.point-card {
  /* background: transparent; */
  /* width: 15rem; */
  text-align: center;
  color: #d8eff5;
  border-radius: 20px;
  /* margin: 0.3rem; */
  padding: 0.6rem;
  margin-bottom: 10px;
  /* border: none; */
}

.point-card:hover {
  cursor: pointer;
  background-color: #103749;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

</style>
