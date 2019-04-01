<template>
  <div>

    <MainIntro :raw-page="page" />

    <MainFeatures :raw-page="page" />

    <MainPosts :raw-page="page" :raw-posts="posts" />

  </div>
</template>

<script>
import MainIntro from '~/components/MainIntro';
import MainFeatures from '~/components/MainFeatures';
import MainPosts from '~/components/MainPosts';
import replacer from '~/services/replacer';

export default {
  components: {
    MainIntro,
    MainFeatures,
    MainPosts
  },
  head() {
    return {
      title: this.title
    }
  },
  async asyncData({ params, $axios, payload, store, error }) {
    const slug = '';
    const categoryId = 3;
    const categoryLimit = 6;
    if (payload) {
      return {
        page: payload,
        slug: payload.slug,
        title: payload.title.rendered,
        content: payload.content.rendered
      }
    } else {
      // const pages = await $axios.$get(`${process.env.apiUrl}/pages?slug=${slug}&_embed`);
      // const pages = store.state.pages.filter((page) => page.slug == slug);
      const page = store.getters.getPageBySlug(slug);
      if ( ! page) {
        return error({ statusCode: 404, message: 'Page not found' });
      }
      // replace wp links
      page.content.rendered = replacer(page.content.rendered);
      store.dispatch('setCurrentPage', page);
      const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed&categories=${categoryId}&per_page=${categoryLimit}`);
      return {
        title: page.acf.title,
        page: page,
        posts: posts
      }
    }
  }
}
</script>

<style>

</style>
