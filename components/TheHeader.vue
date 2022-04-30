<template>
  <nav class="navbar navbar-expand-lg" >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Brescia</a>
      <button 
      class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 w-100 align-items-center">
            <li  v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`" :class="['nav-item']">
              <custom-dropdown v-if="navItem.name==='Events' || navItem.name==='Points of Interest'" :navItem="navItem" class="dropdown"/>
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
.nav-item{
  margin:0rem 1.5rem;
}
.navbar-brand {
  margin:0px 4rem;
  font-family: 'Casual';
  font-style: normal;
  font-size: 3rem;
  color:#D8EFF5;
}
.navbar-toggler {
    width: 20px;
    height: 20px;
    position: relative;
    transition: .5s ease-in-out;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
    border: 0;
}

.navbar-toggler span {
    margin: 0;
    padding: 0;
}

.toggler-icon {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #d3531a;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.middle-bar {
    margin-top: 0px;
}

/* when navigation is clicked */

.navbar-toggler .top-bar {
    margin-top: 0px;
    transform: rotate(135deg);
}

.navbar-toggler .middle-bar {
    opacity: 0;
    filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
    margin-top: 0px;
    transform: rotate(-135deg);
}

/* State when the navbar is collapsed */

.navbar-toggler.collapsed .top-bar {
    margin-top: -20px;
    transform: rotate(0deg);
}

.navbar-toggler.collapsed .middle-bar {
    opacity: 1;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
    margin-top: 20px;
    transform: rotate(0deg);
}

/* Color of 3 lines */

.navbar-toggler.collapsed .toggler-icon {
  background-color: #D8EFF5; 
}

</style>