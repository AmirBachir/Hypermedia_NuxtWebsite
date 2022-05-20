<template>
  <div class="container">
    <div style="text-align:end">
      <img class="intro-img" src="~/assets/service-type-intro.png" alt="service types image"/>
    </div>
    <h1>Service Types</h1>
    <p>&lt; Back</p>
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5"/>
    </svg>
    <h3>All in one place</h3>
    <p>Brescia is happy to welcome all of its visitors with all the available services. Enjoy!</p>
    <br /><br />
    <table class="service-type-table">
      <tr>
        <td v-for="(serviceType) of stList" :key="serviceType.id">
          <service-type-card :id="serviceType.id" :name="serviceType.name" :cover-img="serviceType.cover_img"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import ServiceTypeCard from "~/components/ServiceTypeCard";

export default {
  name: 'ServiceTypesPage',
  components: {
    ServiceTypeCard
  },
  // Note: This happens on backend (server) side
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/service-types')
    return {
      stList: data,
    }
  },
  data() {
    return {
      stList: []
    }
  },
}

</script>

<style scoped>

@font-face {
  font-family: "Casual";
  src: local("~/assets/Casual-Regular.ttf");
}

img {
  max-width: 100%;
  padding: 10px;
}

h1 {
  font-family: "Casual", serif;
}

p {
  font-family: Inter, serif;
  font-weight: 100;
  max-width: 600px;
}

button {
  display: inline-block;
  min-width: 20%;
  margin: auto 2% auto auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
}

button:hover {
  background: #d8eff5;
  color: #234c60;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

a {
  color: #d8eff5;
}

.intro-img {
  margin-right: 0;
}

.arrow-down {
  display: block;
  margin: 50px auto 50px;
}

.service-type-table {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

.service-type-table tr {
  margin: auto;
  text-align: center;
}

.service-type-table td {
  display: inline-block;
}

/* ANIMATIONS AND TRANSITIONS */

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
