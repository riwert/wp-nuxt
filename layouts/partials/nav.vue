<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo">
        Nuxt App
      </nuxt-link>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    background-image: linear-gradient(to right, #41b883, #3b8070, #35495e);
    padding: 0.5rem;
  }

  header .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  /* Extra small devices (portrait phones, less than 576px) */
  @media (min-width: 576px) {

    header .container {
      flex-direction: row;
      justify-content: space-between;
    }

  }

  header .logo, nav li a {
    display: block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
    color: #fff;
  }

  header .logo {
    padding: 0;
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }

  nav {
    justify-self: right;
  }

  nav ul {
    list-style-type: none;
  }

  nav ul li {
    display: inline;
  }

  nav ul li a {
    display: inline-block;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }
</style>
