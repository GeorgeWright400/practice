import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { additem } from "../Actions/index";

class ReduxPlay extends Component {
    constructor(props){
        super(props)
        this.state ={entry:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({entry: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        const newValue = this.state.entry;
        this.props.additem(newValue);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Item</label>
                    <input type="text" name="AddItem" onChange={this.handleChange} value={this.state.entry}></input>
                    <p>{this.state.entry}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

ReduxPlay.propTypes = {
    additem: PropTypes.func.isRequired
}

export default connect(null, {additem})(ReduxPlay);
