<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand :href="logging?'/home':'/'">MyDoctor</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav v-if="logging">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{login}}</em>
            </template>
            <b-dropdown-item @click="logout">Wyloguj</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <div class="footer">© 2018 Copyright: Szymon Zimny i Miłosz Winnicki</div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "app",
  components: {},
  data: () => {
    return {
      logging :false,
      login:''
    };
  },
   mounted() {
    if (localStorage.login) {
      this.login = localStorage.login;
    }
    if (localStorage.logging) {
      this.logging = localStorage.logging;
    }
  },
  methods: {
    logout() {
      localStorage.logging = this.logging;
      localStorage.login = this.login;
      this.$router.push("/");
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
</style>
