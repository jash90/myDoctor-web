<template>
  <div id="table">
    <h1>{{title}}</h1>
    <div class="searchBar">
      <b-button variant="primary">Dodaj</b-button>
      <b-button variant="secondary" disabled>Edytuj</b-button>
      <b-button variant="danger" disabled>Usuń</b-button>
    </div>
    <div class="searchBar">
      <b-form-input
        v-for="(item, index)  in fields"
        v-bind:key="index"
        :type="item.type"
        v-model="items[index]"
        :placeholder="item.label"
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
    <b-pagination v-model="id" :total-rows="totalRow" :per-page="perPage" class="my-0"></b-pagination>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    title: String,
    totalRow: Number,
    perPage: Number,
    fields: Object,
    items: Array,
    selectedRow: Object,
    filtered: Array
  },
  methods: {
    rowSelected(item) {
      this.selectedRow = item;
    }
  }
};
</script>

<style scoped>
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
