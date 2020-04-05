<template>
    <div class="module module-container landing-header">
        <div class="landing-header__title">
            Matty J Phelan
        </div>
        <div class="landing-header__description">
            - Personal Trainer
            - Sofware developer
            - Nutrition advice
            - Absolute legend
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingHeader'
}
</script>

<style lang="scss">

.landing-header {
    min-height: 250px;
    display: flex;
    justify-content: center;
    background-image: linear-gradient($color-navy-dark, $color-navy-light);
    color: $color-gold-main;
    border-radius: 100% 0% 50% 50% / 0% 100% 0% 100% ;

    &__title {
        width: 50%;
        margin: auto;
    }

    &__description {
        width: 50%;
        margin: auto;
    }
}

</style>