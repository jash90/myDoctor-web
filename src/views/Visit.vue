<template>
  <div id="visit">
    <h1>Wizyty</h1>
    <div class="searchBar">
      <b-button variant="primary">Dodaj</b-button>
      <b-button variant="secondary" disabled>Edytuj</b-button>
      <b-button variant="danger" disabled>Usuń</b-button>
    </div>
    <div class="searchBar">
      <b-form-select v-model="selectedDoctor" :options="optionsDoctor" class="col-3"></b-form-select>
      <b-form-input v-model="date" type="date" class="col-3"></b-form-input>
      <b-form-select v-model="selectedPantient" :options="optionsPantient" class="col-3"></b-form-select>
    </div>
    <b-table
      selectable
      select-mode="single"
      @row-selected="rowSelected"
      striped
      hover
      small
      fixed
      :items="items"
      :fields="fields"
    ></b-table>
    <b-pagination v-model="id" total-rows="10" per-page="1" class="my-0"></b-pagination>
  </div>
</template>

<script>
export default {
  name: "visit",
  components: {},
  data: () => {
    return {
      fields: {
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
      },
      items: [
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
      ],
      selectedDoctor: null,
      optionsDoctor: [
        { value: null, text: "Filtruj wg lekarza" },
        { value: "Kowalski Jan", text: "Kowalski Jan" },
        { value: "Majewski Jan", text: "Majewski Jan" }
      ],
      selectedPantient: null,
      optionsPantient: [
        { value: null, text: "Filtruj wg pacjenta" },
        { value: "Nowak Janusz", text: "Nowak Janusz" },
        { value: "Kowalski Janusz", text: "Kowalski Janusz" }
      ],
      date: null
    };
  }
};
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
.button-container {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 0px;
}
</style>
