<template>
  <!-- Wrapper -->
    <div id="wrapper">

      <!-- Main -->
        <Main />

      <!-- Sidebar -->
        <Sidebar />

    </div>
</template>

<script>
import Main from './partials/main';
import Sidebar from './partials/sidebar';

export default {
  components: {
    Main,
    Sidebar
  },
  mounted() {
    require('../static/js/util')
    require('../static/js/main')
  }
}
</script>

<style>

</style>
