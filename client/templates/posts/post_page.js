Template.postPage.helpers({
	get_front_image: function(){
		return this._id+"_front_image";
	},
	get_side_image: function(){
		return this._id+"_side_image";
	},
	get_hold_image: function(){
		return this._id+"_hold_image";
	}

})


Template.postPage.events({
  'click .print_btn': function () {
        window.print();
  },

});