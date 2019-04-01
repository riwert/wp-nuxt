<template>
  <footer id="footer">
    <p class="copyright">&copy; {{ footer.text }}<br>
      Made by <a class="blank" href="http://revert.pl" title="Web Developer">Revert</a>. Design: <a class="blank" href="https://html5up.net">HTML5 UP</a>.</p>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getConfig']),
    footer() {
      return this.getConfig('footer');
    }
  }
}
</script>

<style>

</style>
