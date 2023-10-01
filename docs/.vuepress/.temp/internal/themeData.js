export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Guide\",\"link\":\"https://v2.vuepress.vuejs.org/zh\"},{\"text\":\"External\",\"link\":\"https://www.baidu.com\"},{\"text\":\"pages\",\"ariaLabel\":\"pages Menu\",\"children\":[{\"text\":\"algorithm\",\"link\":\"/pages/algorithm/\"},{\"text\":\"designPatterns\",\"link\":\"/pages/designPatterns/\"},{\"text\":\"jsLearning\",\"link\":\"/pages/jsLearning/\"},{\"text\":\"tutorials\",\"link\":\"/pages/tutorials/\"}]}],\"series\":{\"/\":[{\"text\":\"数据结构与算法\",\"link\":\"/pages/algorithm/\",\"children\":[{\"text\":\"字母异位词分组\",\"link\":\"/pages/algorithm/one.md\"},{\"text\":\"事件循环\",\"link\":\"/pages/algorithm/two.md\"}]},{\"text\":\"教程系列\",\"link\":\"/pages/tutorials/\",\"children\":[\"/pages/tutorials/blog.md\",\"/pages/tutorials/two.md\"]},{\"text\":\"js学习\",\"link\":\"/pages/jsLearning/\",\"children\":[{\"text\":\"防抖和节流\",\"link\":\"/pages/jsLearning/throttle_debounce.md\"},{\"text\":\"数组的迭代方法\",\"link\":\"/pages/jsLearning/array_methods.md\"},{\"text\":\"数组的其它方法\",\"link\":\"/pages/jsLearning/array_methods_2.md\"},{\"text\":\"Set和Map数据结构\",\"link\":\"/pages/jsLearning/set_map.md\"}]},{\"text\":\"设计模式\",\"link\":\"/pages/designPatterns/\",\"sidebarDepth\":1,\"children\":[{\"text\":\"发布订阅者模式vs观察者模式\",\"link\":\"/pages/designPatterns/PubSubPattern_ObsPattern.md\"}]}]}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
