Template.login.events({
    'submit form': function(e) {
        e.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        Meteor.loginWithPassword(username, password);
    }
});