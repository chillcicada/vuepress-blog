/** @format */

import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  lang: 'en-US',
  title: 'Blog',
  description: 'A blog for my to share my R & D logs.',

  theme,
})
