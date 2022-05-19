<template>
  <div class="card">
    <div class="container">

      <img
        :src="require(`@/assets/${imgName}`)"
        class=" card-img-top icon"
        alt="image"
      />
    </div>
    <div class="card-body" style="margin: 0.5rem">
      <h5 class="card-title title">{{ name }}</h5>

      <p class="card-text description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItineraryCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  width: 15rem;
  padding: 0.5rem;
  background: inherit;
  border-radius: 45px;
  border-width: 0;
  margin: 0.2rem;
}
.card:hover {
  cursor: pointer;
  background: #103749;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;

}

.description {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
}

.title {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
}
</style>
