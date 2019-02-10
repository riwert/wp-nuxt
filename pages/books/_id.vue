<template>
  <section id="book">
    <div class="container">
      <h1>{{ book.title.rendered }}</h1>
      <div class="explication">
        <div class="image">
          <img :src="book.media.media_details.sizes.full.source_url" :alt="book.title.rendered" />
        </div>
        <div class="description">
          <div class="details">
            <p>Writer <strong>{{ book.acf.writer }}</strong></p>
            <p>Published by <strong>{{ book.acf.publisher }}</strong></p>
          </div>
          <div class="content" v-html="book.content.rendered"></div>
          <div class="caption">
            <p><small>Created {{ book.date }} by <strong>{{ book.user.name }}</strong></small></p>
          </div>
        </div>
      </div>
      <div class="controls">
        <nuxt-link :to="'/books'" class="back button--grey">Back</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.book.title.rendered} | Book Nuxt App`,
      meta: [
        { hid: 'description', name: 'description', content: 'This is my book description here.'},
        { hid: 'keywords', name: 'keywords', content: 'book, nuxt, app'},
      ]
    }
  },
  async asyncData({ params, $axios }) {
    const url = 'http://localhost/wp-rest-api/wp-json/wp/v2';
    const book = await $axios.$get(`${url}/books/${params.id}`);
    const media = await $axios.$get(`${url}/media/${book.featured_media}`);
    const user = await $axios.$get(`${url}/users/${book.author}`);
    book.media = media;
    book.user = user;

    return {
      book: book
    };
  }
}
</script>

<style lang="scss" scoped>
#book {

  h1 {
    margin-bottom: 1rem;
  }

  .explication {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .image {
      flex: 1;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .description {
      flex: 2;

      .details {
        margin-bottom: 1rem;
      }

      .content {
        text-align: justify;
      }

      .caption {
        margin-top: 1rem;
      }
    }
  }
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;

  .back {
    margin: auto;
  }
}
</style>
