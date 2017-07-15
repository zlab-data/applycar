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
};

if (typeof Meteor.users.findOne({username: 'daiyongfeng'}) === "undefined" ){
  Accounts.createUser({
                           username: 'daiyongfeng',
                           password : 'zhishu123',
                           profile  : {
                                                                           //publicly visible fields like firstname goes here
                        }
  });
};

if (typeof Meteor.users.findOne({username: '君胜汽车金融'}) === "undefined" ){
  Accounts.createUser({
                           username: '君胜汽车金融',
                           password : 'junsheng123',
                           profile  : {
                                                                           //publicly visible fields like firstname goes here
                        }
  });
}