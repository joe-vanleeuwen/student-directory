StudentTableView = Backbone.View.extend({

	template: _.template($('#table-view').text()),

	className: 'table-view',

	initialize: function() {
		$('.template-container').append(this.$el);
		this.render()
	},

	render: function() {
		this.$el.append(this.template({user: this.model}));
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
		this.$el.append(this.template({user: this.model}))
		$('.title').text(this.model.get('name'))
		this.editButton();
		this.seePrevious();
		this.seeNext();
	},

	editButton: function() {
		$('.edit').attr('href', '#students/edit/' + this.model.get('id'));
	},

	seePrevious: function() {
		var variables = this.setVariables();

		if (variables.index === 0) {
			variables.index = variables.collection.length - 1;
		} else {
			variables.index -= 1;
		}

		$('.see-previous').attr('href', '#/students/' + variables.collection.at(variables.index).get('id'));
	},

	seeNext: function() {
		var variables = this.setVariables();

		if (variables.index === (variables.collection.length - 1)) {
			variables.index = 0;
		} else {
			variables.index += 1;
		}

		$('.see-next').attr('href', '#/students/' + variables.collection.at(variables.index).get('id'));
	},

	setVariables: function() {
		var id = this.model.get('id');
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

	template: _.template($('#add-view').text()),

	initialize: function() {
		$('.template-container').html('');
		$('.template-container').append(this.$el)
		this.render();
	},

	render: function() {
		this.$el.append(this.template());
		this.save();
		this.cancel();
	},

	save: function() {
		var student = this.model
		$('.save').click(function() {	
			var id = $('.student-github').val()
			id = id.slice(id.lastIndexOf('/') + 1)
			student.set('name', $('.student-name').val());
			student.set('id', id);
			student.set('cell', $('.student-cell').val());
			student.set('email', $('.student-email').val());
			student.set('github', $('.student-github').val());
			student.set('image', $('.student-image').val());
		});
	},

	cancel: function() {
		var collection = this.model.collection
		var student = this.model
		$('.cancel').click(function() {
			this.remove()
			collection.remove(student)
		})
	}
})

EditStudentView = Backbone.View.extend({

	template: _.template($('#edit-view').text()),

	initialize: function() {
		$('.template-container').html('');
		$('.template-container').append(this.$el)
		this.render();
	},

	render: function() {
		this.$el.append(this.template({user: this.model}))
		this.save();
		this.remove();
	},

	save: function() {
		var student = this.model
		$('.save').click(function() {			
			var id = $('.student-github').val()
			id = id.slice(id.lastIndexOf('/') + 1)
			student.set('name', $('.student-name').val());
			student.set('id', id);
			student.set('cell', $('.student-cell').val());
			student.set('email', $('.student-email').val());
			student.set('github', $('.student-github').val());
			student.set('image', $('.student-image').val());
		})
	},

	remove: function() {
		var student = this.model;
		var collection = this.model.collection;
		$('.remove').click(function() {
			collection.remove(student);
		})
	}
})