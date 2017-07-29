import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check'

Meteor.startup(() => {
    // code to run on server at startup
    Cloudinary.config({
        cloud_name: 'zlabdata',
        api_key: '287546948217581',
        api_secret: 'dbq5a9wfGLooe1IKx57AMj0DFW0',

    });
    Accounts.config({
        forbidClientAccountCreation: true
    })
});

Meteor.methods({
    'checkIfUserExists': function (username) {
        return !!(Meteor.users.findOne({username: username}));
    },

    'checkPassword': function(username, password) {
        check(password, String);
        // let password = {digest: digest, algorithm: 'sha-256'};
        console.log(username);
        console.log(password);
        let result = Accounts._checkPassword(username, password);
        return result.error === null;
    }
});