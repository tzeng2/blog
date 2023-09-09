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
				text: 'Languages',
				ariaLabel: 'Language Menu',
				items: [
					{ text: 'Chinese', link: '/language/chinese/' },
					{ text: 'Japanese', link: '/language/japanese/' }
				]
			}
		],
		sidebar: [
			{
				title: '数据结构与算法',   // 必要的
				path: '/language/chinese/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					{
						title: '字母异位词分组',
						path: '/language/chinese/one.md',
					},
					{
						title: '啊啊啊',
						path: '/language/chinese/two.md',
					}
					
				]
			},
			{
				title: '英文',
				path: '/language/english/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/language/english/one.md',
					'/language/english/two.md'
				]
			}
		],

		// sidebar: {
		// 	'/language/chinese/': [
		// 		'',     /* /foo/ */
		// 		'one',  /* /foo/one.html */
		// 		'two'   /* /foo/two.html */
		// 	],

		// 	'/language/english/': [
		// 		'',      /* /bar/ */
		// 		'three', /* /bar/three.html */
		// 		'four'   /* /bar/four.html */
		// 	],

		// 	// fallback
		// 	'/': [
		// 		''
		// 	]
		// },
		lastUpdated: 'Last Updated',
		smoothScroll: true

	}
}
