<template>
  <div class="checkout">
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