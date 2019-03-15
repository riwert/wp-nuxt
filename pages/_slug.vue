<template>
  <div>
    <section id="subsite" :class="slug">
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
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title}`
    }
  },
  async asyncData({ params, $axios, payload, store }) {
    if (payload) {
      return {
        slug: payload.slug,
        title: payload.title.rendered,
        content: payload.content.rendered
      }
    } else {
      const pages = await $axios.$get(`${process.env.apiUrl}/pages?slug=${params.slug}&_embed`);
      store.commit('SET_CURRENT_PAGE', pages[0]);
      return {
        slug: pages[0].slug,
        title: pages[0].title.rendered,
        content: pages[0].content.rendered,
        image: {
          url: (pages[0]._embedded['wp:featuredmedia']) ? pages[0]._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (pages[0]._embedded['wp:featuredmedia']) ? pages[0]._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      }
    }
  }
}
</script>

<style>

</style>
