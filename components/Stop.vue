<template>
      <div class="card mb-3" style="max-width: 1000px; margin:auto;">
      <nuxt-link :to="'/points-of-interest/'+ poi.id" class="row align-items-center g-0">
        <div class="col-md-3">
          <div class="card-body">
          <p class="stp">Stop <span>{{k + 1 }}</span></p>
          <h5 class="card-title">
            {{ poi.name }}
          </h5>
          </div>
        </div>
        <div class="col-md-2">
          <div class="double-arrow"><img src="~/assets/Line 1.png"
                                      alt="connection arrow between point of interest name and img" class="img-fluid"/></div>
        </div>
        <div class="col-md-7 p-3">
          <img :src="require(`@/assets/PoI_thumbnail/${poi.thumbnail}`)" :alt="'The point of interest: '+ poi.name + ' image'" class="img-fluid rounded">
        </div>
      </nuxt-link>
      </div>
</template>

<script>
export default {
  name: 'TheStop',
  props: {
    poi: {
      type: Object,
      required: true
    },
    k: {
      type: Number,
      required: true,

    }
  },
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}
.card, .card *{
  background: none;
  color:rgb(216, 239, 245);
  text-decoration:none;
}
.card{
  padding:0.2rem;
  border-color: rgb(216, 239, 245);
}
.card:hover{
  cursor:pointer;
  background-color: rgba(16, 55, 73, 0.7);
}
.card:hover .card-title{
  font-weight: bold;
}

@media all and (max-width: 768px) {
.col-md-2{
    display: none;
  }
  .stop {
    height: 30vh;
    width: 100%;
    margin-right: 0;
  }
}
@media all and (max-width: 800px) {
  .card{
    max-width: 75vw !important;
  }
}
</style>
