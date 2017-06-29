Meteor.publish('posts', function() {
  return Posts.find();
});


Meteor.publish('records', function() {
  return Records.find();
});


if(Meteor.users.findOne({username: 'wjy4528'})==false){
	Accounts.createUser({
                           username: 'wjy4528',
                           password : '960918',
                           profile  : {
                                                       //publicly visible fields like firstname goes here
                            }
	});
}
