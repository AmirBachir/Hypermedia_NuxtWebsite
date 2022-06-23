<template>
  <div :class="`row ${left?'reverse':''}`">
      <div class="elem"> 
          <!-- column --> 
          <!-- dice mattia che magari si visualizza a mezza pagina perchè non usiamo le column dopo aver usato la classe row di bootrastap -->
          <h3>{{title}}</h3>
          <p>{{parag}}</p>
      </div>
      <div :class="imgSize?imgSize:'elem'">
          <img :src="img" :alt="imgName"/>
      </div>
  </div>
</template>

<script>
export default {
    name: "TheParagraph",
    props:{
        title:{
            type:String,
            required: true
        },
        parag:{
            type:String,
            required: true
        },
        img:{
            type:String,
            required: true
        },
        left:{
            type: Number,
            required: false,
            default:0
        },
        imgSize:{
            type: String,
            required: false,
            default:''
        }
    },
    data(){
        return{
            transports:[
                {
                    from:"From Milano",
                    by: [
                        {by:"Train",
                        details:"Regional Train every hour from Milano Centrale Route EC 311 or RE 2623 (40 min - 1.15 hour) €7"},
                        {by:"Car",
                        details:"Highway A4/E64 1 hour 21 min"}
                    ]
                },
                {
                    from:"",
                    by: [
                        {by:"",
                        details:""}
                    ]
                },
                {
                    from:"",
                    by: [
                        {by:"",
                        details:""}
                    ]
                },
                {
                    from:"",
                    by: [
                        {by:"",
                        details:""}
                    ]
                },

            ]
        }
    },
    computed: {
        imgName(){
            return this.img.replace('.png','')
        }
    },
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.row{
    display: flex;
    justify-content: space-around; 
    align-items: center;
    margin: 4vw 0;
    padding: 0 6vw;
    max-width:1300px;
    /* border: 1px solid brown */
}
.reverse {
    flex-direction: row-reverse;
}

.elem{
    width:45%;
    padding:0;
}

img{
    width:100%;
    max-height: inherit;
}
.overview{
    width:30%;
    max-height:400px;
    padding:0;
}

</style>