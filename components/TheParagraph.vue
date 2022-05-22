<template>
  <div :class="`row ${left?'reverse':''}`">
      <div class="elem">
          <h3>{{title}}</h3>
          <p>{{parag}}</p>
      </div>
      <div :class="'elem'">
          <img :src="require(`@/assets/` + img)" :alt="imgName"/>
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
            required: true
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
    justify-content: space-between; 
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
    /* border: 3px solid yellow; */
    padding:0;
}

img{
    width:100%;
}

</style>