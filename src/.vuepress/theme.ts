/** @format */

import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
import plugins from './plugins.js'

export default hopeTheme({
  hostname: 'https://vuepress-blog.chillcicada.com',

  author: {
    name: 'ChillCicada',
    url: '/about.html',
    email: '2210227279@qq.com',
  },

  iconAssets: ['fontawesome-with-brands'],

  logo: '/avatar.jpg',

  repo: 'chillcicada/vuepress-blog',

  docsDir: 'src',

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: 'Nothing else.',

  displayFooter: true,

  encrypt: {
    config: {
      // '/demo/encrypt.html': ['1234'],
    },
  },

  contributors: false,

  blog: {
    description: 'A FrontEnd programmer.',
    intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/chillcicada/',
      email: 'mailto:2210227279@qq.com',
    },
  },

  metaLocales: {
    editLink: 'Edit',
  },

  // plugins
  plugins,
})
