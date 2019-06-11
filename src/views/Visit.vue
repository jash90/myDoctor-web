<template>
  <div id="visit">
    <div class="searchBar">
      <b-form-select v-model="selectedDoctor" :options="optionsDoctor" class="col-3"></b-form-select>
      <b-form-select v-model="selectedPantient" :options="optionsPantient" class="col-3"></b-form-select>
      <b-button variant="primary">Filtruj</b-button>
    </div>
    <b-table striped hover small fixed :items="items" :fields="fields"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Visit extends Vue {
  fields = {
    doctor: {
      label: "Doktor",
      sortable: true
    },
    date: {
      label: "Godzina i data wizyty",
      sortable: true
    },
    pantient: {
      label: "Nazwisko i imię pacjenta",
      sortable: true
    },
    description: {
      label: "Opis"
    }
  };
  items = [
    {
      doctor: "Kowalski Jan",
      date: "12:00:00 10.05.1994",
      pantient: "Nowak Janusz",
      description: "-"
    },
    {
      doctor: "Majewski Jan",
      date: "13:00:00 02.05.1994",
      pantient: "Kowalski Janusz",
      description: "-"
    }
  ];
  selectedDoctor = null;
  optionsDoctor = [
    { value: null, text: "Filtruj wg lekarza" },
    { value: "Kowalski Jan", text: "Kowalski Jan" },
    { value: "Majewski Jan", text: "Majewski Jan" }
  ];
  selectedPantient = null;
  optionsPantient = [
    { value: null, text: "Filtruj wg pacjenta" },
    { value: "Nowak Janusz", text: "Nowak Janusz" },
    { value: "Kowalski Janusz", text: "Kowalski Janusz" }
  ];
}
</script>
<style>
#visit {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.searchBar {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px 0px;
}
</style>
