Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.configure({
    layoutTemplate: "layoutConfirm"
});

Router.route('/', {name: 'postsList', layoutTemplate: 'layout'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function () {
        return Posts.findOne(this.params._id);
    },
    layoutTemplate: 'layout'
});


Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    data: function () {
        return Posts.findOne(this.params._id);
    },
    layoutTemplate: 'layout'
});

Router.route('/submit', {name: 'postSubmit', layoutTemplate: 'layout'});

Router.route('/search', {name: 'postSearch', layoutTemplate: 'layout'});

Router.route('/confirm', {name: 'confirm', layoutTemplate: "layoutConfirm"});


let requireLogin = function () {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};


Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'postSearch'});