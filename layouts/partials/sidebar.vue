<template>
  <div id="sidebar">
    <div class="inner">

      <Search />

      <Nav />

      <SidePosts />

      <SideContact />

      <Footer />

    </div>
  </div>
</template>

<script>
import Nav from './nav';
import Search from './search';
import Footer from './footer';
import SidePosts from './side-posts';
import SideContact from './side-contact';

export default {
  components: {
    Nav,
    Search,
    Footer,
    SidePosts,
    SideContact
  }
}
</script>

<style>

</style>
