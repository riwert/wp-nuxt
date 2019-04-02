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
  async asyncData({ params, payload, store, error }) {
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
      const page = store.getters.getPageBySlug(slug);
      if ( ! page) {
        return error({ statusCode: 404, message: 'Page not found' });
      }
      store.dispatch('setCurrentPage', page);
      let limit = 0;
      const posts = store.getters.getAllPosts.filter(post => {
        return post.categories.includes(categoryId) && limit++ < categoryLimit;
      });
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
