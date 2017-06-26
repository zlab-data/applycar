Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      person_name: $(e.target).find('[name=person_name]').val(),
      person_id: $(e.target).find('[name=person_id]').val(),
      person_gender:$(e.target).find('[name=person_gender]').val(),
      person_birthday:$(e.target).find('[name=person_birthday]').val(),
      person_id_type:$(e.target).find('[name=person_id_type]').val(),
      userId: Meteor.userId()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // 向用户显示错误信息
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});


Template.postEdit.helpers({
  getId: function(){
    var result="http://res.cloudinary.com/dcyqpeqbh/image/upload/v1498217696/"+this._id+".jpg"
    return result
  }
})


    