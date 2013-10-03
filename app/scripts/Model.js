Student = Backbone.Model.extend({
	idAttribute: '_id',

	defaults: {
		"image": "http://www.crowdfundinsider.com/shared/avatars/blank_avatar.png"
	}
})

StudentCollection = Backbone.Collection.extend({
	model: Student,

	url: 'http://0.0.0.0:3000/collections/students'
})
