<template>
    <div class="module-contained">
        <div class="three-collumn-text">
            <div class="three-collumn-text__collumn three-collumn-text__collumn-one">
                <div class="three-collumn-text__collumn-heading">
                    <slot name="heading-one" />
                </div>
                <slot name="content-one" />
            </div>
            <div class="three-collumn-text__collumn three-collumn-text__collumn-two">
                <div class="three-collumn-text__collumn-heading">
                    <slot name="heading-two" />
                </div>
                <slot name="content-two" />
            </div>
            <div class="three-collumn-text__collumn three-collumn-text__collumn-three">
                <div class="three-collumn-text__collumn-heading">
                    <slot name="heading-three" />
                </div>
                <slot name="content-three" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreeCollumnText'
}
</script>

<style lang="scss">

.container {
    height: 90vh;
    padding: 1rem;
}

.three-collumn-text {
    border-radius: 0.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;

    @include medium-screen() {
        flex-direction: row;
    }

    &__collumn {
        margin-bottom: 1.5rem;
        font-size: 1rem;

        @include medium-screen() {
            max-width: 24rem;
            margin: 0 1rem;
        }
        
        &-heading {
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
    }
}

</style>