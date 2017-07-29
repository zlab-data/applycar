import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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
    }
});