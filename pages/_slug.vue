<template>
  <section id="subsite" :class="'page-' + slug">
    <div class="content">
      <header>
        <h1>{{ title }}</h1>
      </header>
      <div class="subsite-content" v-html="content"></div>
    </div>
    <span v-if="image" class="image object">
      <img :src="image.url" :alt="image.alt" />
    </span>
  </section>
</template>

<script>
import Post from '~/components/Post.vue';

export default {
  components: {
    Post
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.excerpt},
      ]
    }
  },
  async asyncData({ params, $axios, payload, store, error }) {
    if (payload) {
      return {
        slug: payload.slug,
        title: payload.title.rendered,
        content: payload.content.rendered
      }
    } else {
      // const pages = await $axios.$get(`${process.env.apiUrl}/pages?_embed&slug=${params.slug}`);
      // const pages = store.state.pages.filter((page) => page.slug == params.slug);
      const page = store.getters.getPageBySlug(params.slug);
      if ( ! page) {
        return error({ statusCode: 404, message: 'Page not found' });
      }
      store.dispatch('setCurrentPage', page);
      return {
        slug: page.slug,
        title: page.title.rendered,
        excerpt: page.excerpt.rendered,
        content: page.content.rendered,
        image: {
          url: (page._embedded['wp:featuredmedia']) ? page._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (page._embedded['wp:featuredmedia']) ? page._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      }
    }
  }
}
</script>

<style>

</style>
