import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "Banana",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "Banana 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "Banana 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      {
        text: "slides",
        icon: "person-chalkboard",
        prefix: "slides/",
        children: [
          {
            text: "bookclub",
            icon: "study",
            link: "bookclub/",
          },
        ],
      },
      // { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      // { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
