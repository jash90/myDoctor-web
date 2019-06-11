<template>
  <div id="visit">
    <h1>Pacjenci</h1>
    <div class="searchBar">
      <b-button variant="primary">Dodaj</b-button>
      <b-button variant="secondary" disabled>Edytuj</b-button>
      <b-button variant="danger" disabled>Usuń</b-button>
    </div>
    <div class="searchBar">
      <b-form-input v-model="selectedFirstname" placeholder="Podaj imię" type="text"></b-form-input>
      <b-form-input
        v-model="selectedLastname"
        placeholder="Podaj nazwisko"
        type="text"
      ></b-form-input>
      <b-form-input
        v-model="selectedStreet"
        placeholder="Podaj ulicę"
        type="text"
      ></b-form-input>
          <b-form-input
        v-model="selectedCity"
        placeholder="Podaj ulicę"
        type="text"
      ></b-form-input>
          <b-form-input
        v-model="selectedPostcode"
        placeholder="Podaj kod pocztowy"
        type="text"
      ></b-form-input>
         <b-form-input
        v-model="selectedPhone"
        placeholder="Podaj telefon"
        type="number"
      ></b-form-input>
         <b-form-input
        v-model="selectedPesel"
        placeholder="Podaj pesel"
        type="number"
      ></b-form-input>
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
        firstname: {
          label: "Imie",
          sortable: true
        },
        lastname: {
          label: "Nazwisko",
          sortable: true
        },
        street: {
          label: "Ulica",
          sortable: true
        },
        city: {
          label: "Miejscowość",
          sortable: true
        },
        postcode: {
          label: "Kod pocztowy",
          sortable: true
        },
        phone: {
          label: "Telefon",
          sortable: true
        },
        pesel: {
          label: "Pesel",
          sortable: true
        }
      },
      items: [
        {
          firstname: "Janusz",
          lastname: "Trasz",
          street: "Daszyńskiego 30",
          city: "Kraków",
          postcode: "31-521",
          phone: "123456789",
          pesel: "12365445123"
        },
        {
          firstname: "Jan",
          lastname: "Wójcik",
          street: "Dmowskiego 30",
          city: "Kraków",
          postcode: "31-521",
          phone: "123456589",
          pesel: "12365435123"
        }
      ]
    };
  }
};
</script>
<style>
#pantient {
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
