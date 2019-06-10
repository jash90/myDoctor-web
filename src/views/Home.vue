<template>
  <div id="home">
  <b-jumbotron>
    <template slot="header">MyDoctor</template>

    <template slot="lead">
      Aplikacja służąca do obsługi przychodni.
    </template>

    <b-button variant="primary" href="login">Zaloguj</b-button>
  </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
<style scoped>
#home {
}
.jumbotron{
  margin-bottom:0px;
}
</style>
