export const state = () => ({
  user: null,
})

export const getters = {
  authUser(state) {
    return state.user || null
  },
  isAuthenticated(state) {
    return !!state.user
  },
  isAdmin(state) {
    return state.user &&
      state.user.role &&
      state.user.role === 'admin'
  }
}

export const actions = {
  login({ commit, state }, loginData) {
    return this.$axios.$post('/api/v1/auth/login', loginData)
      .then(user => {
        commit('setAuthUser', user)
        localStorage.setItem('token', `Bearer ${user.token}`)
        return state.user
      })
      .catch(error => Promise.reject(error))
  },

  logout({ commit }) {
    return this.$axios.$get('/api/v1/auth/logout')
      .then(() => {
        commit('setAuthUser', null)
        localStorage.removeItem('token')
        return true
      })
      .catch(error => Promise.reject(error))
  },

  register(_, registerData) {
    return this.$axios.$post('/api/v1/auth/register', registerData)
      .catch(error => {
        let errorMessage = 'Ooops, error inesperado intenta registrarte de nuevo'
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.message
        }
        return Promise.reject(errorMessage)
      })
  },
  getAuthUser({ commit, getters, state }, token) {
    const authUser = getters.authUser;
    if (authUser && authUser.hasOwnProperty('data')) { return Promise.resolve(authUser) }
    return this.$axios.$get('/api/v1/auth/me', token)
      .then((user) => {
        commit('setAuthUser', user)
        return state.user
      })
      .catch((error) => {
        console.log('error ', error)
        commit('setAuthUser', null)
        return Promise.reject(error)
      })
  }
}

export const mutations = {
  setAuthUser(state, user) {
    return state.user = user
  }
}