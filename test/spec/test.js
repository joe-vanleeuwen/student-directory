'use strict';
(function () {
    describe('Directory', function () {

    	this.timeout(15000);

    	var randomName = 'Name ' + Math.floor(Math.random()*100000);

    	it('should add new student', function(done) {
    		// $('.add').click();
    		// cheating because the <a> tag won't click
    		router.navigate('add', {trigger: true})

			$('.student-name').val(randomName);

			$('.save').click();
			console.log($('.student-name').val())
			setTimeout(function() {
				var lastStudent = $('.template-container .table-view .name').last();
				expect(lastStudent.text()).to.equal(randomName);
				done();
			}, 1500)
    	})

    	it('should edit a student', function(done) {
    		var newRandomName = 'Name ' + Math.floor(Math.random()*100000);

    		var students = new StudentCollection();

    		var studentId;
    		setTimeout(function() {
	    		students.fetch({
	    			success: function() {
		    			students.each(function(student) {
		    				if (student.get('name') === randomName) {
		    					studentId = student.get('_id')
		    				}
		    			})
	    			}
	    		});
	    		setTimeout(function() {
	    			// again click issues with the <a> tag
	    			router.navigate(studentId + '/edit', {trigger: true})
	    			console.log(studentId)
	    			console.log(newRandomName + ' and ' + students.get(studentId).get('name'))
		    		$('.student-name').val(newRandomName);
					$('.save').click();
					setTimeout(function() {
						setTimeout(function() {
						console.log(newRandomName + ' and ' + students.get(studentId).get('name'))
						var student = students.get(studentId)
						expect(student.get('name')).to.equal(newRandomName);
						done();
						},1500)
					},1500)
	    		},1500)
    		},1500)


    	})

    	it('should remove a student', function() {
    		var lastStudent = $('.template-container .table-view .name').last();
    		lastStudent.click();

			$('.remove').click();

			var lastStudent = $('.template-container .table-view .name').last();
			expect(lastStudent.text()).to.not.equal('Amy Moller');
    	})
    });
})();
