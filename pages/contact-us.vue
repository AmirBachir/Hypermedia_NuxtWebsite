
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
          <img src="~/assets/Andrea.png" alt="Andrea Alesani image" />
          <br />
          <h4> Andrea Alesani</h4>
          <p>
            EIT Digital HCID <br />
            Codice persona:  <br />
            <a href="mailto:andrea.alesani@mail.polimi.it">andrea.alesani@mail.polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/Monica.png" alt="Monica Arriaga image" />
          <br />
          <h4> Monica Arriaga</h4>
          <p>
            Integrated product design <br />
            Codice persona: 10752329 <br />
            <a href="mailto:monica.arriaga@mail.polimi.it">monica.arriaga@mail.polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/foto amir.png" alt="Amir Bachir image" />
          <br />
          <h4> Amir Bachir</h4>
          <p>
            EIT Digital HCID <br />
            Codice persona: 10659740 <br />
            <a href="mailto:amir.bachir@mail.polimi.it">amir.bachir@mail.polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/foto_GAB.jpg" alt="Gabriele Carollo image" />
          <br />
          <h4> Gabriele Carollo</h4>
           <p>
            EIT Digital HCID <br />
            Codice persona: 10659997 <br />
            <a href="mailto:gabriele.carollo@mail.polimi.it">gabriele.carollo@mail.polimi.it</a>
            
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
          Professor<br />
          <a href="mailto:franca.garzotto@polimi.it">franca.garzotto@polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/Luke.png" alt="Lukas Moskwa image" />
          <br />
          <h4> Lukas Moskwa</h4>
          <p>
            Teaching assistant<br />
            <a href="mailto:lukas.moskwa@polimi.it">lukas.moskwa@polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/alberto_patti.png" alt="Alberto Patti image" />
          <br />
          <h4> Alberto Patti </h4>
          <p>
            Teaching assistant<br />
                <a href="mailto:alberto.patti@polimi.it">alberto.patti@polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/mattia_gianotti.png" alt="Mattia Gianotti image" />
          <br />
          <h4> Mattia Gianotti</h4>
          <p>
            Project tutor<br />
            <a href="mailto:mattia.gianotti@polimi.it">mattia.gianotti@polimi.it</a>
          </p>
        </td>
        <td>
          <img src="~/assets/Giulio_Abbo.png" alt="Giulio Antonio Abbo image" />
          <br />
          <h4> Giulio Antonio Abbo</h4>
          <p>
            Project tutor<br />
          <a href="mailto:giulioantonio.abbo@polimi.it">giulioantonio.abbo@polimi.it</a>

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
a{font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
color: #D8EFF5;
  /* text-decoration: none; */
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