import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountUIWrapper extends Component{
    componentDidMount(){
        //usa Meteor Blaze para renderizar los botones del login
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount(){
        //limpiamos la vista Blaze
        Blaze.remove(this.view);
    }
    render(){
        //solo generamos un placeholder que será insertado
        return <span ref="container" />;
    }
}