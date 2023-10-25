import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "ChillCicada's vuepress blog",
  description: "A blog for my to share my school life.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
