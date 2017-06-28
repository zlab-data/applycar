Template.postsList.helpers({
  posts: function() {
    console.log(Posts.find({userId:Meteor.userId()}).count())
    return Posts.find({userId:Meteor.userId(),latest: true, deleted: false});
  }
});




