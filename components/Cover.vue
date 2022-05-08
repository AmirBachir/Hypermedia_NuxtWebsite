<template>
  <div class="cover">
    <img class="bg" :src="require(`@/assets/${image}`)" :alt="title" />
    <h1 class="display-1 name">{{ title }}</h1>
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
  },
}
</script>

<style>
@font-face {
  font-family: "Casual";
  src: local("~/assets/Casual-Regular.ttf");
}

.cover {
  position: relative;
  text-align: center;
}

.bg {
  width: 100%;
  height: 40rem;
}

.name{
  position: absolute;
  bottom: 6rem;
  left: 3rem;
  color: #d8eff5;
  font-family: 'Casual', serif;
  font-style: normal;
  /* font-weight: 400;
  font-size: 54px;
  line-height: 65px; */
}
</style>
