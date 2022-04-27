<template>
  <div
    class="card"
    style="
      width: 15rem;
      padding: 0.5rem;
      background: #103749;
      border-radius: 5%;
      margin: 0.2rem;
    "
  >
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
  margin: auto;
  margin-top: 0.5rem;
  border-radius: 50%;
  border: 20px solid #d8fff5;
  width: 70%;
}

h5 {
  font-family: 'Inter';
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: center;
  color: #d8fff5;
}
</style>