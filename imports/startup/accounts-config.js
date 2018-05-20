import {Accounts} from 'meteor/accounts-base';

//configuramos para usar usernames y no emails
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY",
})