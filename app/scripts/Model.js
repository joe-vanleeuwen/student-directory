Student = Backbone.Model.extend({
	defaults: function() {
		return {
			name: '',
			id: '',
			cell: '',
			email: '',
			github: '',
			image: ''
		}
	}
})

StudentCollection = Backbone.Collection.extend({
	model: Student
})

 // data

var data = [
	{
		name: 'Brandon Miller',
		id: 'BrandonEMiller',
		cell: '864-884-4528',
		email: 'brandonevanmiller@gmail.com',
		github: 'https://github.com/BrandonEMiller',
		image: 'https://2.gravatar.com/avatar/fde9536a0b1ce7a6508f7343ea321074?d=https%3A%2F%2Fidenticons.github.com%2Fac01ab7bdce94d899fcb1828416cf54d.png&s=420'
	},
	{
		name: 'Tyler Phillips',
		id: 'tylerphillips',
		cell: '864-380-8131',
		email: 'tylerfphillips@gmail.com',
		github: 'https://github.com/tylerphillips',
		image: 'https://1.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=420'
	},
	{
		name: 'Joe VanLeeuwen',
		id: 'joe-vanleeuwen',
		cell: '864-567-6215',
		email: 'jvnlwn@gmail.com',
		github: 'https://github.com/joe-vanleeuwen',
		image: 'https://1.gravatar.com/avatar/9630334f86049b7af41ae84c5c52a166?d=https%3A%2F%2Fidenticons.github.com%2Fd8ffb2214e1db5dd70ebac58b9c6bdde.png&s=420'
	},
	{
		name: 'Dan Jeffords',
		id: 'DJSrA',
		cell: '864-640-5321',
		email: 'daniel.jeffords@gmail.com',
		github: 'https://github.com/DJSrA',
		image: 'https://1.gravatar.com/avatar/da8a5a98804afce7c9598230ac702868?d=https%3A%2F%2Fidenticons.github.com%2Fa55edf1f0ff4b0ce8ff22eba31ddb99f.png&s=420'
	},
	{
		name: 'Andy Flack',
		id: 'FlackAP',
		cell: '666-420-5555',
		email: 'flack.ap@gmail.com',
		github: 'https://github.com/FlackAP',
		image: 'https://0.gravatar.com/avatar/b05691109d08ca754b4d92984b53b23a?d=https%3A%2F%2Fidenticons.github.com%2F1f05bde9094f992be5264d254dc63842.png&s=420'
	},
	{
		name: 'Joe Tamburro',
		id: 'joetamburro',
		cell: '864-630-4203',
		email: 'joetamburro38@gmail.com',
		github: 'https://github.com/joetamburro',
		image: 'https://2.gravatar.com/avatar/68832c35b4a14e91197ebc989d70694b?d=https%3A%2F%2Fidenticons.github.com%2Fab95055bbcfd4dcb4725994058c98e0c.png&s=420'
	},
	{
		name: 'Keeron Thandroyen',
		id: 'keeronmarc',
		cell: '864-608-6515',
		email: 'keeronmarc@gmail.com',
		github: 'https://github.com/keeronmarc',
		image: 'https://0.gravatar.com/avatar/df54465365bd3da38d5bf73dd066ee67?d=https%3A%2F%2Fidenticons.github.com%2Fd6b54b90ab365523f9fe803ff79220a9.png&s=420'
	},
	{
		name: 'Jake Hendley',
		id: 'jhendley25',
		cell: '864-640-9515',
		email: 'jhendley25@gmail.com',
		github: 'https://github.com/jhendley25',
		image: 'https://1.gravatar.com/avatar/a4d6a575778b5aea9afddd13471f5178?d=https%3A%2F%2Fidenticons.github.com%2F9745e271f4fb0ac83b37286d6ac03942.png&s=420'
	},
	{
		name: 'Ryan Poplin',
		id: 'ryanpoplin',
		cell: '864-360-1231',
		email: 'fender14@charter.net',
		github: 'https://github.com/ryanpoplin',
		image: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=420'
	},
	{
		name: 'Caleb Bradley',
		id: 'calebbradley',
		cell: '864-901-2362',
		email: 'calebbradley30@yahoo.com',
		github: 'https://github.com/calebbradley',
		image: 'https://0.gravatar.com/avatar/6e1409c2af985ad17320157ffd13b67c?d=https%3A%2F%2Fidenticons.github.com%2F5b515ef064cf164fa1bd61f03eb6d9fa.png&s=420'
	}
]




