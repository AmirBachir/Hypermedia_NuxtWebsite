<template>
  <div>
    <a
      class="nav-link"
      id="navbarDropdown"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
     
    >
      {{navItem.name}}
			
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <div class="square"></div>
      <div  v-for="(group, index) in navItem.groups" :key="index" class="">
          <!-- {{group.name}} -->
          <li><nuxt-link :to="group.path" class="dropdown-item" >{{group.name}}</nuxt-link></li>
          <li v-if="navItem.groups.indexOf(group)!= (navItem.groups.length - 1)"><hr class="dropdown-divider" /></li>
      </div>
    </ul>
    </div>
</template>

<script>
export default {
	name: 'CustomDropdown',
  props: {
    navItem: {
        type: Object,
        required: true
    } 
  },
//   methods:{
//   <a
//   class="nav-link dropdown-toggle"
//   id="navbarDropdown"
//   href="#"
//   role="button"
//   data-bs-toggle="dropdown"
//   aria-expanded="false"
//   @mouseover="showMenu"
//   @mouseleave="hideMenu"
//   >
//   showMenu(e){
//     e.target.nextElementSibling.classList.add("show");
//     e.target.setAttribute('aria-expanded', 'true')
//   },
//   hideMenu(e){
//     e.target.nextElementSibling.classList.remove("show");
//     e.target.setAttribute('aria-expanded', 'false')
//   }
// }

}

</script>

<style scoped>
.square {
  position: absolute;
  top:-6px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 12px;
  height: 12px;
  background-color: #D8EFF5;
  transform: rotate(45deg);
}

.nav-item .dropdown:hover > .dropdown-menu{
  display: block;
}

.dropdown-item:hover{
  background-color: #bfeaf5;
;
}

.navbar {
  background-color: #234C60;

}
.navbar-nav .nav-link {
  font-family: 'Inter';
  font-style: normal;
  color:#D8EFF5;

}
.navbar-brand {
  margin:0px 20px;
  font-family: 'Casual';
  font-style: normal;
  font-weight: 400;
  color:#D8EFF5;
}
.nav-item{
  margin-left: 20px;
  margin-right: 20px;
}
.dropdown-menu{
right: auto;
left: 50%;
-webkit-transform: translate(-50%, 0);
-o-transform: translate(-50%, 0);
transform: translate(-50%, 0);
background-color: #D8EFF5;
text-align: center;
font-size: 0.77rem;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
color: #234C60;
}

</style>


