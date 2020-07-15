<template>
    <div class="container" style="display: block;">
        <div class="row">
            <div class='col'>
                <img src="../assets/images/coffee-sample.png" class="coffee-image" alt="...">
            </div>
            <div class='col'>
                <div class="summary">
                    <div class="intro">
                        <h1>{{ item.title }}</h1>
                        <p>{{ item.description }}</p>
                        <span class="pair left">Price: </span>
                        <span class="pair">{{ item.price }}</span>
                        <hr>
                        <form @submit.prevent="order">
                            <span class="pair left">Order way: </span>
                            <select class="form-control" name="delivery" v-model="delivery">
                                <option value="delivery">Delivery</option>
                                <option value="order">Order</option>
                            </select>
                            <input type="submit" class="btn-add_to_cart" value="Place my order" />
                        </form>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemDisplay',
    props: ['id'],
    data() {
        return{
            item: [],
            delivery: 'delivery'
        }
    },
    created() {
        this.$axios.get(`${this.$coffeeAPIUrl}/${ this.$route.params.id}`)
                    .then(result => this.item = result.data)
                    .catch(err => console.log(err));
    },
    methods: {
        order() {
            //this.delivery = (this.delivery === "delivery") ? true : false;

            const order = {
                id: this.item._id,
                title: this.item.title,
                delivery: this.delivery,
                price: this.item.price
            }

            this.$session.set('order', order);
            this.$router.push({name: 'Checkout'});
        }
    }
}
</script>

<style scoped>
.coffee-image{
    flex-shrink: 0;
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    margin-top: 20px;
    vertical-align: middle;
    border-style: none;
}

.summary{
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    padding: 64px;
    border-radius: 8px;
    background-color: #fff;

    margin-top: 48px;
    margin-bottom: 128px;
    width: 80%;
    float: left;
    background-color: #ffffff;
}

.background{
    margin-top: 1px;
    position: absolute;
    top: 0;
    left: -25%;
    right: -25%;
    padding-top: 80%;
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.2)));
    background-image: linear-gradient(transparent,rgba(0,0,0,.2));
    background-repeat: no-repeat;
    background-size: cover;
    border-color: transparent transparent #fff;
    border-radius: 0 0 50% 50%/0 0 25% 25%;
    -webkit-transition: .5s;
    transition: .5s;
}

.intro{
    margin: 16px 0;
    text-transform: uppercase;
    letter-spacing: .125rem;
}

.pair{
    display: inline-block;
    min-width: 60px;
    margin-right: 10px;
}

.pair.left{
    font-weight: bold;
}

.btn-add_to_cart{
    padding: 2px 64px 0;
    font-size: .875rem;
    height: 56px;
    margin-top: 32px;
    width: 100%;
    padding: 2px 8px 0;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    padding: 2px 24px 0;
    border-radius: 8px;
    color: #000;
    border: 1px solid;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    text-transform: uppercase;
    text-align: center;
    font-family: AvenirLTStd-Black;
    text-decoration: none;
    font-size: .75rem;
    letter-spacing: .125rem;
    cursor: pointer;
    background-color: transparent;
}
</style>