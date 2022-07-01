<template>
<!-- Evidenziare il bottone corrispondente alla pagina attiva -->
  <nav class="navbar fixed-top navbar-expand-lg" style="margin-top=0px">
    <div class="container-fluid align-middle">
      <nuxt-link class="navbar-brand" to="/">Brescia</nuxt-link>
      <button
      class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/the-city-brescia">The City of Brescia</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/itineraries">Itineraries</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/points-of-interest-intro">Points of Interest</nuxt-link></li>
          <li class="nav-item dropdown">
            <nuxt-link
              id="navbarDropdownEvents"
              class="nav-link"
              to="/events"
              role="button"
              data-bs="dropdown"
              aria-expanded="false"
            >
              Events
            </nuxt-link>
            <ul class="dropdown-menu start-50 translate-middle-x" aria-labelledby="navbarDropdownEvents">
              <div class="square"></div>
              <li><nuxt-link class="dropdown-item" to="/events?filter=all">All events</nuxt-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><nuxt-link class="dropdown-item" to="/events?filter=summer">Summer events</nuxt-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><nuxt-link class="dropdown-item" to="/events?filter=winter">Winter Events</nuxt-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/service-types">Services</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  mounted(){
    this.addListeners()
  },
  methods: {
    toggleCollapse(){
      const togglerIcon = document.querySelector('.navbar-toggler')
      togglerIcon.classList.add("collapsed")
      const content = document.querySelector('#navbarSupportedContent')
      content.classList.remove('show')
    },
    addListeners(){
    const navItems = document.querySelectorAll('.nav-item')
    const f = this.toggleCollapse;
    navItems.forEach((i)=>{i.addEventListener('click', ()=>{f()})})
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Casual";
  src: local("~/assets/Casual-Regular.ttf");
}
.current-topic{
  border-bottom:1px solid rgb(216, 239, 245) !important;;
}
.navbar {
  background-color: #234c60;
  color:rgb(216, 239, 245);
  font-family: 'Inter', sans-serif;
  padding: 0;
}
.nav-link, .navbar-brand{
  color: inherit;
}
.nav-item{
  width:fit-content;
  font-size: 1.05em;
  margin-left:1.3em;
  margin-right:1.3em;
}
.dropdown:hover > .dropdown-menu{
  display: block;
}
.dropdown-menu{
  color:#234C60;
  background-color:#D8EFF5 ;
  padding:0;
  text-align:center;
  width: fit-content;
}
.dropdown-item{
  padding: 0.6rem 0.4rem;
  opacity:0.7;
}
.dropdown-item:hover{
  opacity: 1;
  background-color: inherit;
}
.dropdown-divider{
  margin:0;
}
@media only screen and (max-width: 992px) {
  .translate-middle-x {
    transform: translateX(-0%)!important;
  }

}


.navbar-collapse{
  flex-grow: 0;
}

.navbar-brand{
  font-family: "Casual", serif;
  font-size: 3em;
  margin-left:3rem;
  margin-right:3rem;
  padding:0;
}



.square {
  position: relative;
  top:-6px;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: #D8EFF5;
  transform: rotate(45deg);
  margin-bottom: -8px;
}

/*Button collapse toggle*/
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
