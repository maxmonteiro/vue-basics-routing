<template>
    <div>
        <h1>Users component</h1>
        <p>User ID is {{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    watch: {
        '$route' (to, from) {
            alert(to.params.id)
        }
    },
    created() {
        alert(this.$route.params.id)
    }
}
</script>
