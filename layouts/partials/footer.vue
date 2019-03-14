<template>
  <footer id="footer">
    <p class="copyright">&copy; {{ footer.text }}
      Made by <a class="blank" href="http://revert.pl" title="Web Developer">Revert</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
  </footer>
</template>

<script>
export default {
  computed: {
    footer() {
      return this.$store.state.config.footer.acf;
    }
  }
}
</script>

<style>

</style>
