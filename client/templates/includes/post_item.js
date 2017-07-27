Template.postItem.helpers({
    ownPost: function () {
        return this.userId === Meteor.userId();
    }
});

Template.postDetailItem.helpers({
    ownPost: function () {
        return this.userId === Meteor.userId();
    }
});