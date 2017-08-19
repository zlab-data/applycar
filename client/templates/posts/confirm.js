Template.confirm.events({
    'click .disagree': function () {
        Meteor.logout();
        Router.go('/');
    },
});
