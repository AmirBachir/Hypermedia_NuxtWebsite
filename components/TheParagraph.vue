<template>
  <div :class="`row ${left?'reverse':''}`">
      <div class="col">
          <h3>{{title}}</h3>
          <p>{{parag}}</p>
      </div>
      <div class="col">
          <img :src="require(`@/assets/` + img)" :alt="imgName"/>
      </div>
  </div>
</template>

<script>
export default {
    name: "TheParagraph",
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
.row{
    display: flex;
    align-items: center;
    margin: 4vw 0;
    padding: 0 6vw;
    max-width:1300px;
}
.reverse {
    flex-direction: row-reverse;
}

.col{
    width:100%;
    flex: 1 1 0;

}
.col+.col{
    margin-left: 2rem;
}
img{
    width:inherit;
}
</style>