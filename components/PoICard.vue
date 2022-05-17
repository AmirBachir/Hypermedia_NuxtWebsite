<template>
  <div>
    <img :src="require(`@/assets/` + poi.cover_img)" :alt="poi.name" />
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
  mounted() {
    console.log(this.poi)
  },
}
</script>

<style scoped>
img {
  max-width: 500px;
  width: 95%;
  height: 200px;
  margin-top: 0.5rem;
}
p {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
div {
  text-align: center;

  color: white;
  margin: 0.3rem;
  padding-bottom: 0.4rem;
}

div:hover {
  background-color: rgb(216, 239, 245, 0.2);
  cursor: pointer;
 
}

</style>
