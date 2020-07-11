<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="../assets/logo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{coffee.title}}</h5>
                <p class="card-text">{{coffee.description}}</p>
                <a href="#" class="btn btn-primary">Order</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['coffee'],
    created() {
        console.log(this.coffee);
    }
}
</script>