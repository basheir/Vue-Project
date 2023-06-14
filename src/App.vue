<template>
  <div>
    <!-- Header Navbar -->
    <Navbar></Navbar>
    <!-- Route view -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar.vue'
export default {

  components: {
    Navbar
  },
  mounted() {
    console.warn('App root component mounted')
  }
}

</script>