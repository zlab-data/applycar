Posts = new Mongo.Collection('posts');
Records = new Mongo.Collection('records');

Posts.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, post) {
        return ownsDocument(userId, post);
    },
    remove: function (userId, post) {
        return ownsDocument(userId, post);
    }
});

Records.allow({
    insert: function (userId, doc) {
        return true;
    },
});

