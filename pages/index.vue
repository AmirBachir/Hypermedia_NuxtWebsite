<template>
  <div class="homepage">
    <img src="~/assets/homepage-img.jpeg" alt="homepage image" />
    <svg
      class="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5" />
    </svg>
    <br />
    <!-- <table id="brescia-intro">
      <tr>
        <td>
          <h2>Brescia, The Lion Queen of Italy</h2>
          <p>
            Lombardy’s second-largest city (Milan is first) is respected for its
            metallurgy and machine-tooling prowess and for Beretta, its firearms
            manufacturer. <br/>
            But the city center is a UNESCO World Heritage site in Italy and a
            3,200-year-old history you can experience. Brescia offers tourists
            everything they might want in the quest for dolce vita – food, wine,
            shopping, sites, culture, and antiquity.
          </p>
          <br/>
          <button>Discover</button>
        </td>
        <td>
          <img src="~/assets/intro_brescia.png" alt="intro brescia"/>
        </td>
      </tr>
    </table> -->
    <!-- <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Brescia, The Lion Queen of Italy</h3>
            <p class="card-text">
              Lombardy’s second-largest city (Milan is first) is respected for
              its metallurgy and machine-tooling prowess and for Beretta, its
              firearms manufacturer. <br />
              But the city center is a UNESCO World Heritage site in Italy and a
              3,200-year-old history you can experience. Brescia offers tourists
              everything they might want in the quest for dolce vita – food,
              wine, shopping, sites, culture, and antiquity.
            </p>
            <a href="/the-city-brescia" class="btn">Discover</a>
          </div>
        </div>
      </div>
      <div class="col" style="height:300px">
        <div class="card h-100" >
          <img
            src="~/assets/intro_brescia.png"
            class="card-img-top"
            alt="intro brescia"
            style="height:inherit"
          />
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col-sm-6 ">
            <h3 class="">Brescia, The Lion Queen of Italy</h3>
            <p class="">
              Lombardy’s second-largest city (Milan is first) is respected for
              its metallurgy and machine-tooling prowess and for Beretta, its
              firearms manufacturer. <br />
              But the city center is a UNESCO World Heritage site in Italy and a
              3,200-year-old history you can experience. Brescia offers tourists
              everything they might want in the quest for dolce vita – food,
              wine, shopping, sites, culture, and antiquity.
            </p>
            <div class="text-center">
            <a href="/the-city-brescia" class="btn">Discover</a>
            </div>
          </div>
        <div class="col-sm-6 text-center">
            <img
              src="~/assets/intro_brescia.png"
              class=""
              alt="intro brescia"
              style="height:400px"/>
        </div>
      </div>
    </div>



    <h1>What to do in Brescia</h1>
    <table id="what-to-do" class="sticky-top">
      <tr class="container">
        <td v-for="(e, k) of topics" :key="k">
          <topic-card
            :title="e.title"
            :img-path="e.img_path"
            :description="e.description"
            :url="e.url"
          />
        </td>
        <!-- <td>
          <topic-card
            title="Itineraries"
            img-path="brescia_iti.jpg"
            description="Plan your visit with our custom recommendations on tours, walks and what to see."
            url="/itineraries"
          />
        </td>
        <td>
          <topic-card
            title="Events"
            img-path="brescia_eve.jpg"
            description="Enjoy the city with some of the most exciting events on sight."
            url="/events"
          />
        </td>
        <td>
          <topic-card
            title="Service types"
            img-path="brescia_ser.jpg"
            description="Some key services you can access from the city center."
            url="/service-type"
          />
        </td> -->
      </tr>
    </table>
    <h1>Brescia waits for you!</h1>
    <p>
      For more information please contact <br /><a
        href="mailto:hello@brescia.it"
        >hello@brescia.it</a
      >
    </p>
  </div>
</template>

<script>
// import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
  data() {
    return {
      topics: [
        {
          title: 'Service types',
          img_path: 'brescia_ser.jpg',
          description: 'Some key services you can access from the city center.',
          url: '/service-types',
        },
        {
          title: 'Events',
          img_path: 'brescia_eve.jpg',
          description:
            'Enjoy the city with some of the most exciting events on sight.',
          url: '/events',
        },
        {
          title: 'Itineraries',
          img_path: 'brescia_iti.jpg',
          description:
            'Plan your visit with our custom recommendations on tours, walks and what to see.',
          url: '/itineraries',
        },
        {
          title: 'Points of Interest',
          img_path: 'brescia_poi.jpg',
          description:
            'Discover all of the magical spots that Brescia has to offer to the curious traveler.',
          url: '/points-of-interest-intro',
        },
      ],
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'Casual';
  /* src: local('~/assets/Casual-Regular.ttf'); */
  src: url('~/assets/Casual-Regular.ttf');
}

.homepage>img {
  width: 100%;
  }

h1 {
  font-family: 'Casual', serif;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}

.row p{
  text-align: left;
}

p {
  font-family: Inter, serif;
  font-weight: 100;
  text-align: center;
}

.btn {
  /* display: block;
  margin: auto; */
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
}

.btn:hover {
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

.arrow-down {
  display: block;
  margin: 50px auto auto;
}

#brescia-intro {
  overflow-x: auto;
  width: 100%;
}

#brescia-intro td {
  display: inline-block;
  width: 50%;
  padding: 40px;
}

#brescia-intro td h2 {
  font-family: 'Casual', serif;
  text-align: center;
  margin-bottom: 20px;
}

#brescia-intro td p {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
}

#what-to-do {
  width: 100%;
  margin: auto;
  overflow-x: auto;
}

#what-to-do tr {
  margin: auto;
  text-align: center;
}

#what-to-do td {
  display: inline-block;
}

@media all and (max-width: 500px) {
  #brescia-intro td {
    width: 100%;
  }
}
</style>
