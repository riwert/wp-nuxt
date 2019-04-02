import replacer from '~/services/replacer'

export const strict = false

export const state = () => ({
  config: null,
  pages: null,
  posts: null,
  sidePosts: null,
  currentPage: null,
  searchResult: null,
  searchLoading: false,
})

export const mutations = {
  SET_CONFIG(state, config) {
		state.config = config
  },
	SET_PAGES(state, pages) {
		state.pages = pages
  },
	SET_POSTS(state, posts) {
		state.posts = posts
  },
  SET_SIDE_POSTS(state, sidePosts) {
		state.sidePosts = sidePosts
  },
  SET_CURRENT_PAGE(state, currentPage) {
		state.currentPage = currentPage
  },
  SET_SEARCH_RESULT(state, searchResult) {
		state.searchResult = searchResult
  },
  SET_SEARCH_LOADING(state, searchLoading) {
		state.searchLoading = searchLoading
  },
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    // console.log('nuxt server init')
    await dispatch('setConfig')
    await dispatch('setPages')
    await dispatch('setPosts')
    await dispatch('setSidePosts')
  },
  async setConfig({ commit }) {
    const siteConfig = await this.$axios.$get(`${process.env.apiUrl}/config`)
    const configObj = {}
    siteConfig.forEach((conf) => {
      configObj[conf.slug] = conf
    })
    commit('SET_CONFIG', configObj)
  },
  async setPages({ commit }) {
    const mainSlug = 'strona-glowna'
    const menuPages = await this.$axios.$get(`${process.env.apiUrl}/pages?_embed&orderby=menu_order&order=asc`)
    commit('SET_PAGES', menuPages.map((page) => {
      // remove slug for main page
      if (page.slug == mainSlug) {
        page.slug = ''
      }
      // replace wp links
      page.content.rendered = replacer(page.content.rendered);
      return page;
    }))
  },
  async setPosts({ commit }) {
    const posts = await this.$axios.$get(`${process.env.apiUrl}/posts?_embed`)
    commit('SET_POSTS', posts.map((post) => {
      // replace wp links
      post.content.rendered = replacer(post.content.rendered);
      return post;
    }))
  },
  async setSidePosts({ commit }) {
    const categoryId = 4
    const postsLimit = 3
    const sidePosts = await this.$axios.$get(`${process.env.apiUrl}/posts?_embed&categories=${categoryId}&per_page=${postsLimit}`)
    commit('SET_SIDE_POSTS', sidePosts.map((post) => {
      // replace wp links
      post.content.rendered = replacer(post.content.rendered);
      return post;
    }))
  },
  setCurrentPage({ commit }, currentPage) {
    commit('SET_CURRENT_PAGE', currentPage)
    commit('SET_SEARCH_RESULT', '')
  },
  setSearchResult({ commit }, searchResult) {
    commit('SET_SEARCH_RESULT', searchResult)
  },
  setSearchLoading({ commit }, searchLoading) {
    commit('SET_SEARCH_LOADING', searchLoading)
  }
}

export const getters = {
  getAllPages: state => {
    return state.pages
  },
  getPageBySlug: state => slug => {
    const pages = state.pages.filter((page) => page.slug === slug)
    return (pages[0]) ? pages[0] : null
  },
  getAllPosts: state => {
    return state.posts
  },
  getPostBySlug: state => slug => {
    const posts = state.posts.filter((post) => post.slug === slug)
    return (posts[0]) ? posts[0] : null
  },
  getCurrentPage: state => {
    return state.currentPage
  },
  getSidePosts: state => {
    return state.sidePosts
  },
  getConfig: state => name => {
    return (state.config[name]) ? state.config[name].acf : null
  },
  getSearchResult: state => {
    return state.searchResult && state.searchResult.length ? state.searchResult : null
  },
  getSearchLoading: state => {
    return state.searchLoading
  },
}
