<template>
  <div id="main">
    <div class="inner">

      <Header />
      <SearchResult />
      <Nuxt />

    </div>
  </div>
</template>

<script>
import Header from './header';
import SearchResult from './search-result';

export default {
  components: {
    Header,
    SearchResult
  }
}
</script>

<style>

</style>
