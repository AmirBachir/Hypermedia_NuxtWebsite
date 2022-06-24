<template>
  <div :class="`row row-cols-1 row-cols-md-2 g-4 ${left ? 'reverse' : ''}`">
    <div class="col d-flex align-items-center">
      <div class="card">
        <h3>{{ title }}</h3>
        <p>{{ parag }}</p>
        <div v-if="left!=''" class="text-center">
          <a href="https://www.comune.brescia.it/servizi/arteculturaeturismo/BergamoBrescia2023/Pagine/Elemento-grafico-a-libero-utilizzo.aspx" target="_blank" class="btn">Learn more</a>
        </div>
      </div>
    </div>
    <div class="col d-flex align-items-center justify-content-center">
      <div class="card">
        <img :src="img" :alt="imgName"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheParagraph',
  props: {
    title: {
      type: String,
      required: true,
    },
    parag: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    left: {
      type: Number,
      required: false,
      default: 0,
    },
    imgSize: {
      type: String,
      required: false,
      default: '',
    },
    
  },
  data() {
    return {
      transports: [
        {
          from: 'From Milano',
          by: [
            {
              by: 'Train',
              details:
                'Regional Train every hour from Milano Centrale Route EC 311 or RE 2623 (40 min - 1.15 hour) €7',
            },
            { by: 'Car', details: 'Highway A4/E64 1 hour 21 min' },
          ],
        },
        {
          from: '',
          by: [{ by: '', details: '' }],
        },
        {
          from: '',
          by: [{ by: '', details: '' }],
        },
        {
          from: '',
          by: [{ by: '', details: '' }],
        },
      ],
    }
  },
  computed: {
    imgName() {
      return this.img.replace('.png', '')
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.reverse {
  flex-direction: row-reverse;
}
.card {
  justify-content: center;
  padding: 2rem;
  background: none;
  border: none;
}
.row{
    margin:0;
}
img{
    width:100%;
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
</style>
