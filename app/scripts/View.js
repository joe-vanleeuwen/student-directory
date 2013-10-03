StudentTableView = Backbone.View.extend({

	template: _.template($('#table-view').text()),

	className: 'table-view',

	initialize: function() {
		$('.template-container').append(this.$el);
		this.render()
	},

	render: function() {
		this.$el.append(this.template({student: this.model}));
		$('.title').text('Student Directory');
	}
})

StudentFullView = Backbone.View.extend({

	template: _.template($('#full-view').text()),

	ClassName: 'container',

	initialize: function() {
		$('.template-container').html('');
		$('.template-container').append(this.$el);
		this.render()
	},

	render: function() {
		this.$el.append(this.template({student: this.model}))
		$('.title').text(this.model.get('name'));
		this.seePrevious();
		this.seeNext();
	},

	seePrevious: function() {
		var variables = this.setVariables();

		if (variables.index === 0) {
			variables.index = variables.collection.length - 1;
		} else {
			variables.index -= 1;
		}

		$('.see-previous').attr('href', '#' + variables.collection.at(variables.index).get('_id'));
	},

	seeNext: function() {
		var variables = this.setVariables();

		if (variables.index === (variables.collection.length - 1)) {
			variables.index = 0;
		} else {
			variables.index += 1;
		}

		$('.see-next').attr('href', '#' + variables.collection.at(variables.index).get('_id'));
	},

	setVariables: function() {
		var id = this.model.get('_id');
		var collection = this.model.collection
		var index = collection.indexOf(collection.get(id))

		var variables = {
			id: id,
			collection: collection,
			index: index
		}

		return variables;
	}
})

AddStudentView = Backbone.View.extend({

	template: _.template($('#add-or-edit-view').text()),

	events: {
		'click .save': 'save',
		'click .cancel': 'cancel'
	},

	initialize: function() {
		$('.template-container').html('');
		$('.template-container').append(this.$el)
		this.render();
	},

	render: function() {
		var template = _.template($('#add-buttons').text());
		this.$el.append(this.template(
			{
				student: this.model,
				buttonsTemplate: template
			})
		);
	},

	save: function() {	
		if ($('.student-name').val() === '') {
			this.model.set('name', '?');
		} else {this.model.set('name', $('.student-name').val())}

		this.model.set('cell', $('.student-cell').val());
		this.model.set('email', $('.student-email').val());
		this.model.set('github', $('.student-github').val());
		this.model.set('image', $('.student-image').val());
		
		this.model.save({},{
			success: function() {
				router.navigate("", {trigger: true});
			}
		});
	},

	cancel: function() {
		this.model.collection.remove(this.model)
	}
})

EditStudentView = Backbone.View.extend({

	template: _.template($('#add-or-edit-view').text()),

	events: {
		'click .save': 'save',
		'click .remove': 'doNotSave'
	},

	initialize: function() {
		$('.template-container').html('');
		$('.template-container').append(this.$el)
		this.render();
	},

	render: function() {
		var template = _.template($('#edit-buttons').text())
		this.$el.append(this.template(
			{
				student: this.model,
				buttonsTemplate: template
			})
		);
	},

	save: function() {
		this.model.set('name', $('.student-name').val());
		this.model.set('cell', $('.student-cell').val());
		this.model.set('email', $('.student-email').val());
		this.model.set('github', $('.student-github').val());
		this.model.set('image', $('.student-image').val());
		this.model.save();
	},

	doNotSave: function() {
		this.model.destroy({
			success: function() {
				router.navigate("", {trigger: true});
			}
		});
	}
})

