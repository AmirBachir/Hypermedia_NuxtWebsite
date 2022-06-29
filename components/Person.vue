<template>
<div>
    <img :src="require(`@/assets/${img}`)" :alt="name + ' image'"/>
          <br />
          <h4> {{name}}</h4>
          <p>
           {{info}} <br />
            <codice v-if="codice!==undefined">Codice persona: {{codice}} <br /> </codice>
            <a :href="'mailto:' + mail">{{mail}}</a>
          </p>
</div>
</template>
<script>
export default {
  name: 'PersonComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    codice: {
      type: String,
      required: false,
    },
     mail: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 22px;
color: #D8EFF5;
}
a{font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
color: #D8EFF5;
  /* text-decoration: none; */
  }img {
  /* max-height: 25vh; */
  padding: 10px;
  height: 25vh; 
  /* ++width: 22vh; */
}
h4{
  text-align: left;
}
</style>
