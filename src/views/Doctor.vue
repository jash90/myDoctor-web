<template>
  <div id="doctor">
    <h1>Lekarze</h1>
    <div class="searchBar">
      <b-button variant="primary">Dodaj</b-button>
      <b-button variant="secondary" disabled>Edytuj</b-button>
      <b-button variant="danger" :disabled="selected.length === 0" @click="showMsgBoxTwo">Usuń</b-button>
    </div>
    <div class="searchBar">
      <b-form-input v-model="selectedNumber" placeholder="Podaj numer" type="number" class="col-3"></b-form-input>
      <b-form-input v-model="selectedFirstname" placeholder="Podaj imię" type="text" class="col-3"></b-form-input>
      <b-form-input
        v-model="selectedLastname"
        placeholder="Podaj nazwisko"
        type="text"
        class="col-3"
      ></b-form-input>
      <b-form-input
        v-model="selectedSpecialization"
        placeholder="Podaj specjalizację"
        type="text"
        class="col-3"
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
  name: "doctor",
  components: {},
  data: () => {
    return {
      fields: {
        numberPwz: {
          label: "Numer PWZ",
          sortable: true
        },
        firstname: {
          label: "Imię",
          sortable: true
        },
        lastname: {
          label: "Nazwisko",
          sortable: true
        },
        specialization: {
          label: "Specjalizacja",
          sortable: true
        }
      },
      items: [
        {
          numberPwz: "1234567",
          firstname: "Janusz",
          lastname: "Nowak",
          specialization: "interna"
        },
        {
          numberPwz: "1334567",
          firstname: "Jan",
          lastname: "Kowalski",
          specialization: "urolog"
        }
      ],
      selectedNumber: 0,
      selectedFirstname: "",
      selectedLastname: "",
      selectedSpecialization: "",
      selected: []
    };
  },
  methods: {
    rowSelected(items) {
      this.selected = items;
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      const { firstname, lastname, numberPwz } = this.selected[0];
      this.$bvModal
        .msgBoxConfirm(
          `Czy chcesz usunąć pana doktora ${firstname} ${lastname} o numerze PWZ ${numberPwz} ?`,
          {
            title: "Usuwanie lekarza",
            size: "sm",
            buttonSize: "sm",
            okVariant: "secondary",
            cancelVariant: "primary",
            okTitle: "Usuń",
            cancelTitle: "Nie",
            footerClass: "p-2",
            hideHeaderClose: true,
            centered: true
          }
        )
        .then(value => {
          this.boxTwo = value;
        })
        .catch(() => {
          // An error occurred
        });
    }
  }
};
</script>
<style>
#doctor {
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
