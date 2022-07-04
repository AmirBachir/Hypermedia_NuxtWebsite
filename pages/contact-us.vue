<template>
  <div class="container">
    <intro-pages-cover img-name="contact-us.png"/>
    <h1>Contact us</h1>

    <table>
      <tr>
        <h2>The team</h2>
      </tr>
      <tr class="team_members">
        <td>
          <person-component
            class="person-component"
            codice="10615882"
            info="EIT Digital HCID"
            mail="andrea.alesani@mail.polimi.it"
            img="Andrea.png"
            name="Andrea Alesani"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            codice="10752329"
            info=" Integrated Product Design"
            mail="monica.arriaga@mail.polimi.it"
            img="Monica.png"
            name="Monica Arriaga"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            codice="10659740"
            info="EIT Digital HCID"
            mail="amir.bachir@mail.polimi.it"
            img="foto amir.png"
            name="Amir Bachir"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            codice="10659997"
            info="EIT Digital HCID"
            mail="gabriele.carollo@mail.polimi.it"
            img="foto_GAB.jpg"
            name="Gabriele Carollo"
          />
        </td>
      </tr>
      <tr>
        <h2>The teachers</h2>
      </tr>
      <tr>
        <td>
          <person-component
            class="person-component"
            info="Professor"
            mail="franca.garzotto@polimi.it"
            img="prof_garzotto.png"
            name="Franca Garzotto"
          />
        </td>

        <td>
          <person-component
            class="person-component"
            info="Teaching assistant"
            mail="lukas.moskwa@polimi.it"
            img="Luke.png"
            name="Lukas Moskwa"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            info="Teaching assistant"
            mail="alberto.patti@polimi.it"
            img="alberto_patti.png"
            name="Alberto Patti"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            info="Project tutor"
            mail="mattia.gianotti@polimi.it"
            img="mattia_gianotti.png"
            name="Mattia Gianotti"
          />
        </td>
        <td>
          <person-component
            class="person-component"
            info="Project tutor"
            mail="giulioantonio.abbo@polimi.it"
            img="giulio_abbo.png"
            name="Giulio Antonio Abbo"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import PersonComponent from '~/components/Person.vue'

export default {
  name: 'ContactUsPage',
  head() {
    return {
      title: 'Contact us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'this page contains the contact information about the team which worked on this project and their teachers'
        }
      ]
    }
  },
  components: {
    PersonComponent,
  },
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

/* #face {
  min-width: 10 rem ;
} */
td {
  display: inline-block;
  padding: 1.3vw;
  /* text-align: left; */
  margin-right: 2rem;
}

person-component {
  text-align: center;
}

@media all and (max-width: 500px) {
  .person-component {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

</style>
