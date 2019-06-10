<template>
  <div id="start">
  <b-jumbotron>
    <template slot="header">MyDoctor</template>

    <template slot="lead">
      Aplikacja służąca do obsługi przychodni.
    </template>

    <b-button variant="primary" href="home">Zaloguj</b-button>
  </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class Start extends Vue {
}
</script>
<style scoped>
#start {
}
.jumbotron{
  margin-bottom:0px;
}
</style>
