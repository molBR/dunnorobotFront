import React, {Component} from 'react';
import { connect } from 'react-redux';


const Text = ({ Text }) => (

    <div class="TextClass">
        <h1>{Text}</h1>
    </div>
    

);

export default connect(state => ({Text : state}))(Text);

