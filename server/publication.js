Meteor.publish('posts', function() {
  return Posts.find();
});


Meteor.publish('records', function() {
  return Records.find();
});

//console.log(Meteor.users.findOne({username: 'zlabtest'}));

if (typeof Meteor.users.findOne({username: 'zlabtest'}) === "undefined" ){
  Accounts.createUser({
                           username: 'zlabtest',
                           password : 'iamadmin123',
                           profile  : {
                                                                           //publicly visible fields like firstname goes here
                        }
  });
}