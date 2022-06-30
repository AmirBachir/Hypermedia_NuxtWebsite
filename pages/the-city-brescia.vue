<template>
  <div>
    <!-- di tutta questa parte si potrebbe fare un component (si ripete anche nella introductory page di events) -->
    <div style="text-align: end">
      <img
        class="intro-img"
        src="~/assets/thecityofbrescia-coverimage.png"
        alt="The city of Brescia cover image">
    </div>
    <h1>The city of Brescia</h1>
    <!-- inserire qui una piccola OVERVIEW -->
    <arrow-down id="arrow-down" @click.native="toContent"/>
    <the-parag v-for="(elem,key) in info" :key="key" :img="require(`@/assets/${elem.img}`)" :left="key%2"
               :parag="elem.parag" :title="elem.title"/>
    <!-- here goes the map with the transport info -->
    <the-map/>
  </div>
</template>

<script>
import theParag from '~/components/TheParagraph.vue'
import theMap from '~/components/getToBrescia.vue'

export default {
  name: 'TheCityOfBrescia',
  data() {
    return {
      info: [
        {
          title: "About",
          parag: "Brescia is considered to be an important industrial city. Metallurgy and production of metal parts, machine tools and firearms are of particular economic significance, along with mechanical and automotive engineering.",
          img: "thecity-about.png",
        },
        {
          title: "Brescia - Bergamo Capitale della Cultura 2023",
          parag: "The victory of Bergamo-Brescia of the title of Italian Capital of Culture 2023 is presented as the conclusion of the best comedy: after many vicissitudes and pain, a spark - light is the theme of their program - guides the two cities out of adversity and to the future.",
          img: "thecity-capitalecultura.png",
        },
        {
          title: "The history of “Brixia”",
          parag: "Founded over 3,200 years ago, Brescia (in antiquity Brixia) has been an important regional centre since pre-Roman times. Its old town contains the best-preserved Roman public buildings in northern Italy[4][5] and numerous monuments, among these the medieval castle, the Old and New cathedral, the Renaissance Piazza della Loggia and the rationalist Piazza della Vittoria.",
          img: "thecity-history.png",
        },
      ]
    }
  },
  components: {
    theParag,
    theMap
  },

  methods: {
    toContent() {
      const arrow = document.getElementById('arrow-down')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },

  mounted() {
    const menuItems = document.querySelectorAll('.nav-link')
    menuItems[1].classList.add('current-topic')
    // console.log(menuItems)
    // let item
    // let i
    // for(i=0; i<menuItems.length; i++){
    //   if (menuItems[i].innerHTML==='The City of Brescia'){
    //     item = menuItems[i]
    //   }
    // }
    // const item = Array.from(menuItems).filter(i=>{return i.innerHTML==='The City of Brescia'})
    // console.log(item)
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-align: justify;
}

h1 {
  font-family: "Casual", serif;
  margin-bottom: 3rem;
  margin-left: 6vw;
}

.intro-img {
  width: 100%;
  margin-bottom: 2em;
}
</style>
