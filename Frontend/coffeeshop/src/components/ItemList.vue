<template>
    <div class="container">
        <div class="row">
            <div v-for='item in items' v-bind:key="item.id">
                <div class="col-sm">
                    <item v-bind:coffee="item" />
                </div>  
            </div>
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