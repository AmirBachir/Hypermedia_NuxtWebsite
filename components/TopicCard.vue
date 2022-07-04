<template>
<a :href="url">
  <div class="card">
    <div class="container"><img
      :src="require(`@/assets/${imgPath}`)"
      class="card-img-top circular-border"
      :alt="title + ' image'"
    />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: 'TopicCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type:String,
      required: true,
    }
  },
  
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.circular-border {
  margin: 0.5rem auto auto;
  border-radius: 50%;
  border: 20px solid #d8eff5;
  width: 70%;
}
.card:hover {
  cursor: pointer;
}
.card:hover  .circular-border{
  border-color: #59FFF5;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s ;
  -o-transition: all 0.5s ;
  -ms-transition: all 0.5s ;
  transition: all 0.5s ;
}
h5 {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #d8eff5;
}

p {
  display: inline;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: center;
  color: #d8eff5;
}

.card {
  width: 15rem;
  padding: 0.5rem;
  background: inherit;
  border-radius: 5%;
  border-width: 0;
  margin: 0.2rem;
}
.card-title{
  height:3rem;
}

</style>
