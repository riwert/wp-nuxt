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
  async asyncData({ params, $axios, payload, store }) {
    let slug = 'strona-glowna';
    let categoryId = 3;
    let categoryLimit = 6;
    if (payload) {
      return {
        page: payload,
        slug: payload.slug,
        title: payload.title.rendered,
        content: payload.content.rendered
      }
    } else {
      const pages = await $axios.$get(`${process.env.apiUrl}/pages?slug=${slug}&_embed`);
      store.commit('SET_CURRENT_PAGE', pages[0]);
      const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed&categories=${categoryId}&per_page=${categoryLimit}`);
      return {
        title: pages[0].title.rendered,
        page: pages[0],
        posts: posts
      }
    }
  }
}
</script>

<style>

</style>
