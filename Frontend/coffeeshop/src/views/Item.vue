<template>
    <div>
        <ItemDisplay />
    </div>
</template>

<script>
import ItemDisplay from '../components/ItemDisplay'

export default {
    name: 'Display',
    props: ['id'],
    components: {
        ItemDisplay
    }
}
</script>