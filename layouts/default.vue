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
  mounted: function() {
    require('../static/js/util.js')
    require('../static/js/main.js')
  }
}
</script>

<style>

</style>
