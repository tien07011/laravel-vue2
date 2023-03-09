<template>
    <img :src="image_background"/>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            types: ["sky", "beach", "sea", "mountain", "home", "city", "dog", "house", "train", "cat", "thor", "spiderman", "forest",],
        }
    },
    created() {
        this.image_background = "https://source.unsplash.com/random/1920x1080/?" + this.types[Math.floor(Math.random() * this.types.length)]
    }
}
</script>

<style lang="scss" scoped>

</style>
