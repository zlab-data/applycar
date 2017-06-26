Meteor.publish('posts', function() {
  return Posts.find();
});


Meteor.publish('records', function() {
  return Records.find();
});

