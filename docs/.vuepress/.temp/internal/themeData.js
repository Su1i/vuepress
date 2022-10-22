export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$7bOj3bny317dttNnHeYXFO0ARo6vMwLewvVwm5kn2Du6BL4NbB/om\"],\"/zh/demo/encrypt.html\":[\"$2a$10$z5pY.IVaXgdP7yWT5w9AF.RBFCFT.QM/EtEPCi.YrphjZ/Zv6fdaq\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":{\"blue\":\"#2196f3\",\"red\":\"#f26d6d\",\"green\":\"#3eaf7c\",\"orange\":\"#fb9b5f\"},\"fullscreen\":true,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/\":[\"\",{\"text\":\"java\",\"icon\":\"tip\",\"link\":\"java/\",\"prefix\":\"java/\",\"collapsable\":true,\"children\":[\"01.Java学习路线\",\"02.函数式编程-Stream流\"]},{\"text\":\"LeetCode\",\"icon\":\"tip\",\"link\":\"leetcode/\",\"prefix\":\"leetcode/\",\"collapsable\":true,\"children\":\"structure\"},{\"text\":\"常用框架\",\"icon\":\"tip\",\"link\":\"framework/\",\"prefix\":\"framework/\",\"collapsable\":true,\"children\":\"structure\"},{\"text\":\"数据库\",\"icon\":\"tip\",\"link\":\"database/\",\"prefix\":\"database/\",\"collapsable\":true,\"children\":[\"01-NoSQL数据库简介\",\"02-Redis概述安装\",\"03-常用的五大数据类型\",\"04-Redis配置文件介绍\",\"05-Redis的发布和订阅\",\"06-Redis新数据类型\",\"07-Redis_Jedis_测试\",\"08-Redis_Jedis_实例\",\"09-Redis与Spring Boot整合\",\"10-Redis_事务_锁机制_秒杀\",\"11-Redis_事务_秒杀案例\",\"12-Redis持久化之RDB\"]},{\"text\":\"计算机基础\",\"icon\":\"tip\",\"link\":\"basics/\",\"prefix\":\"basics/\",\"collapsable\":true,\"children\":\"structure\"},{\"text\":\"常用工具\",\"icon\":\"tip\",\"link\":\"tools/\",\"prefix\":\"tools/\",\"collapsable\":true,\"children\":[{\"text\":\"linux\",\"icon\":\"tip\",\"link\":\"linux/\",\"prefix\":\"linux/\",\"children\":[\"01.安装linux系统的多种方式\"]},\"github\"]},{\"text\":\"English\",\"icon\":\"tip\",\"link\":\"English/\",\"prefix\":\"English/\",\"collapsable\":true,\"children\":\"structure\"},{\"text\":\"二进制安全\",\"icon\":\"tip\",\"link\":\"pwn/\",\"prefix\":\"pwn/\",\"collapsable\":true,\"children\":\"structure\"},{\"text\":\"python\",\"icon\":\"tip\",\"link\":\"python/\",\"prefix\":\"python/\",\"collapsable\":true,\"children\":[{\"icon\":\"note\",\"text\":\"python基础：\",\"prefix\":\"python基础/\",\"link\":\"python基础/\",\"children\":\"structure\"},{\"icon\":\"discover\",\"text\":\"Django：\",\"prefix\":\"Django/\",\"link\":\"Django/\",\"children\":\"structure\"}]}]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Suli\",\"url\":\"https://github.com/Su1i\"},\"logo\":\"https://img-1305804786.cos.ap-beijing.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221007134544.jpg\",\"repo\":\"https://github.com/Su1i/su1i.github.io\",\"docsDir\":\"docs\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbarLayout\":{\"left\":[\"Brand\"],\"center\":[\"Links\"],\"right\":[\"Repo\",\"Outlook\",\"Search\"]},\"navbar\":[\"/\",{\"text\":\"个人笔记\",\"icon\":\"note\",\"link\":\"/demo/\"},{\"text\":\"项目文档\",\"icon\":\"note\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"劝学网课系统\",\"icon\":\"creative\",\"link\":\"/demo/\"}]},{\"text\":\"杂七杂八\",\"icon\":\"blog\",\"link\":\"/blog/\"}],\"footer\":\"Default footer\",\"displayFooter\":true}}}")

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
