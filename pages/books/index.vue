<template>
  <section id="books">
    <div class="container">
      <h1>Books</h1>
      <div class="book" v-for="book in books" :key="book.id">
        <h2>{{ book.title.rendered }}</h2>
        <h5>{{ book.acf.writer }}</h5>
        <div class="intro">
          <nuxt-link class="image" :to="`/books/${book.id}`">
            <img :src="book._embedded['wp:featuredmedia'][0].source_url" :alt="book._embedded['wp:featuredmedia'][0].alt_text" />
          </nuxt-link>
          <div class="short-description">
            <div class="excerpt" v-html="book.excerpt.rendered"></div>
            <nuxt-link class="more button--green" :to="`/books/${book.id}`">Read more &raquo;</nuxt-link>
          </div>
        </div>
        <div class="caption">
          <p><small>Created {{ book.date }} by <strong>{{ book._embedded.author[0].name }}</strong></small></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Books Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my books description here.'},
        { hid: 'keywords', name: 'keywords', content: 'books, nuxt, app'},
      ]
    }
  },
  async asyncData({ $axios }) {
    const books = await $axios.$get(`${process.env.apiUrl}/books?_embed`);

    return {
      books: books
    }
  },
}
</script>

<style lang="scss" scoped>
  .book {
    margin: 1rem 0;

    h2 {
      margin-bottom: 0.5rem;
    }

    h5 {
      margin-bottom: 0.5rem;
    }

    .intro {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .image {
        display: inline-block;
        flex: 1;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .short-description {
        margin: 0 1rem;
        flex: 5;

        .more {
          display: block;
          float: right;
        }
      }
    }
  }
</style>
