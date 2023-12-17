
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
	lang: 'zh-CN',
	text: '你好， VuePress ！',
	description: '这是我的第一个 VuePress 站点',
	base: "/blog/",
	theme: recoTheme({
		navbar: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: 'https://v2.vuepress.vuejs.org/zh' },
			{ text: 'External', link: 'https://www.baidu.com' },
			{
				text: 'pages',
				ariaLabel: 'pages Menu',
				children: [
					{ text: 'algorithm', link: '/pages/algorithm/' },
					{ text: 'designPatterns', link: '/pages/designPatterns/' },
					{ text: 'jsLearning', link: '/pages/jsLearning/' },
					{ text: 'tutorials', link: '/pages/tutorials/' }
				]
			}
		],
		series: {
			'/': [
				{
					text: '数据结构与算法',
					link: '/pages/algorithm/',
					children: [
						{
							text: '字母异位词分组',
							link: '/pages/algorithm/one.md',
						}

					]
				},
				{
					text: '教程系列',
					link: '/pages/tutorials/',
					children: [
						'/pages/tutorials/blog.md',
					]
				},
				{
					text: 'js学习',
					link: '/pages/jsLearning/',
					children: [
						{
							text: "防抖和节流",
							link: "/pages/jsLearning/throttle_debounce.md"
						},
						{
							text: "数组的迭代方法",
							link: "/pages/jsLearning/array_methods.md"
						},
						{
							text: "数组的其它方法",
							link: "/pages/jsLearning/array_methods_2.md"
						},
						{
							text: "Set和Map数据结构",
							link: "/pages/jsLearning/set_map.md"
						},
						{
							text: "面向对象的程序设计",
							link: "/pages/jsLearning/professionalJS_6.md"
						},
					]
				},
				{
					text: '设计模式',
					link: '/pages/designPatterns/',
					sidebarDepth: 1,    // 可选的, 默认值是 1
					children: [
						{
							text: "行为模式",
							link: "/pages/designPatterns/BehavioralPatterns",
							children: [
								{
									text: "发布订阅者模式vs观察者模式",
									link: "/pages/designPatterns/BehavioralPatterns/PubSubPattern_ObsPattern.md"
								},
							]
						},
						{
							text: "创建型模式",
							link: "/pages/designPatterns/CreationalPatterns",
							children: [
								{
									text: "工厂模式",
									link: "/pages/designPatterns/CreationalPatterns/FactoryPattern.md"
								},
								{
									text: "抽象工厂模式",
									link: "/pages/designPatterns/CreationalPatterns/AbstractFactoryPattern.md"
								},
								{
									text: "建造者模式",
									link: "/pages/designPatterns/CreationalPatterns/Builder.md"
								}
							]
						},
						{
							text: "结构型模式",
							link: "/pages/designPatterns/StructuralPatterns",
							children: [
								{
									text: "适配器模式",
									link: "/pages/designPatterns/StructuralPatterns/Adapter.md"
								},
								{
									text: "桥模式",
									link: "/pages/designPatterns/StructuralPatterns/Bridge.md"
								},
								{
									text: "代理模式",
									link: "/pages/designPatterns/StructuralPatterns/Proxy.md"
								}
							]
						},
						
						
					]
				},
			]
		}
	}),
})

// note: vuepress 1 采用的是COMMON JS 语法


