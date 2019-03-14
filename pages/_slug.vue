<template>
  <div>
    <div v-if="main">
      <!-- Banner -->
      <section id="banner" :class="slug">
        <div class="content">
          <header>
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
          </header>
          <div class="main-content" v-html="content"></div>
          <ul class="actions">
            <li><a :href="btn_more.url" class="button big">{{ btn_more.title }}</a></li>
          </ul>
        </div>
        <span v-if="image" class="image object">
          <img :src="image.url" :alt="image.alt" />
        </span>
      </section>
      <!-- / Banner -->
      <!-- Section -->
      <section>
        <header class="major">
          <h2>{{ section_2_header }}</h2>
        </header>
        <div class="features">
          <article v-for="item in section_2_items" :key="item.id">
            <span :class="'icon ' + item.icon"></span>
            <div class="content">
              <h3>{{ item.header }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </article>
        </div>
      </section>
      <!-- / Section -->
      <!-- Section -->
      <section>
        <header class="major">
          <h2>{{ section_3_header }}</h2>
        </header>
        <div class="posts">
          <article v-for="post in posts" :key="post.id">
            <a :href="post.link" class="image"><img :src="post.image.url" :alt="post.image.alt" /></a>
            <h3>{{ post.title }}</h3>
            <div class="post-body" v-html="post.body"></div>
            <ul class="actions">
              <li><a :href="post.link" class="button">MORE</a></li>
            </ul>
          </article>
        </div>
      </section>
      <!-- / Section -->
    </div>
    <div v-else>
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
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title}`
    }
  },
  async asyncData({ params, $axios, payload }) {
    if (payload) {
      return {
        slug: payload.slug,
        title: payload.title.rendered,
        content: payload.content.rendered
      }
    } else {
      const pages = await $axios.$get(`${process.env.apiUrl}/pages?slug=${params.slug}&_embed`);

      if (pages[0].slug == 'strona-glowna') {
        const posts = await $axios.$get(`${process.env.apiUrl}/posts?_embed&categories=3&per_page=6`);
        return {
          main: true,
          slug: pages[0].slug,
          title: pages[0].title.rendered,
          content: pages[0].content.rendered,
          image: {
            url: (pages[0]._embedded['wp:featuredmedia']) ? pages[0]._embedded['wp:featuredmedia'][0].source_url : null,
            alt: (pages[0]._embedded['wp:featuredmedia']) ? pages[0]._embedded['wp:featuredmedia'][0].title.rendered : null,
          },
          subtitle: pages[0].acf.subtitle,
          btn_more: pages[0].acf.btn_more,
          section_2_header: pages[0].acf.section_2_header,
          section_2_items: [
            {
              id: 1,
              header: pages[0].acf.item_header_1,
              body: pages[0].acf.item_body_1,
              icon: pages[0].acf.item_icon_1,
            },
            {
              id: 2,
              header: pages[0].acf.item_header_2,
              body: pages[0].acf.item_body_2,
              icon: pages[0].acf.item_icon_2,
            },
            {
              id: 3,
              header: pages[0].acf.item_header_3,
              body: pages[0].acf.item_body_3,
              icon: pages[0].acf.item_icon_3,
            },
            {
              id: 4,
              header: pages[0].acf.item_header_4,
              body: pages[0].acf.item_body_4,
              icon: pages[0].acf.item_icon_4,
            },
          ],
          section_3_header: pages[0].acf.section_3_header,
          posts: posts.map((post) => {
            return {
              title: post.title.rendered,
              body: post.excerpt.rendered,
              image: {
                url: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : null,
                alt: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].title.rendered : null,
              },
              link: `/blog/${post.slug}`,
            }
          }),
        }
      } else {
        return {
          main: false,
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
}
</script>

<style>

</style>
