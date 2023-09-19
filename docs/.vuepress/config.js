module.exports = {
	title: 'vue',
	theme: "reco",
	base: "/blog/",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://www.baidu.com' },
			{
				text: 'pagess',
				ariaLabel: 'pages Menu',
				items: [
					{ text: 'algorithm', link: '/pages/algorithm/' },
					{ text: 'Japanese', link: '/pages/japanese/' }
				]
			}
		],
		sidebar: [
			{
				title: '数据结构与算法',   // 必要的
				path: '/pages/algorithm/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					{
						title: '字母异位词分组',
						path: '/pages/algorithm/one.md',
					},
					{
						title: '事件循环',
						path: '/pages/algorithm/two.md',
					}
					
				]
			},
			{
				title: '教程系列',
				path: '/pages/tutorials/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/pages/tutorials/blog.md',
					'/pages/tutorials/two.md'
				]
			},
			{
				title: 'js学习',
				path: '/pages/jsLearning/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					{
						title: "防抖和节流",
						path: "/pages/jsLearning/throttle_debounce.md"
					},
					{
						title: "数组的迭代方法",
						path: "/pages/jsLearning/array_methods.md"
					},
					{
						title: "数组的其它方法",
						path: "/pages/jsLearning/array_methods_2.md"
					},
					{
						title: "Set和Map数据结构",
						path: "/pages/jsLearning/set_map.md"
					}
				]
			},
		],
		lastUpdated: 'Last Updated',
		smoothScroll: true

	}
}
