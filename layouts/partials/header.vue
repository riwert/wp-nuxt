<template>
  <header id="header">
    <a href="/" class="logo" v-html="panel.header"></a>
    <ul class="icons">
      <li v-if="panel.twitter">
        <a :href="panel.twitter.url" :title="panel.twitter.title" :target="panel.twitter.target ? '_blank' : '_self'" class="icon fa-twitter">
          <span class="label">{{ panel.twitter.title }}</span>
        </a>
      </li>
      <li v-if="panel.facebook">
        <a :href="panel.facebook.url" :title="panel.facebook.title" :target="panel.facebook.target ? '_blank' : '_self'" class="icon fa-facebook">
          <span class="label">{{ panel.facebook.title }}</span>
        </a>
      </li>
      <li v-if="panel.snapchat">
        <a :href="panel.snapchat.url" :title="panel.snapchat.title" :target="panel.snapchat.target ? '_blank' : '_self'" class="icon fa-snapchat-ghost">
          <span class="label">{{ panel.snapchat.title }}</span>
        </a>
      </li>
      <li v-if="panel.instagram">
        <a :href="panel.instagram.url" :title="panel.instagram.title" :target="panel.instagram.target ? '_blank' : '_self'" class="icon fa-instagram">
          <span class="label">{{ panel.instagram.title }}</span>
        </a>
      </li>
      <li v-if="panel.medium">
        <a :href="panel.medium.url" :title="panel.medium.title" :target="panel.medium.target ? '_blank' : '_self'" class="icon fa-medium">
          <span class="label">{{ panel.medium.title }}</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    panel() {
      return this.$store.state.config.panel.acf
    }
  }
}
</script>

<style>

</style>
