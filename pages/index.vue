<template>
  <div class="homepage">
    <img src="~/assets/homepage-img.jpeg" alt="homepage image"/>
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5"/>
    </svg>
    <br/>
    <table class="brescia-intro">
      <tr>
        <td>
          <h2>Brescia, The Lion Queen of Italy</h2>
          <p>Lombardy’s second-largest city (Milan is first) is respected for its metallurgy and machine-tooling prowess
            and for Beretta, its firearms manufacturer. <br/>
            But the city center is a UNESCO World Heritage site in Italy and a 3,200-year-old history you can
            experience. Brescia offers tourists everything they might want in the quest for dolce vita – food, wine,
            shopping, sites, culture, and antiquity.
          </p>
          <br/>
          <button>Discover</button>
        </td>
        <td>
          <img src="~/assets/intro_brescia.png" alt="intro brescia"/>
        </td>
      </tr>
    </table>
    <h1>What to do in Brescia</h1>
    <table class="what-to-do">
      <tr>
        <td>
          <topic-card
            title="Points of Interest"
            img-path="brescia_poi.jpg"
            description="Discover all of the magical spots that Brescia has to offer to the curious traveler."/>
        </td>
        <td>
          <topic-card
            title="Itineraries"
            img-path="brescia_iti.jpg"
            description="Plan your visit with our custom recommendations on tours, walks and what to see."/>
        </td>
        <td>
          <topic-card
            title="Events"
            img-path="brescia_eve.jpg"
            description="Enjoy the city with some of the most exciting events on sight."/>
        </td>
        <td>
          <topic-card
            title="Services"
            img-path="brescia_ser.jpg"
            description="Some key services you can access from the city center."/>
        </td>
      </tr>
    </table>
    <h1>Brescia waits for you!</h1>
    <p>For more information please contact
      <br/><a href="mailto:hello@brescia.it">hello@brescia.it</a>
    </p>
  </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    //    CustomPage,
  },
  async asyncData({$axios}) {
    const {data} = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
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
}

h1 {
  font-family: "Casual", serif;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}

p {
  font-family: Inter, serif;
  font-weight: 100;
  text-align: center;
}

button {
  display: block;
  margin: auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
}

button:hover {
  background: #d8eff5;
  color: #234c60;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s ;
  -o-transition: all 0.5s ;
  -ms-transition: all 0.5s ;
  transition: all 0.5s ;
}

a {
  color: #d8eff5;
}

.arrow-down {
  display: block;
  margin: 50px auto auto;
}

.brescia-intro td {
  width: 50%;
  padding: 40px;
}

.brescia-intro td h2 {
  font-family: "Casual", serif;
  text-align: center;
  margin-bottom: 20px;
}

.brescia-intro td p {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
}

.what-to-do {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

.what-to-do tr {
  margin: auto;
  text-align: center;
}

.what-to-do td {
  display: inline-block;
}

</style>
