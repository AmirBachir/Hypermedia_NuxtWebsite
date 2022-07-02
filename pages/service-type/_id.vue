<template>
  <div>
    <div class="row row-cols-1 row-cols-md-2 ms-10 me-10 g-4 cover" style="margin:0px 10em 0px 10em">
      <div class="col title">
        <div class="card h-100">
        <h1 class="display-2">{{type}}</h1>
        <div class="crumb">
        <nuxt-link to="/service-types">Service Types</nuxt-link>
        </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
        <!-- <round-image-card :id="typeId" :coverImg="typeCoverImg"></round-image-card> -->
        <img :src="require(`@/assets/Service_Types/${typeCoverImg}`)" :alt="type+ ' Icon'" />
        </div>
      </div>
    </div>
    <arrow-down id="arrow-down" @click.native="toContent"/>
    <div class="row row-cols-1 row-cols-md-3 ms-2 me-2 g-4 list">
      <div v-for="(e, key) of l" :key="key" class="col">
        <div class="card h-100">
          <h4 style="font-weight: 700; text-align:center">{{e.name}}</h4>
          <hr>
          <h6 class="sub fw-bold">Opening hours</h6>
          <p>{{e.opening_hours}}</p>
          <h6 class="sub fw-bold">Address</h6>
          <p>{{e.address}}</p>
          <h6 class="sub fw-bold">Phone</h6>
          <p>+39 {{e.phone_number}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import RoundImageCard from '~/components/RoundImageCard.vue'
export default {
  name: 'serviceTypePage',
  // components: {
  //   RoundImageCard
  // },
   head() {
    return {
      title: this.type,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains all the information about the '+ this.type +' in Brescia'
        }
      ]
    }
  },
  async asyncData({ route, $axios }) {
    const {id}  = route.params
    const { data } = await $axios.get('/api/service-type/' + id)
    const list = data
    return {
      type: list[0].serviceType.name,
      typeId: list[0].serviceType.id,
      typeCoverImg: list[0].serviceType.cover_img,
      l: list,
    }
  },
  methods: {
    toContent() {
      const arrow = document.getElementById('arrow-down')
      console.log('toContent called')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  }
}
</script>


<style scoped>
* {
  box-sizing: border-box;
}
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
  font-size: 26px;
  border-bottom: solid 1px rgba(216, 239, 245, 0.5);
}

.crumb:hover * {
  border-bottom: solid 2px rgba(216, 239, 245, 1);
}
h1 {
  font-family: 'Casual', serif;
  margin-bottom: 3rem;
}
.card{
  background: none;
  border: none;
}
.cover *{
  margin:auto;
}
/* .cover a{
  text-decoration: inherit;
  color: inherit;
  margin-top: 10px;
}
.cover a:hover{
  text-decoration:underline;
} */
.list .card{
  padding:1rem;
  border-radius: .25rem;
  border-width: 1px;
  border-color: #d8eff5;
  border-style: solid;
}
.arrow-down{
  text-align:center;
  margin:30px;
}
@media all and (max-width:768px){
  .title{
    margin-bottom:30px;
  }
  .cover{
    margin:0px !important;
  }
}
</style>
