<template>
  <!-- <div class="card">
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
  </div> -->
  <div class="card" @click="$router.push('/itinerary/' + id)">
    <div>
      <div id="outer-circle"></div>
      <div id="inner-circle"></div>
      <img id="service-img" :src="require(`@/assets/${imgName}`)" alt="image"/>
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
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
    id: {
      type: Number,
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
/* .card {
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
} */

h5 {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-top: 0.3rem;
  color: #d8eff5;
  text-transform: capitalize;
}

.card {
  width: 200px;
  height:24rem;
  background: transparent;
  border: none;
  margin: 20px;
}

.card:hover {
  cursor: pointer;
}

/*.card:hover {
  cursor: pointer;
  background: #103749;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s
}*/

.card-body {
  margin: 2rem 0 2rem 0;
}

#img-container {
  width: 200px;
}

#outer-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  shape-outside: circle();
  clip-path: circle();
  background: lightblue;
  margin: 0 auto auto;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 0;
}

#inner-circle {
  position: absolute;
  width: 140px;
  height: 140px;
  shape-outside: circle();
  clip-path: circle();
  background: #234c60;
  margin: 15% auto auto;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

#service-img {
  position: relative;
  object-fit: contain;
  max-height: 20vh;
  z-index: 2;
}

.card:hover #outer-circle {
  background: #59FFF5;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s ;
  -o-transition: all 0.5s ;
  -ms-transition: all 0.5s ;
  transition: all 0.5s ;
}

.description {
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
}
</style>
