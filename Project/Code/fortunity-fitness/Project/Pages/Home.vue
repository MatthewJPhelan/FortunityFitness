<template>
  <div>
    <landing-header />  
    <full-width-signature />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LandingHeader from '@/Components/LandingHeader/LandingHeader.vue'
import FullWidthSignature from '@/Components/FullWidthSignature/FullWidthSignature.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    LandingHeader,
    FullWidthSignature
  }
})
</script>
