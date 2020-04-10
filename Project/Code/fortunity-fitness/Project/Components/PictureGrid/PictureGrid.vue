<template>
    <div class="container">
        <div class="picture-grid">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PictureGrid'
}
</script>

<style lang="scss">

.container {
    height: 90vh;
    padding: 1rem;
}

.picture-grid {
    border-radius: 10px;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80);
}

</style>