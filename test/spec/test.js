'use strict';
(function () {
    describe('Directory', function () {

    	this.timeout(15000);

    	var randomName = 'Name ' + Math.floor(Math.random()*100000);
    	var newRandomName = 'Name ' + Math.floor(Math.random()*100000);
		var students = new StudentCollection();
		var studentId;

    	it('should add new student', function(done) {
    		// $('.add').click();
    		// cheating because the <a> tag won't click
    		setTimeout(function() {
	    		router.navigate('', {trigger: true})

				setTimeout(function() {
	    			router.navigate('add', {trigger: true})
					$('.student-name').val(randomName);

					$('.save').click();
					setTimeout(function() {
						var lastStudent = $('.template-container .table-view .name').last();
						expect(lastStudent.text()).to.equal(randomName);
						done();
					}, 1500)
				}, 1500)
			}, 1500)
    	})

    	it('should edit a student', function(done) {
    		console.log(newRandomName)

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
		    		$('.student-name').val(newRandomName);
					$('.save').click();
					setTimeout(function() {
						students.fetch({
							success: function() {
								var student = students.get(studentId)
								expect(student.get('name')).to.equal(newRandomName);
								done();
	    					}
	    				});
					},1500)
	    		},1500)
    		},1500)


    	})

    	it('should remove a student', function(done) {
    		router.navigate('', {trigger: true})

    		var studentExists = false;
    		// var clickThisStudent;

    		// more <a> tag click issues

	 		// var names = $('.template-container .table-view .name a')
	 		// names.each(function(name) {
			// 	if($(names[name]).text() === newRandomName) {
			// 		clickThisStudent = $(names[name]);
			// 		console.log($(names[name]).text())
			// 	}	
			// })
			// clickThisStudent.click()

    		// cheating . .
    		router.navigate(studentId, {trigger: true})

			// $('.edit').click();

			// cheating . . again . .
			router.navigate(studentId + '/edit', {trigger: true})

			$('.remove').click();

			setTimeout(function(){
				students.fetch({
					success: function(students) {
						setTimeout(function(){
							students.each(function(student) {
								if(studentId === student.get('_id')) {
									studentExists = true;
								}	
							})		
							expect(studentExists).to.equal(false);
							done();
						},1500)			
					}
				})
			},1500)
    	})
    });
})();
