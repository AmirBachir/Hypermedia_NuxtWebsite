<template>
  <div>
    <div class="row row-cols-1 row-cols-md-2 ms-2 me-2 g-4 cover" style="margin-top:0">
      <div class="col title">
        <div class="card h-100">
        <h1>{{type}}</h1>
        <nuxt-link to="/service-types">Service types</nuxt-link>
        </div>
      </div>
      <div class="col">
        <div class="card">
        <round-image-card :id="typeId" :coverImg="typeCoverImg"></round-image-card>
        </div>
      </div>
    </div>
    <div class="arrow-down">
    <svg
        class="arrow-down"
        width="79"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5"/>
    </svg>
    </div>
    <div class="row row-cols-1 row-cols-md-3 ms-2 me-2 g-4 list">
      <div v-for="(e, key) of l" :key="key" class="col">
        <div class="card h-100">
          <h4 style="text-decoration:underline">{{e.name}}</h4>
          <h6 class="sub text-muted fw-bold">Opening hours</h6>
          <!-- <p>{{e.openHours}}</p> --><p>needs to be set in the initialize</p>
          <h6 class="sub text-muted fw-bold">Address</h6>
          <p>{{e.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImageCard from '~/components/RoundImageCard.vue'
export default {
  name: 'serviceTypePage',
  components: {
    RoundImageCard
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
}
</script>


<style scoped>
* {
  box-sizing: border-box;
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
.cover a{
  text-decoration: inherit;
  color: inherit;
  margin-top: 10px;
}
.cover a:hover{
  text-decoration:underline;
}
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

</style>
