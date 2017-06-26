Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
  
    var post = {
      person_name: $(e.target).find('[name=person_name]').val(),
      person_id: $(e.target).find('[name=person_id]').val(),
      person_gender:$(e.target).find('[name=person_gender]').val(),
      person_birthday:$(e.target).find('[name=person_birthday]').val(),
      person_id_type:$(e.target).find('[name=person_id_type]').val(),
      userId: Meteor.userId(),
      latest:true
    };

    post._id = Posts.insert(post);


    var file = $('#userimage')[0].files[0];
    console.log(file)
    Cloudinary.upload(file, {public_id: post._id}, function(err, res) {
        console.log("Upload Error: " + err);
        console.log("Upload Result: " + res);
      });


    Router.go('postPage', post);
  }
});

