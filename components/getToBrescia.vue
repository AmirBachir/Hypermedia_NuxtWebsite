<template>
  <div>
    <div class="title"><h1>How to get to Brescia</h1></div>
    <div class="row">
      <div class="elem">
        <div v-for="(elem, key) in transports" :key="key" class="option">
          <div class="from">
            <p>{{ elem.from }}</p>
          </div>
          <div v-for="(m, k) in elem.by" :key="k">
            <div class="mean">{{ m.by }}</div>
            <div class="details">{{ m.details }}</div>
          </div>
        </div>
      </div>
      <div class="elem">
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
</template>

<script>
export default {
  name: 'GetToBrescia',
  data() {
    return {
      transports: [
        {
          from: 'From Milano',
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
          from: 'From Milano Malpensa',
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
.title {
  text-align: center;
}
.option{
    margin-bottom:2rem;
}
.from {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
}
.mean {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
}
.details {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
}
.row {
  display: flex;
  justify-content: space-between; 
  margin: 4vw 0;
  padding: 0 1vw 0 3vw;
  max-width: 1300px;
  /* border: 2px solid red */
}
.elem{
  width:47%;
}

.map {
  width: 100%;
  height:80%;
}
</style>
