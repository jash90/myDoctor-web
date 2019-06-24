<template>
  <div id="schedule">
    <h1>Harmonogram</h1>
    <div class="form">
      <b-form-input list="my-list-id" v-model="selected" @change="getSchedule"></b-form-input>
      <datalist id="my-list-id">
        <option v-for="size in items" v-bind:key="size.id">{{ size.firstname + ' '+size.lastname}}</option>
      </datalist>
      <div class="searchBar">
        <b-button variant="primary" :disabled="!!selectedSchedule" @click="add">Dodaj</b-button>
        <b-button variant="secondary" :disabled="!selectedSchedule" @click="edit">Edytuj</b-button>
        <b-button variant="danger" :disabled="!selectedSchedule" @click="remove">Usuń</b-button>
      </div>
      <b-table
        ref="table"
        selectable
        select-mode="single"
        striped
        hover
        small
        fixed
        :items="schedules"
        :fields="fields"
        show-empty
        @row-selected="select"
      >
        <template slot="dayOfWeek" slot-scope="data">{{ days[data.item.dayOfWeek] }}</template>
      </b-table>
    </div>
    <b-modal
      title="Edycja harmonogramu"
      centered
      no-close-on-backdrop
      no-close-on-esc
      v-model="visible"
    >
      <div>
        <b-form-select class="mb-3" v-model="dayOfWeek" :options="optionsDays"></b-form-select>
        <b-form-select :options="options" class="mb-3" v-model="hourOpen"></b-form-select>
        <b-form-select :options="secondOption" class="mb-3" v-model="hourClose"></b-form-select>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "login",
  components: {},
  computed: {
    secondOption() {
      return this.options.filter(item => item.value > this.hourOpen);
    },
    optionsDays() {
        return this.daysWeek.filter(
          item =>
            item.value === this.dayOfWeek ||
            !this.schedules
              .map(schedule => schedule.dayOfWeek)
              .includes(item.value)
        );
    }
  },
  data: () => {
    return {
      fields: {
        dayOfWeek: {
          label: "Dzień tygodnia"
        },
        hourOpen: {
          label: "Godzina rozpoczęcia"
        },
        hourClose: {
          label: "Godzina zakończenia"
        }
      },
      daysWeek: [
        { value: 0, text: "Poniedziałek" },
        { value: 1, text: "Wtorek" },
        { value: 2, text: "Środa" },
        { value: 3, text: "Czwartek" },
        { value: 4, text: "Piątek" },
        { value: 5, text: "Sobota" },
        { value: 6, text: "Niedziela" }
      ],
      items: [],
      selected: "",
      schedules: [],
      visible: false,
      days: [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela"
      ],
      options: [],
      dayOfWeek: -1,
      hourOpen: 0,
      hourClose: 0,
      selectedSchedule: null
    };
  },
  methods: {
    select(items) {
      this.selectedSchedule = items[0];
    },
    remove() {
      const { dayOfWeek } = this.selectedSchedule;
      this.$bvModal
        .msgBoxConfirm(
          `Czy chcesz usunąć harmonogram ${this.days[dayOfWeek]} ?`,
          {
            title: "Usuwanie harmonogramu",
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
          if (value) {
            const index = this.items.findIndex(item => item === this.selected);
            if (index > -1) this.items.splice(index, 1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    edit() {
      const { dayOfWeek, hourOpen, hourClose } = this.selectedSchedule;
      this.dayOfWeek = dayOfWeek;
      this.hourOpen = Number(hourOpen.split(":")[0]);
      this.hourClose = Number(hourClose.split(":")[0]);
      this.visible = true;
    },
    add() {
      this.visible = true;
    },
    cancel() {
      this.hourOpen = 0;
      this.hourClose = 0;
      this.dayOfWeek = -1;
      this.selectedSchedule = null;
    },
    async ok() {},
    getSchedule() {
      if (this.selected.length > 0) {
        const split = this.selected.split(" ");
        const firstname = split[0];
        const lastname = split[1];
        const index = this.items.findIndex(
          item => item.firstname === firstname && item.lastname === lastname
        );
        const item = this.items[index];
        this.$api
          .get(`schedule/search/${item.id}`)
          .then(response => {
            this.schedules = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    loadDoctors() {
      this.$api
        .get(`alldoctors`)
        .then(response => {
          this.items = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    createdOptions() {
      for (let i = 8; i <= 22; i++) {
        this.options.push({ value: i, text: `${i < 10 ? "0" : ""}${i}:00:00` });
      }
    }
  },
  created() {
    this.loadDoctors();
    this.createdOptions();
  }
};
</script>
<style scoped>
#schedule {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
