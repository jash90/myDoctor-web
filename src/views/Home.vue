<template>
  <div id="home">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-row>
            <H1>Lekarze</H1>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Lista lekarzy</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Dodaj lekarza</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Edytuj/Usuń lekarza</b-button>
          </b-row>
             <b-row>
            <b-button block variant="outline-primary">Zmień harmonogram</b-button>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <H1>Pacjenci</H1>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Lista pacjentów</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Dodaj pacjenta</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Edytuj/Usuń pacjenta</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Lista wizyt</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Dodaj wizytę</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Edytuj/Usuń wizytę</b-button>
          </b-row>
        </b-col>
              <b-col>
          <b-row>
            <H1>Użytkownicy</H1>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Lista użytkowników</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Dodaj użytkownika</b-button>
          </b-row>
          <b-row>
            <b-button block variant="outline-primary">Edytuj/Usuń użytkownika</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>
<style>
#home {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
    margin: 10px;
}
.row{
    padding: 5px;
}
</style>
