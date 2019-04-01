<template>
  <section id="search" class="alt">
    <form method="post" action="#" @submit.prevent="search">
      <input type="text" name="query" id="query" :placeholder="searcher.placeholder" v-model="searchPhrase" @change="search" />
      <div v-if="getSearchLoading" class="loader">
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchPhrase: '',
    }
  },
  computed: {
    ...mapGetters(['getConfig', 'getSearchResult', 'getSearchLoading']),
    searcher() {
      return this.getConfig('searcher');
    },
  },
  methods: {
    ...mapActions(['setSearchResult', 'setSearchLoading']),
    search() {
      if (this.searchPhrase.length >= 1) {
        this.setSearchLoading(true);
        axios.get(`${process.env.apiUrl}/posts?search=${this.searchPhrase}&_embed&type[]=post&type[]=page`).then((res) => {
          let searchResult = res.data.map((post) => {
            return {
              title: post.title.rendered,
              excerpt: post.excerpt.rendered,
              link: ((post.type == 'page') ? `/${post.slug}` : `/blog/${post.slug}`),
              image: {
                url: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : null,
                alt: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].title.rendered : null,
              },
            }
          });
          this.setSearchResult(searchResult);
          this.setSearchLoading(false);
        }).catch(error => console.log(error));
      } else {
        this.setSearchResult(null);
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
form {
  position: relative;
}
.loader {
  position: absolute;
  top: 0.5rem;
  left: 0;
  right: 0;
  text-align: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
}
.lds-ripple div {
  position: absolute;
  border: 2px solid #f56a6a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 14px;
    left: 14px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 29px;
    height: 29px;
    opacity: 0;
  }
}
</style>
