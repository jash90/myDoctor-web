<template>
  <div id="app">
    <b-navbar type="dark" >
      <b-navbar-brand :href="isLogged?'/home':'/'">MyDoctor</b-navbar-brand>
      <b-button @click="logout" v-if="isLogged">Wyloguj</b-button>
    </b-navbar>
    <router-view/>
    <div class="footer">© 2018 Copyright: Szymon Zimny i Miłosz Winnicki</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["isLogged"]),
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
#app {
}
.footer {
  padding: 20px;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #18a2b8;
}
.navbar{
  background: #18a2b8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
