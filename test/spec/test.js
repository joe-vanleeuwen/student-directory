'use strict';
(function () {
    describe('Directory', function () {

    	it('should add new student', function() {
    		$('.add').click();

			$('.student-name').val('Brady Moller');
			$('.student-cell').val('864-884-5555');
			$('.student-email').val('bradyMoller@gmail.com');
			$('.student-github').val('https://github.com/bradyMoller');
			$('.student-image').val('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtR5BkM7w6FXDn4xmNem0hckzTkYuopVAeIR6As9UgatIyVwEySQ');

			$('.save').click();
			var lastStudent = $('.template-container .table-view .name').last();
			expect(lastStudent.text()).to.equal('Brady Moller');
    	})

    	it('should edit a student', function() {
    		var lastStudent = $('.template-container .table-view .name').last();
    		lastStudent.click();

    		$('.student-name').val('Amy Moller');
			$('.save').click();
			$('.go-back-button').click();

			var lastStudent = $('.template-container .table-view .name').last();
			expect(lastStudent.text()).to.equal('Amy Moller');
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
