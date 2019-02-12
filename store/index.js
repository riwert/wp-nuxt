import axios from 'axios'

const url = 'http://localhost/wp-rest-api/wp-json/wp/v2';

export const state = () => ({
	pages: null
})

export const mutations = {
	SET_PAGES(state, pages) {
		state.pages = pages
	}
}

export const actions = {
	// async init ({ commit }) {

  // },
  async nuxtServerInit ({ commit }, { req }) {
    // console.log('server init')
    let { data } = await axios.get(`${url}/pages`)
    commit('SET_PAGES', data)
  }
}
