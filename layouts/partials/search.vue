<template>
  <section id="search" class="alt">
    <form method="post" action="#" @submit.prevent="search">
      <input type="text" name="query" id="query" :placeholder="searcher.placeholder" v-model="searchPhrase" @keyup="search" />
    </form>
    <div v-if="searchResult">
      <article v-for="post in searchResult" :key="post.id">
        <a v-if="post.image" :href="post.link" :title="post.title" class="image"><img :src="post.image.url" :alt="post.image.alt" /></a>
        <h3><a :href="post.link" :title="post.title">{{ post.title }}</a></h3>
        <div class="excerpt" v-html="post.excerpt"></div>
      </article>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchPhrase: '',
      searchResult: '',
    }
  },
  computed: {
    ...mapGetters(['getConfig']),
    searcher() {
      return this.getConfig('searcher');
    },
  },
  methods: {
    search() {
      if (this.searchPhrase.length >= 3) {
        axios.get(`${process.env.apiUrl}/posts?search=${this.searchPhrase}&_embed&type[]=post&type[]=page`).then((res) => {
          this.searchResult = res.data.map((post) => {
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
        }).catch(error => console.log(error));
      } else {
        this.searchResult = '';
      }
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>
