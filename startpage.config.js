const defaultConfig = {
	username: "skinofmyeden",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_blank",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "OneDrive",
						url: "https://accounts.google.com/v3/signin/identifier?dsh=S906907024%3A1669747666000965&continue=http%3A%2F%2Fdrive.google.com%2F%3Futm_source%3Den&ltmpl=drive&passive=true&service=wise&usp=gtd&utm_campaign=web&utm_content=gotodrive&utm_medium=button&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAtNhl6RsJOtsze0WZnCLtRGI9o-ptizs50d5DaAka2vpbgJjJavSLwmE4D1ZjW6zVOFyPwo",
						icon: "entypo-social:onedrive"
					},
					{
						name: "Drive",
						url: "https://accounts.google.com/v3/signin/identifier?dsh=S906907024%3A1669747666000965&continue=http%3A%2F%2Fdrive.google.com%2F%3Futm_source%3Den&ltmpl=drive&passive=true&service=wise&usp=gtd&utm_campaign=web&utm_content=gotodrive&utm_medium=button&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAtNhl6RsJOtsze0WZnCLtRGI9o-ptizs50d5DaAka2vpbgJjJavSLwmE4D1ZjW6zVOFyPwo",
						icon: "fa6-brands:google-drive"
					},
					{
						name: "Photos",
						url: "https://photos.google.com/u/4/",
						icon: "ph:google-photos-logo-fill"
					},
					{
						name: "Gmail",
						url: "https://accounts.google.com/v3/signin/identifier?dsh=S-586340433%3A1669747724044051&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAvUE4swdIrUq0xQl7xRWXAEILnK8ymac4DEmQvjk3IrGo2kNE2S2pGfJtCMoaKGvFMyCV4L",
						icon: "simple-icons:gmail"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GPT",
						url: "https://chat.openai.com/chat",
						icon: "simple-icons:openai"
					},
					{
						name: "Explain Shell",
						url: "https://explainshell.com/",
						icon: "tabler:brand-powershell"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Explain Dev",
						url: "https://app.explain.dev/",
						icon: "mdi:bash"
					}
				]
			},
			{
				title: "Academic",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Quarto",
						url: "https://quarto.org/",
						icon: "fa6-brands:r-project"
					},
					{
						name: "Anna's Archive",
						url: "https://annas-archive.org/",
						icon: "ion:library"
					},
					{
						name: "Markdown",
						url: "https://help.obsidian.md/How+to/Format+your+notes",
						icon: "fa6-brands:markdown"
					},
					{
						name: "Obsidian Hub",
						url: "https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Plugins/obsidian-admonition/",
						icon: "simple-icons:obsidian"
					}
				]
			},
			{
				title: "Utilities",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Reddit Saved",
						url: "https://eternity.portals.sh/",
						icon: "mdi:reddit"
					},
					{
						name: "Toby",
						url: "https://web.gettoby.com/",
						icon: "mdi:paper"
					},
					{
						name: "Cuevana3",
						url: "https://cuevana3.be/",
						icon: "bxs:camera-movie"
					},
					{
						name: "Temp Mail",
						url: "https://temp-mail.com/",
						icon: "material-symbols:mail-lock"
					}
				]
			},
			{
				title: "Art",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Draw a Box",
						url: "https://drawabox.com/lesson/0/2",
						icon: "mdi:lead-pencil"
					},
					{
						name: "Gesture Drawing",
						url: "https://www.lovelifedrawing.com/",
						icon: "fa6-solid:person-falling"
					},
					{
						name: "ctrl paint",
						url: "https://www.ctrlpaint.com/",
						icon: "fontisto:tablet-alt"
					},
					{
						name: "Domestika",
						url: "https://www.domestika.org/",
						icon: "mdi:paint-outline"
					}
				]
			},
			{
				title: "Biology",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "Xena Browser",
						url: "https://xenabrowser.net/",
						icon: "ph:dna-bold"
					},
					{
						name: "Gepia2",
						url: "http://gepia2.cancer-pku.cn/#index",
						icon: "solar:dna-broken"
					},
					{
						name: "Cell wiki",
						url: "https://www.cellwiki.net/",
						icon: "healthicons:blood-cells"
					},
					{
						name: "Bio icons",
						url: "https://bioicons.com/",
						icon: "healthicons:bacteria"
					}
				]
			}
		]
	}
}

export default defaultConfig
