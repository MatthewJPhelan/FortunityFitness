<template>
    <div class="scroll-icon">
        <div class="scroll-icon__animation"></div>
    </div>
</template>

<script>
export default {
    name: 'ScrollIcon'
}
</script>

<style lang="scss">
    @keyframes fingerTrack {
        0%{opacity: 0; top: 20%;}
        20%{opacity: 0.5; top: 20%;}
        30%{opacity: 1; top: 10%;}
        80%{opacity: 1; top: 80%;}
        100%{opacity: 0; top: 85%;}
    }

    .scroll-icon {
        display: flex;
        justify-content: center;
        height: 1.75rem;
        width: 1rem;
        border: 1.5px solid white;
        border-radius: 12px;

        &__animation {
            position: relative;
            width: 2px;
            height: 2px;
            border: 1px solid white;
            border-radius: 2px;
            animation: 1.5s fingerTrack infinite
        }
    }
</style>