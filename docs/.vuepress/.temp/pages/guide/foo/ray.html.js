export const data = JSON.parse("{\"key\":\"v-0b6fc5f8\",\"path\":\"/guide/foo/ray.html\",\"title\":\"Ray\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Ray\",\"icon\":\"config\",\"summary\":\"功能详情...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/guide/foo/ray.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Ray\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":9},\"filePathRelative\":\"guide/foo/ray.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}