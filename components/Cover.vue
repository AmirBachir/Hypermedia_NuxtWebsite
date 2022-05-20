<template>
  <div class="cover">
    <img class="bg" :src="require(`@/assets/${image}`)" :alt="title" />
    <div class="name">
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
.crumb{
  text-align: left;
}
.crumb * {
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  color: #d8eff5;
  font-size: 30px;
}

.cover {
  position: relative;
  text-align: center;
}

.bg {
  width: 100%;
  height: 30em;
  filter: brightness(100%);
}

.name {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  color: #d8eff5;
  font-family: 'Casual', serif;
  font-style: normal;
  text-shadow: 0 0 50px black;
  /* font-weight: 400;
  font-size: 54px;
  line-height: 65px; */
}
</style>
