import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c21fd08 = () => interopDefault(import('../pages/alltags.vue' /* webpackChunkName: "pages/alltags" */))
const _38ad9b38 = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _22ec4b94 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3f711e5c = () => interopDefault(import('../pages/featured.vue' /* webpackChunkName: "pages/featured" */))
const _745b49b1 = () => interopDefault(import('../pages/nuxt.vue' /* webpackChunkName: "pages/nuxt" */))
const _2ac85b44 = () => interopDefault(import('../pages/t/_tag.vue' /* webpackChunkName: "pages/t/_tag" */))
const _6dd5408c = () => interopDefault(import('../pages/_username/index.vue' /* webpackChunkName: "pages/_username/index" */))
const _4937737f = () => interopDefault(import('../pages/_username/_article.vue' /* webpackChunkName: "pages/_username/_article" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alltags",
    component: _3c21fd08,
    name: "alltags___en"
  }, {
    path: "/article",
    component: _38ad9b38,
    name: "article___en"
  }, {
    path: "/es",
    component: _22ec4b94,
    name: "index___es"
  }, {
    path: "/featured",
    component: _3f711e5c,
    name: "featured___en"
  }, {
    path: "/nuxt",
    component: _745b49b1,
    name: "nuxt___en"
  }, {
    path: "/es/alltags",
    component: _3c21fd08,
    name: "alltags___es"
  }, {
    path: "/es/article",
    component: _38ad9b38,
    name: "article___es"
  }, {
    path: "/es/featured",
    component: _3f711e5c,
    name: "featured___es"
  }, {
    path: "/es/nuxt",
    component: _745b49b1,
    name: "nuxt___es"
  }, {
    path: "/es/t/:tag?",
    component: _2ac85b44,
    name: "t-tag___es"
  }, {
    path: "/es/:username",
    component: _6dd5408c,
    name: "username___es"
  }, {
    path: "/t/:tag?",
    component: _2ac85b44,
    name: "t-tag___en"
  }, {
    path: "/es/:username/:article",
    component: _4937737f,
    name: "username-article___es"
  }, {
    path: "/",
    component: _22ec4b94,
    name: "index___en"
  }, {
    path: "/:username",
    component: _6dd5408c,
    name: "username___en"
  }, {
    path: "/:username/:article",
    component: _4937737f,
    name: "username-article___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
