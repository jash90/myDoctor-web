<template>
  <div id="visit">
    <b-table striped hover small :items="items" :fields="fields"></b-table>
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
      label: "Opis",
    }
  };
  items = [
    {
      doctor: "Kowalski Jan",
      date: '12:00:00 10.05.1994',
      pantient: "Nowak Janusz",
      description: "-"
    },
  {
      doctor: "Majewski Jan",
      date: '13:00:00 02.05.1994',
      pantient: "Nowak Janusz",
      description: "-"
    },
  ];
}
</script>
<style>
#visit {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
