Template.confirm.events({
    'click .disagree': function () {
        Meteor.logout();
        Router.go('/');
    },

    'click .agree': function () {
        Router.go('/');
    }
});
