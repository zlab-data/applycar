Template.postPage.helpers({
	getId: function(){
		return this._id;
	}

})


Template.postPage.events({
  'click .print_btn': function () {
        window.print();
  },

});