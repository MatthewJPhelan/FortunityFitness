<template>
    <div class="container">
        <div class="full-width-signature">
            <div class="full-width-signature__handwritten">
                <signature class="full-width-signature__handwritten"/>
            </div>
        </div>
    </div>
</template>

<script>
import Signature from '../../assets/Signature.vue';

export default {
    name: 'FullWidthSignature',
    components: {
        Signature
    }
}
</script>

<style lang="scss">
    .full-width-signature {
        width: 100%;
        height: 100px;

        &__handwritten {
            display: flex;
            justify-content: center;
            height: inherit;

            &>svg {
                max-width: 7rem;
                height: inherit;
            }
        }
    }
</style>