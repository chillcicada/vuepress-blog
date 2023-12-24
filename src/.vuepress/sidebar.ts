/** @format */

import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    'intro',
    'about',
    {
      text: 'Articles',
      icon: 'book',
      prefix: 'posts/',
      children: 'structure',
    },
  ],
})
