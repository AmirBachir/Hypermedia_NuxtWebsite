<template>
  <div class="homepage">
    <nuxt-img src="/homepage-img.jpeg" alt="homepage image" format="webp"/>
    <arrow-down id="arrow-down" @click.native="toContent"/>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 ">
          <h3 class="">Brescia, The Lion Queen of Italy</h3>
          <p class="">
            Lombardy’s second-largest city (Milan is first) is respected for
            its metallurgy and machine-tooling prowess and for Beretta, its
            firearms manufacturer. <br/>
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
    <table id="what-to-do">
      <tr>
        <td v-for="(e, k) of topics" :key="k">
          <topic-card
            :title="e.title"
            :img-path="e.img_path"
            :description="e.description"
            :url="e.url"
          />
        </td>
      </tr>
    </table>
    <h1>Brescia waits for you!</h1>
    <p>
      For more information please contact <br/><a
      href="mailto:hello@brescia.it"
    >hello@brescia.it</a
    >
    </p>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
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

  methods: {
    toContent() {
      const arrow = document.getElementById('arrow-down')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Casual';
  /* src: local('~/assets/Casual-Regular.ttf'); */
  src: url('~/assets/Casual-Regular.ttf');
}

.homepage > img {
  width: 100%;
}

h1 {
  font-family: 'Casual', serif;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}

.row p {
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

#arrow-down {
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
  vertical-align: top;
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
