import { Meteor } from 'meteor/meteor';

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        Meteor.call('checkIfUserExists', username, function (err, result) {
            if (result) {
                Meteor.loginWithPassword(username, password, function (error) {
                    if (error) {
                        alert('密码错误');
                    } else {
                        alert('登陆成功');
                        Router.go('/confirm')
                    }
                });
            } else {
                alert('用户名错误')
            }
        });
    }
});