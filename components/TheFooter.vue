<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start text-muted">
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col mb-5">
            <!-- Links -->
            <h6 class="fs-5 mb-4 columnTitle">Useful links</h6>
            <p>
              <nuxt-link to="/itineraries" class="text">Itineraries</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/points-of-interest-intro" class="text">Points of interest</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/events" class="text">Events</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/service-types" class="text">Services</nuxt-link>
            </p>
          </div>

          <!-- Grid column -->
          <div class="col mb-5">
            <h6 class="fs-5 mb-4 columnTitle">Contacts</h6>
            <nuxt-link to="/contact-us" class="text"> The team and the teachers</nuxt-link>
            <p><a href="mailto:hello@brescia.it">Write us an email</a></p>
          </div>

          <!-- Grid column -->
          <div class="col mb-5">
            <h6 class="fs-5 columnTitle">Institutions</h6>
            <div class="row mt-1">
              <a class="logo-link" href="https://www.comune.brescia.it/Pagine/default.aspx" target="_blank">
                <img
                  src="../assets/comune-di-brescia-vector-logo-removebg 1.png"
                  class="logo"
                  alt="comune di Brescia logo"
                />
              </a>

              <a class="logo-link" href="https://i3lab.polimi.it/" target="_blank">
                <img src="../assets/i3lab 1.png" class="logo" alt="image"/>
              </a>

              <a class="logo-link" href="https://www.polimi.it/" target="_blank">
                <img
                  src="../assets/Logo_Politecnico_Milano 2.png"
                  class="logo"
                  alt="image"
                />
              </a>
            </div>
          </div>
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <!-- <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
        >MDBootstrap.com</a
      >
    </div> -->
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
/* Footer */

* {
  position: relative;
  left: 0;
  background-color: #d8eff5;
  margin-top: 30px;
}

.columnTitle {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  color: #234c60;
}

a {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  color: #234c60;
  text-decoration: none;
}

.text {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  color: #234c60;
  text-decoration: none;
}

.logo-link {
  width: 60px;
  margin: 8px 5px 5px;
  padding: 0;
}

.logo {
  width: 50px;
  height: 50px;
  margin: 0;
  object-fit: contain;
}

@media all and (max-width: 500px) {
  .logo-link {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin: 0;
    object-fit: contain;
  }
}
</style>
