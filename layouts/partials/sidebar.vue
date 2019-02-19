<template>
  <div id="sidebar">
    <div class="inner">

      <!-- Search -->
        <Search />

      <!-- Menu -->
        <Nav :pages="pages" />

      <!-- Section -->
        <section>
          <header class="major">
            <h2>Ante interdum</h2>
          </header>
          <div class="mini-posts">
            <article>
              <a href="#" class="image"><img src="/images/pic07.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" class="image"><img src="/images/pic08.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" class="image"><img src="/images/pic09.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
          </div>
          <ul class="actions">
            <li><a href="#" class="button">More</a></li>
          </ul>
        </section>

      <!-- Section -->
        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          <ul class="contact">
            <li class="fa-envelope-o"><a href="#">information@untitled.tld</a></li>
            <li class="fa-phone">(000) 000-0000</li>
            <li class="fa-home">1234 Somewhere Road #8254<br />
            Nashville, TN 00000-0000</li>
          </ul>
        </section>

      <!-- Footer -->
        <Footer />

    </div>
  </div>
</template>

<script>
import Nav from './nav';
import Search from './search';
import Footer from './footer';

export default {
  components: {
    Nav,
    Search,
    Footer
  },
  computed: {
    pages () {
      return this.$store.state.pages
    }
  }
}
</script>

<style>

</style>
