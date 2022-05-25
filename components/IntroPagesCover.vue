<template>
  <div>
    <img
      id="intro-img"
      :src="require(`@/assets/${imgName}`)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "IntroPagesCover",
  props: {
    imgName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  text-align: right;
  padding: 20px;
}

#intro-img {
  object-fit: contain;
  height: 23rem;
  max-width: 100%;
}
</style>
