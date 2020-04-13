<template>
    <div class="module-bordered">
        <div class="landing-header">
            <div class="landing-header__content-container">
                <div class="landing-header__title">
                    <div class="landing-header__title--content">
                        Matty J Phelan presents.. 
                    </div>
                </div>
                <div class="landing-header__tagline">
                    <div class="landing-header__tagline-content">
                        <strong>The Professional's Guide to Staying Fit</strong>
                    </div>
                </div>
            </div>
            <div class="landing-header-icon landing-header__statistic landing-header__statistic-client">
                <strong>144</strong> / happy clients
            </div>
            <div class="landing-header__statistic landing-header__statistic-classes">
                <div class="landing-header-icon landing-header__statistic-classes--padwork">
                    <strong>98</strong> / padwork classes given
                </div>
                <div class="landing-header-icon landing-header__statistic-classes--circuits">
                    <strong>102</strong> / circuit classes given
                </div>
            </div>
            <scroll-icon class="landing-header__scroll-icon"/>
        </div>
    </div>
</template>

<script>
import ScrollIcon from '../../assets/ScrollIcon'

export default {
    name: 'LandingHeader',
    components: {
        ScrollIcon
    }
}
</script>

<style lang="scss">

.landing-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
    border-radius: 0.5rem 0.5rem 0 0;
    animation: backgroundMove 2s ease;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
                        $color-navy-light-50-opacity,
                        $color-navy-light-65-opacity
                    ), 
                    url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80);
    
    &__content-container {
        color: white;
        border-radius: 0.5rem;
        height: 50vh;
        padding: 3.5vh;
        letter-spacing: 6px;
        text-align: center;
        max-width: 24rem;

        @include medium-screen() {
            padding: 3vh;
            max-width: 30rem;
        }
    }

    &__title {
        font-size: $font-size-2;
        font-family: $font-accents;
        font-weight: 100;
        letter-spacing: $spacing-0;
        padding: $spacing-4 0;
        animation: 1s ease-out 0s 1 slideInFromLeft;
    }

    &__tagline {
        text-transform: uppercase;
        font-size: $font-size-3;
        animation: 1s ease-out 0s 1 slideInFromRight;
    }

    &-icon {
        &::before {
            content: '';
            background-image: url($i-add);
            display: inline-flex;
            align-items: center;
            width: $spacing-3;
            height: $spacing-3;
            margin-right: $spacing-2;
            border-radius: 12px;
            background-color: $color-navy-dark;
        }
    }

    &__statistic {
        position: absolute;
        display: flex;
        align-items: center;
        left: 2.25rem;
        padding: .75em;
        bottom: 7.5rem;
        transform: rotate(-90deg);
        transform-origin: 0 50%;
        white-space: nowrap;
        animation: 4s fadeInOut ease-in infinite;

         @include medium-screen(){
            left: 3.5rem;
        }
        
        &-classes {
            left: calc(100% - 2.25rem);

            @include medium-screen(){
                left: calc(100% - 3.5rem);
            }

            &--padwork {
                display: flex;
                align-items: center;
            }

            &--circuits {
                display: flex;
                align-items: center;
                padding-left: 2rem;
            }

        }
    }

    &__scroll-icon {
        position: absolute;
        bottom: 7.5rem;
    }
}

</style>