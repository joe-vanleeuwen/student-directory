AppRouter = Backbone.Router.extend({

	tableTemplate: _.template($('#table-template').text()),

	fullTemplate: _.template($('#full-template').text()),

	editTemplate: _.template($('#edit-template').text()),

	addTemplate: _.template($('#add-template').text()),

	initialize: function() {
		this.students = new StudentCollection();
	},

	routes: {
		''         : 'showStudents',
		'add'      : 'addStudent',
		':id/edit' : 'editStudent',
		':id'      : 'showStudent'
	},

	showStudents: function() {
		$('.container').html('');
		$('.container').append(this.tableTemplate());

		this.fetchCollection(display);

		function display(students) {
			students.each(function(student) {
				new StudentTableView({model: student})
			})
		}
	},

	showStudent: function(id) {
		var that = this

		this.fetchCollection(display);

		function display(students) {			
			var showThisStudent = students.get(id);
			$('.container').html('');
			$('.container').append(that.fullTemplate({student: showThisStudent}));
			new StudentFullView({model: showThisStudent});
		}
	},

	addStudent: function() {
		var that = this

		this.fetchCollection(display);

		function display(students){		
			$('.container').html('');
			$('.container').append(that.addTemplate());
			students.listenToOnce(students, 'add', function(student) {
				new AddStudentView({model: student});
			});
			students.add({});
		}
	},

	editStudent: function(id) {
		var that = this

		this.fetchCollection(display);

		function display(students) {			
			$('.container').html('');
			var editThisStudent = students.get(id);
			$('.container').append(that.editTemplate({student: editThisStudent}));
			new EditStudentView({model: editThisStudent});
		}
	},

	fetchCollection: function(display) {
		if (this.students.length === 0) {	
	    	this.students.fetch({
				success: function(students) {
					display(students);
				}
			})
		}  else {display(this.students)};
	}
})

$('.container').append(_.template($('#table-template').text()));
var router = new AppRouter();
Backbone.history.start()