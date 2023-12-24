/** @format */

import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: 'Posts',
    icon: 'pen-to-square',
    prefix: '/posts/',
    children: [
      {
        text: 'slides',
        icon: 'person-chalkboard',
        prefix: 'slides/',
        children: [
          {
            text: 'bookclub',
            icon: 'person-chalkboard',
            link: 'bookclub/',
          },
          {
            text: 'srt1',
            icon: 'person-chalkboard',
            link: 'srt1/',
          },
        ],
      },
    ],
  },
])
