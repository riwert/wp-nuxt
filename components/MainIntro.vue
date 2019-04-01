<template>
  <section id="banner">
    <div class="content">
      <header>
        <h1>{{ page.title }}</h1>
        <p>{{ page.subtitle }}</p>
      </header>
      <div class="main-content" v-html="page.content"></div>
      <ul class="actions">
        <li><nuxt-link :to="page.btn_more.url" class="button big">{{ page.btn_more.title }}</nuxt-link></li>
      </ul>
    </div>
    <span v-if="page.image" class="image object">
      <img :src="page.image.url" :alt="page.image.alt" />
    </span>
  </section>
</template>

<script>
export default {
  props: {
    rawPage: Object
  },
  computed: {
    page() {
      return {
        slug: this.rawPage.slug,
        content: this.rawPage.content.rendered,
        image: {
          url: (this.rawPage._embedded['wp:featuredmedia']) ? this.rawPage._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (this.rawPage._embedded['wp:featuredmedia']) ? this.rawPage._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
        title: this.rawPage.acf.title,
        subtitle: this.rawPage.acf.subtitle,
        btn_more: this.rawPage.acf.btn_more,
      }
    }
  },
}
</script>

<style>

</style>
