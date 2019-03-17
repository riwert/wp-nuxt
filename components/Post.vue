<template>
  <article>
    <nuxt-link v-if="post.image" :to="post.link.url" class="image object">
      <img :src="post.image.url" :alt="post.image.alt" />
    </nuxt-link>
    <h2><nuxt-link :to="post.link.url">{{ post.title }}</nuxt-link></h2>
    <div class="post-excerpt" v-html="post.excerpt"></div>
    <ul class="actions">
      <li><nuxt-link :to="post.link.url" class="button">{{ post.link.text }}</nuxt-link></li>
    </ul>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    rawPost: Object
  },
  computed: {
    ...mapGetters(['getConfig']),
    blog() {
      return this.getConfig('blog');
    },
    post() {
      return {
        id: this.rawPost.id,
        title: this.rawPost.title.rendered,
        excerpt: this.rawPost.excerpt.rendered,
        link: {
          url: `/blog/${this.rawPost.slug}`,
          text: this.blog.more_link_text
        },
        image: {
          url: (this.rawPost._embedded['wp:featuredmedia']) ? this.rawPost._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (this.rawPost._embedded['wp:featuredmedia']) ? this.rawPost._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      }
    }
  }
}
</script>

<style>

</style>
