import axios from 'axios'

export const state = () => ({
  config: null,
  pages: null,
  posts: null
})

export const mutations = {
  SET_CONFIG(state, config) {
    const configObj = {};
    config.forEach((conf) => {
      configObj[conf.slug] = conf;
    });
		state.config = configObj
  },
	SET_PAGES(state, pages) {
		state.pages = pages
  },
  SET_POSTS(state, posts) {
		state.posts = posts
	}
}

export const actions = {
	// async init ({ commit }) {

  // },
  async nuxtServerInit ({ commit }, { req }) {
    // console.log('server init')
    let siteConfig = await axios.get(`${process.env.apiUrl}/config`);
    commit('SET_CONFIG', siteConfig.data);

    let menuPages = await axios.get(`${process.env.apiUrl}/pages?orderby=menu_order&order=asc`);
    commit('SET_PAGES', menuPages.data);

    let sidePosts = await axios.get(`${process.env.apiUrl}/posts?categories=4&per_page=3&_embed`);
    commit('SET_POSTS', sidePosts.data);
  }
}
