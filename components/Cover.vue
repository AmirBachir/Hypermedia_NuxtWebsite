<template>
  <div id="cover">
    <!-- <img id="cover-img" :src="require(`@/assets/${image}`)" :alt="title" /> -->
    <img id="cover-img" :src="image" :alt="title" />
    <div id="name">
      <h1 class="display-1">{{ title }}</h1>
      <div v-if="crumb !== ''" class="crumb">
        <nuxt-link :to="'/' + crumbLink">{{ crumb }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    crumb: {
      type: String,
      required: false,
      default: '',
    },
    crumbLink: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'Casual';
  src: local('~/assets/Casual-Regular.ttf');
}

.crumb {
  text-align: left;
}

.crumb * {
  text-decoration: none;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  color: #d8eff5;
  font-size: 30px;
}

#cover {
  position: relative;
  text-align: center;
  width: 100%;
  min-height: 500px;
}

#cover-img {
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: brightness(50%); */
  z-index: 0;
}

#name {
  position: absolute;
  color: #d8eff5;
  font-family: 'Casual', serif;
  font-style: normal;
  text-shadow: 0 0 50px black;
  bottom: 0;
  padding: 2%;
  /* font-weight: 400;
  font-size: 54px;
  line-height: 65px; */
  z-index: 1;
}
</style>
