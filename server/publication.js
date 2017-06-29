Meteor.publish('posts', function() {
  return Posts.find();
});


Meteor.publish('records', function() {
  return Records.find();
});


if(Meteor.users.findOne({username: 'admin'})==false){
	Accounts.createUser({
                           username: 'admin',
                           password : 'iamadmin123',
                           profile  : {
                                                   //publicly visible fields like firstname goes here
                            }
	});
}
