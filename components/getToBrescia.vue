<template>
 <div>
    <div class="title"><h1>How to get to Brescia</h1></div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col d-flex align-items-center">
        <div class="card">
        <div v-for="(elem, key) in transports" :key="key" class="option">
          <div class="from">
            <hr>
            <p>{{ elem.from }}</p>
          </div>
          <div v-for="(m, k) in elem.by" :key="k">
            <div class="mean">{{ m.by }}</div>
            <div class="details">{{ m.details }}</div>
          </div>
        </div>
        </div>
      </div>
      <div class="col d-flex align-items-center justify-content-center" style="min-height:300px; max-height:500px">
        <div class="card h-100">
        <iframe
          class="map"
          frameborder="0"
          style="border: 0"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA43xG7rDzZF-wj6BHQXC4XxPqMgk0py9o&q=Brescia&center=45.54142169191904, 10.207883930586458&zoom=9"
          allowfullscreen
        >
        </iframe>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GetToBrescia',
  data() {
    return {
      transports: [
        {
          from: 'Milano',
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
          from: 'Milano Malpensa',
          by: [
            {
              by: 'Bus',
              details:
                'Arrive to Milano and transfer to Brescia Take the bus from Malpensa €31',
            },
          ],
        },
        {
          from: 'Milano Linate',
          by: [
            {
              by: 'Bus',
              details:
                'Arrive to Milano (Bus 73) and transfer to Brescia Take the bus from Linate €25',
            },
          ],
        },
        {
          from: 'Bergamo Orio Al Serio',
          by: [
            {
              by: 'Bus',
              details:
                'Arrive to Milano and transfer to Brescia Take the bus from Bergamo Orio Al Serio €5',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>

*{
  box-sizing: border-box;
}

h1 {
  font-family: Casual, serif;
}
/* body{
  width:100%
} */
.title {
  text-align: center;
}
.option{
    margin-bottom:2rem;
}
.from {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
}
.mean {
  margin-top: 15px;
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
}
.details {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 300;
}

.card{
  background:none;
  border:none;
  width:100%;
  padding:20px;
}
iframe{
  height:100%;
  width:100%;
  max-width:100%;
}
.row{
  margin:0
}
/* .row {
  display: flex;
  justify-content: space-between;
  margin: 4vw 0;
  padding: 0 1vw 0 3vw;
  max-width: 1300px;
  border: 2px solid red
}
.elem{
  width:47%;
}

.map {
  width: 100%;
  height:80%;
} */
</style>
