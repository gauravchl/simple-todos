
import React    from 'react';

Meteor.startup(function(){
  React.createClass({render(){return(<p>Hello</p>)}});
  console.log("Client Started!");
});

