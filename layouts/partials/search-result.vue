<template>
  <div id="searchResult">
    <div v-if="getSearchLoading" class="loader">
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
    <div v-if="getSearchResult" class="posts results">
      <article v-for="post in getSearchResult" :key="post.id">
        <nuxt-link v-if="post.image" :to="post.link" :title="post.title" class="image object" @click.native="clearSearchResult">
          <img :src="post.image.url" :alt="post.image.alt" />
        </nuxt-link>
        <h2><nuxt-link :to="post.link" :title="post.title" @click.native="clearSearchResult">{{ post.title }}</nuxt-link></h2>
        <div class="post-excerpt" v-html="post.excerpt"></div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getSearchResult', 'getSearchLoading'])
  },
  methods: {
    ...mapActions(['setSearchResult']),
    clearSearchResult() {
      this.setSearchResult('');
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
#searchResult {
  position: relative;
}
.results {
  margin-top: 1rem;
}
.loader {
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  text-align: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #f56a6a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
