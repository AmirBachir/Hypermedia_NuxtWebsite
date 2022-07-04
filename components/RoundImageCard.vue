<template>
<a :href="url">
  <div class="card">
    <div id="cover-container">
      <div id="outer-circle"></div>
      <div id="inner-circle"></div>
      <img id="service-img" :src="coverImg" :alt="title+' icon'"/>
    </div>
    <div v-if="title !== undefined" id="card-body">
      <h5 id="card-title">{{ title }}</h5>
      <hr v-if="description !== undefined"/>
      <p id="card-text">{{ description }}</p>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: 'RoundImageCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    coverImg: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
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

hr {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.card {
  width: 200px;
  background: transparent;
  border: none;
  margin: 20px;
  text-align: center; /*it propagates to all children elements*/
}

.card:hover {
  cursor: pointer;
}

#cover-container {
  height: 200px;
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
  top: 0;
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
  margin: 30px auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

#service-img {
  position: relative;
  object-fit: contain;
  width: 180px;
  height: 180px;
  z-index: 2;
}

#card-body {
  min-height: 100px;
  max-height: 500px;
  margin: 1rem 0 1rem 0;
}

#card-title {
  height: 55px;
}

#card-text {

}

.card:hover #outer-circle {
  background: #59FFF5;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}
</style>
