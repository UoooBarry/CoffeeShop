<template>
    <div class="container">
        <div v-for='item in items' v-bind:key="item.id">
            <item v-bind:coffee="item" />  
        </div>
    </div>
</template>

<script>
import Item from './Item';

export default {
    name: "Items",
    components:{
       Item
    },
    props: ["items"]
}
</script>