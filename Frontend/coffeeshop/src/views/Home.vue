<template>
  <div class="home">
   <itemlist v-bind:items="items" />  
  </div>
</template>

<script>
// @ is an alias to /src
import itemlist from "../components/ItemList";

export default {
  name: 'Home',
  components: {
   itemlist
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$axios.get(this.$coffeeAPIUrl)
                .then(result => this.items = result.data.coffee)
                .catch(err => console.log(err));
  }
}
</script>
