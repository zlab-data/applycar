Template.postPage.helpers({
	get_front_image: function(){
		return this.front_image_code;
	},
	get_side_image: function(){
		return this.side_image_code;
	},
	get_hold_image: function(){
		return this.hold_image_code;
	},
	get_car_front_image: function(){
		return this.car_front_image_code;
	},get_car_back_image: function(){
		return this.car_back_image_code;
	}
})


Template.postPage.events({
  'click .print_btn': function () {
        window.print();
  },

});