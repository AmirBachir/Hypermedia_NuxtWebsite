<template>
  <nav class="navbar navbar-expand-lg" >
    <div class="container-fluid">
      <button 
      class="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 w-100 align-items-center">
            <li  v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" :class="['nav-item',alignment(navItemIndex)]">
              <a v-if="navItem.name==='Brescia'"  class="navbar-brand" href="/">Brescia</a>
              <custom-dropdown v-else-if="navItem.name==='Events' || navItem.name==='Points of Interest'" :navItem="navItem" class="nav-item dropdown"/>
              <nuxt-link v-else class="nav-link" :to="navItem.path">{{navItem.name}}</nuxt-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CustomDropdown from '~/components/CustomDropdown.vue'
export default {
  name: 'TheHeader',
  components: { CustomDropdown },
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'The City of Brescia',
          path: '/thecityofbrescia',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
        {
          name: 'Brescia',
          path: '/'

        },
        {
          name: 'Points of Interest',
          path: '/pointsofinterest',
          groups:[
            {name: 'Historical Sites & Monuments',
             path: '/pointsofinterest/historicalsitesandmonuments'
            },
            {name:'Piazze and Leisure',
             path:'/pointsofinterest/piazzeandleisure'
            },
            {name:'Nature',
             path:'/pointsofinterest/nature'
            },
          ]
        },
        {
          name: 'Events',
          path: '/events',
          groups:[
            {name: 'All events',
             path: '/events/allevents'
            },
            {name:'Piazze and Leisure',
             path:'/events/summerevents'
            },
            {name:'Nature',
             path:'/events/winterevents'
            },
          ]
        },
        {
          name: 'Services',
          path: '/services',
        },
      ],
    }
  },
  // computed: {
  //   alignment(){
  //     if (this.currentIndex<this.headerList.length)
  //       return 'ms-auto'
  //     else if (this.currentIndex>this.headerList.length)
  //       return 'me-auto'
  //     else
  //       return 'mx-auto'
  //   }
  // }
  methods:{
    alignment(i){
       if (i<this.headerList.length/2-1){
        console.log(i)
         return 'me-auto'}
       else if (i>this.headerList.length/2)
         return 'ms-auto'
       else
         return 'mx-auto'
     }
  }
}
</script>


<style scoped>
.navbar {
  background-color: #234C60;

}
/* .nav-item{
  margin-left: 20px;
  margin-right: 20px;
} */
.navbar-nav .nav-link {
  font-family: 'Inter';
  font-style: normal;
  color:#D8EFF5;

}
.navbar-brand {
  margin:0px 10rem;
  font-family: 'Casual';
  font-style: normal;
  font-size: 3rem;
  color:#D8EFF5;
}

</style>