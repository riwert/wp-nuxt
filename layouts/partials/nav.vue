<template>
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/services">Services</nuxt-link></li>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link to="/books">Books</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li v-for="page in computedPages.root" :key="page.id">
        <nuxt-link class="opener" :to="`/${page.slug}`" v-if="page.parent == 0 && computedPages.sub.filter(sub => sub.parent == page.id).length">
          {{ page.title.rendered }}
        </nuxt-link>
        <!-- <span class="opener" v-if="page.parent == 0 && pages.filter(sub => sub.parent == page.id).length">
          {{ page.title.rendered }}
        </span> -->
        <ul v-if="page.parent == 0 && computedPages.sub.filter(sub => sub.parent == page.id).length">
          <li v-for="subpage in computedPages.sub" :key="subpage.id">
            <nuxt-link :to="`/${subpage.slug}`" v-if="page.id == subpage.parent">
              {{ subpage.title.rendered }}
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link :to="`/${page.slug}`" v-else-if="page.parent == 0">
          {{ page.title.rendered }}
        </nuxt-link>
      </li>
      <!-- <li><a href="index.html">Homepage</a></li>
      <li><a href="generic.html">Generic</a></li>
      <li><a href="elements.html">Elements</a></li>
      <li>
        <span class="opener">Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Etiam Dolore</a></li>
      <li><a href="#">Adipiscing</a></li>
      <li>
        <span class="opener">Another Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Maximus Erat</a></li>
      <li><a href="#">Sapien Mauris</a></li>
      <li><a href="#">Amet Lacinia</a></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  computed: {
    computedPages: function() {
      let rootPages = [];
      let subPages = [];
      for (let i = 0, len = this.pages.length; i < len; i++) {
        if (this.pages[i].parent == 0) {
          rootPages.push(this.pages[i]);
        } else {
          subPages.push(this.pages[i]);
        }
      }
      return {
        root: rootPages,
        sub: subPages
      }
    }
  }
}
</script>

<style>

</style>
