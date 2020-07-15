<template>
    <form @submit.prevent="order" class="row">
        <div class="col">
            <div class="container">
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" v-model="name" name="name" id="name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="contact">Contact: </label>
                    <input type="number" v-model="contact" name="contact" id="contact" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="address">Address: </label>
                    <input type="text" v-model="address" name="address" id="address" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="container">
                <ItemSumary v-bind:item="$session.get('order')"/>
              
            </div>
        </div>
        
        </form>
</template>


<script>
import ItemSumary from './ItemSumary';

export default {
    name: "Checkout",
    components:{
        ItemSumary
    },
    data(){
        return{
            name: '',
            contact: '',
            address: ''
        }
    },
    methods: {
        order() {
            let id = this.$session.get('order').id;
            let delivery = this.$session.get('order').delivery;
            delivery = (delivery === "delivery") ? true : false;
            this.$axios.post(`${this.$orderAPIUrl}/create`,{
                name: this.name,
                items: [id],
                delivery: delivery,
                address: this.address,
                contact: this.contact
            })
                .then(
                    (response) => {
                        if(response.data.message === "fail") {
                            response.data.errors.forEach(error => {
                                this.flashMessage.error({title: 'Order detail', message: error});
                                console.log(error);
                            });
                            return; 
                        }

                        this.flashMessage.success({title: 'Order placed!', message: "Order confirmed! Your coffee is comming"});
                        this.$router.push({name: "home"});
                        
                    }
                )
                .catch(
                    err => console.log(err)
                );

        }
    }
}
</script>

