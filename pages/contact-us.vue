
<template>
  <div class="container">
    <intro-pages-cover img-name="contact-us.png" />
    <h1>Contact us</h1>

    <table>
      <tr>
        <h2>The team</h2>
      </tr>
      <tr class="team_members">
        <td>
          <img src="~/assets/Monica.png" alt="Monica Arriaga image" />
          <br />
          <h4> Monica Arriaga</h4>
          <p>
            Integrated product design <br />
            Matricola: 960921 <br />
            monica.arriaga@mail.polimi.it
          </p>
        </td>
        <td>
          <img src="~/assets/Andrea.png" alt="Andrea Alesani image" />
          <br />
          <h4> Andrea Alesani</h4>
          <p>
            EIT Digital HCID <br />
            Matricola: 994160 <br />
            andrea.alesani@mail.polimi.it
          </p>
        </td>
        <td>
          <img src="~/assets/foto amir.png" alt="Amir Bachir image" />
          <br />
          <h4> Amir Bachir</h4>
          <p>
            EIT Digital HCID <br />
            Matricola: 995218 <br />
            amir.bachir@mail.polimi.it
          </p>
        </td>
        <td>
          <img src="~/assets/foto_GAB.jpg" alt="Gabriele Carollo image" />
          <br />
          <h4> Gabriele Carollo</h4>
           <p>
            EIT Digital HCID <br />
            Matricola: 994488 <br />
            gabriele.carollo@mail.polimi.it
          </p>
        </td>
      </tr>
      <tr>
        <h2>The teachers</h2>
      </tr>
      <tr>
<td>
          <img src="~/assets/prof_garzotto.png" alt="Franca Garzotto image" />
          <br />
          <h4> Franca Garzotto</h4>
          <p>
          Professor
          </p>
        </td>
        <td>
          <img src="~/assets/Luke.png" alt="Lukas Moskwa image" />
          <br />
          <h4> Lukas Moskwa</h4>
          <p>
            Teaching assistant
          </p>
        </td>
        <td>
          <img src="~/assets/alberto_patti.png" alt="Alberto Patti image" />
          <br />
          <h4> Alberto Patti </h4>
          <p>
            Teaching assistant
          </p>
        </td>
        <td>
          <img src="~/assets/mattia_gianotti.png" alt="Mattia Gianotti image" />
          <br />
          <h4> Mattia Gianotti</h4>
          <p>
            Project tutor
          </p>
        </td>
        <td>
          <img src="~/assets/giulio_abbo.png" alt="Giulio Antonio Abbo image" />
          <br />
          <h4> Giulio Antonio Abbo</h4>
          <p>
            Project tutor
          </p>
        </td>
      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
}
</script>

<style scoped>
@font-face {
  font-family: 'Casual';
  src: local('~/assets/Casual-Regular.ttf');
}
h1 {
  font-family: 'Casual', serif;
}

h2 {
  font-family: 'Casual', serif;
  text-align: left;
}
h4{
  text-align: left;
}
img {
  /* max-height: 25vh; */
  padding: 10px;
  height: 25vh;
}
table {
  width: 100%;
  /* margin: auto; */
  overflow-x: auto;
  margin-top: 3rem;
}
tr {
  /* margin: auto; */
  text-align: center;
  vertical-align: top;
}

td {
  display: inline-block;
  padding: 1.2vw;
  text-align: left;
}
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 22px;

color: #D8EFF5;
}
</style>