<template>
  <div class="card">
    <img
      src="../assets/brescia_poi.jpg"
      class="card-img-top circular-border"
      alt="image"
    />
    <div class="card-body">
      <h5 class="card-title">Points of Interest</h5>
      <p class="card-text">
        Discover all of the magical spots that Brescia has to offer to the
        curious traveler.
      </p>
    </div>
  </div>
</template>

<style scoped>
.circular-border {
  margin: 0.5rem auto auto;
  border-radius: 50%;
  border: 20px solid #d8fff5;
  width: 70%;
}

h5 {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #d8fff5;
}

p {
  display: inline;
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: center;
  color: #d8fff5;
}

.card {
  width: 15rem;
  padding: 0.5rem;
  background: transparent;
  border-width: 0;
  margin: 0.2rem;
}
</style>
