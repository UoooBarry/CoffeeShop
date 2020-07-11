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
      items: [
        {
          id: 1,
          title: 'Long white',
          description: 'Nice white'
        },
        {
          id: 2,
          title: 'Cappcaino',
          description: 'Nice one'
        }
      ]
    }
  }
}
</script>
