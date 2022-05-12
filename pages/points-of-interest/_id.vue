<template>
  <!-- <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ name }}</h1>
        <b>Breed:</b>
        <p class="lead">
          {{ breed }}
        </p>
        <b>Description:</b>
        <p class="lead">
          {{ description }}
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            Back to list
          </button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" :src="img" alt="" width="" />
      </div>
    </div>
  </div> -->
  <div class="pointofinterest">
    <cover :title="name" :image="cover_img" />

    <table class="container poi-intro">
      <div class="row">
        <div class="col text">
          <p>
            {{ intro }}
            <br />
            <br />
            {{ details }}
            <br />
            <br />
          </p>
        </div>
        <div class="col image">
          <img :src="require(`@/assets/${img}`)" alt="point of interest detail" />
          <br />
          <br />
          <figcaption>{{ img_caption }}</figcaption>
        </div>
      </div>
    </table>
  </div>
</template>

<script>
import Cover from '~/components/Cover.vue'
export default {
  name: 'PointOfInterestPage',
  components: {
    Cover,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/points-of-interest/' + id)
    return {
      name: data.name,
      cover_img: data.cover_img,
      img: data.img,
      img_caption: data.img_caption,
      intro: data.intro,
      details: data.details,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>
 

 <style scoped>
* {
  color: #d8eff5;
}

.poi-intro {
  margin-top: 8rem;
}

.text {
  /* padding-left: 3%; */
  /* padding-right: 10%; */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
}

.image {
  padding-left: 13%;
  /* text-align: center; */
}
</style>