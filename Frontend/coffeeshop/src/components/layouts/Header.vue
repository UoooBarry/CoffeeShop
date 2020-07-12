<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Barry's coffee shop</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-bind:class="{'nav-item active': getActive('home')}">
                        <router-link to="/" class="nav-link" >Home</router-link>
                    </li>
                    <li class="nav-item" v-bind:class="{'nav-item active': getActive('about')}">
                        <router-link to="/about" class="nav-link" >About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        getActive(expected){
            if (expected == this.$route.name) return true;
            return false;
        }
    }
}

</script>