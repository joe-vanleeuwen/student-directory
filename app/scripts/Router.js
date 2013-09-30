AppRouter = Backbone.Router.extend({

	tableTemplate: _.template($('#table-template').text()),

	fullTemplate: _.template($('#full-template').text()),

	editTemplate: _.template($('#edit-template').text()),

	addTemplate: _.template($('#add-template').text()),

	initialize: function() {
		this.students = new StudentCollection();
		this.students.listenTo(this.students, 'add', function(student) {
			new StudentTableView({model: student})
		});
		this.students.add(data);
		this.students.stopListening();

		this.students.listenTo(this.students, 'add', function(student) {
			new AddStudentView({model: student});
		});
	},

	routes: {
		'students'          : 'showStudents',
		'students/:id'      : 'showStudent',
		'add'               : 'addStudent',
		'students/edit/:id' : 'editStudent'
	},

	showStudents: function() {
		$('.container').html('');
		$('.container').append(this.tableTemplate());
		this.students.each(function(student) {
			new StudentTableView({model: student})
		})
	},

	showStudent: function(id) {
		$('.container').html('');
		var showThisStudent = this.students.get(id);
		$('.container').append(this.fullTemplate({user: showThisStudent}));
		new StudentFullView({model: showThisStudent});
	},

	addStudent: function() {
		$('.container').html('');
		$('.container').append(this.addTemplate());
		this.students.add({});
	},

	editStudent: function(id) {
		$('.container').html('');
		var editThisStudent = this.students.get(id);
		$('.container').append(this.editTemplate({user: editThisStudent}));
		new EditStudentView({model: editThisStudent});
	}
})

$('.container').append(_.template($('#table-template').text()));
var router = new AppRouter();
Backbone.history.start()