<template>
  <div class="checkout">
    <h1>This is a checkout page</h1>
    <Checkout />
  </div>
</template>

<script>
import Checkout from '../components/Checkout';

export default {
  components:{
    Checkout
  },
  create() {
    if(!this.$session.get('cart')) this.$router.push({name: 'home'});
  }
}
</script>