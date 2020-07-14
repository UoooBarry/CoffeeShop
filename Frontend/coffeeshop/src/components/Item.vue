<template>
    <div class="coffee-card">
        <div class="card" style="width: 18rem; min-height: 400px;">
            <img src="../assets/images/coffee-sample.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{coffee.title}}</h5>
                <p class="card-text">{{coffee.description}}</p>
                <router-link :to="{name: 'ItemDisplay', params: { id }}" class="btn btn-primary">Order</router-link> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['coffee'],
    data() {
        return {
            id: this.coffee._id
        }
    }
}
</script>

<style scoped>
.coffee-card{
    margin-top: 10px;
}
</style>