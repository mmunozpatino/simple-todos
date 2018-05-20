import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js'; 

//importamos la configuracion del login
import '../imports/startup/accounts-config';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});