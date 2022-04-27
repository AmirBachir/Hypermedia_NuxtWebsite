<template>
  <div class="card" style="width: 15rem; background: #103749; margin: 0.2rem">
    <p class="date-day">5</p>
    <p class="date-month-year">May 2022</p>
    <img src="../assets/brescia_eve.jpg" class="card-img-top" alt="image" />
    <div class="card-body" style="margin: 0.5rem">
      <p class="card-subtitle">H 9.30</p>
      <p class="card-text point-of-interest">Point of Interest</p>
      <h5 class="card-title">Event</h5>
      <p class="card-subtitle">TYPE OF EVENT</p>
      <p class="card-text description">Description of the event that convinces people.</p>
    </div>
  </div>
</template>

<style scoped>
h5 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 29px;
  text-align: left;
  margin-top: 0.3rem;
  color: #d8fff5;
}

p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: small;
  line-height: 22px;
  text-align: left;
  color: #d8fff5;
}

img {
  object-fit: cover;
  max-height: 20vh;
}

.date-day {
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 60px;
  font-weight: 700;
}

.date-month-year {
  margin-left: 1rem;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
}

.point-of-interest {
  text-transform: uppercase;
}

.description {
  margin-top: 1rem;
}
</style>