<template>
  <div id="sidebar">
    <div class="inner">

      <Searcher />

      <Nav />

      <SidePosts />

      <SideContact />

      <Footer />

    </div>
  </div>
</template>

<script>
import Nav from './nav';
import Searcher from './searcher';
import Footer from './footer';
import SidePosts from './side-posts';
import SideContact from './side-contact';

export default {
  components: {
    Nav,
    Searcher,
    Footer,
    SidePosts,
    SideContact
  }
}
</script>

<style>

</style>
