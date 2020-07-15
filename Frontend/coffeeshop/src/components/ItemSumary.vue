<template>
     <div class="summary">
        <h3>Order summary</h3>
        <hr>
        <span class="pair"> {{ item.title }} </span>
        <span class="pair right"> ${{ item.price }} </span>
        <hr>
        <span class="pair left"> Delivery </span>
        <span class="pair right"> {{ item.delivery }} </span>
         <input type="submit" class="btn-add_to_cart" value="Confirm my order" />
    </div>
</template>

<script>
export default {
    name: 'ItemSumary',
    props: ['item']
}
</script>

<style scoped>
.summary{
    -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    padding: 20px;
    border-radius: 8px;
    background-color: rgb(247, 247, 247);


    margin-bottom: 128px;
    width: 80%;
    float: left;
}

.pair{
    display: inline-block;
    min-width: 60px;
    margin-right: 10px;
}

.pair.left{
    font-weight: bold;
}

.pair.right{
    float: right;
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