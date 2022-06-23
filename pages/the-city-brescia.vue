<template>
  <div>
    <!-- di tutta questa parte si potrebbe fare un component (si ripete anche nella introductory page di events) -->
    <div style="text-align: end" >
      <img
        class="intro-img"
        src="~/assets/thecityofbrescia-coverimage.png"
        alt="The city of Brescia cover image">
    </div>
    <h1>The city of Brescia</h1>
    <!-- inserire qui una piccola OVERVIEW -->
    <div style="text-align: center">
      <svg
        class="arrow-down"
        width="79"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5" />
      </svg>
    </div>
    <!-- fino a qui --> 
    <the-parag  v-for="(elem,key) in info" :key="key" :img="elem.img" :left="key%2" :parag="elem.parag"  :title="elem.title" />
    <!-- here goes the map with the transport info -->
    <the-map />
  </div>
</template>

<script>
import theParag from '~/components/TheParagraph.vue'
import theMap from '~/components/getToBrescia.vue'
export default {
  name: 'TheCityOfBrescia',
  data(){
    return{
      info:[
        {
          title:"About",
          parag:"Brescia is considered to be an important industrial city. Metallurgy and production of metal parts, machine tools and firearms are of particular economic significance, along with mechanical and automotive engineering.",
          img:"thecity-about.png",
        },
        {
          title:"Brescia - Bergamo Capitale della Cultura 2023",
          parag:"The victory of Bergamo-Brescia of the title of Italian Capital of Culture 2023 is presented as the conclusion of the best comedy: after many vicissitudes and pain, a spark - light is the theme of their program - guides the two cities out of adversity and to the future.",
          img:"thecity-capitalecultura.png",
        },
        {
          title:"The history of “Brixia”",
          parag:"Founded over 3,200 years ago, Brescia (in antiquity Brixia) has been an important regional centre since pre-Roman times. Its old town contains the best-preserved Roman public buildings in northern Italy[4][5] and numerous monuments, among these the medieval castle, the Old and New cathedral, the Renaissance Piazza della Loggia and the rationalist Piazza della Vittoria.",
          img:"thecity-history.png",
        },
      ]
    }
  },
  components:{
    theParag,
    theMap
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
h1 {
  font-family: "Casual", serif;
  margin-bottom:3rem;
  margin-left: 6vw;
}
.intro-img{
  width:100%;
  margin-bottom: 2em;
}
</style>