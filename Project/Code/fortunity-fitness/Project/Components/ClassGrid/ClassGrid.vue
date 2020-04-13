<template>
    <div class="module-bordered class-grid">
        <a href="#" class="class-grid__box class-grid__box--one">
            <div class="class-grid__box-overlay">
                <div class="class-grid__box-text">
                    <div class="class-grid__box-text--title">
                        High Intensity Interval Training
                    </div>
                    <div class="class-grid__box-text--content">

                    </div>
                </div>
            </div>
        </a>
        <a href="#" class="class-grid__box class-grid__box--two">
            <div class="class-grid__box-overlay">
                <div class="class-grid__box-text">
                    <div class="class-grid__box-text--title">
                        Circuit Classes
                    </div>
                    <div class="class-grid__box-text--content">
                        
                    </div>
                </div>
            </div>
        </a>
        <a href="#" class="class-grid__box class-grid__box--three">
            <div class="class-grid__box-overlay">
                <div class="class-grid__box-text">
                    <div class="class-grid__box-text--title">
                        All Out Abs
                    </div>
                    <div class="class-grid__box-text--content">
                        
                    </div>
                </div>
            </div>
        </a>
        <a href="#" class="class-grid__box class-grid__box--four">
            <div class="class-grid__box-overlay">
                <div class="class-grid__box-text">
                    <div class="class-grid__box-text--title">
                        Padwork Classes
                    </div>
                    <div class="class-grid__box-text--content">
                        
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ClassGrid'
}
</script>

<style lang="scss">

.class-grid {
    border-radius: 1rem;
    
    @include large-screen() {
        display: flex;
        flex-wrap: wrap;
    }

    &__box {
        $box: &;

        height: 20rem;
        text-decoration: none;
        background-position: center;
        background-size: cover;
        transition: 0.5s;

        @include medium-screen() {
            height: 35rem;
        }

        @include large-screen() {
            width: 50%;
        }

        &:hover {
            background-size: auto;

            #{$box}-text {
                opacity: 1;
                color: white;
            }

            #{$box}-overlay {
                background: none;
            }
        }

        &-overlay {
            transition: 1s;
            width: 100%;
            height: 100%;
            background: linear-gradient($color-navy-light-50-opacity, $color-navy-light-65-opacity);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-text{
            transition: 1s;
            opacity: 0.5;
            color: $color-navy-dark;

            &--title {
                font-style: italic;
                text-transform: uppercase;
                font-size: 1.25rem;
                font-weight: bold;
            }
        }

        &--one {
            background-image: url(https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80)
        }
        &--two {
            background-image: url(https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)
        }
        &--three {
            background-image: url(https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)
        }
        &--four {
            background-image: url(https://images.unsplash.com/photo-1583187856683-dddad0e87f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)

        }
    }    
}

</style>