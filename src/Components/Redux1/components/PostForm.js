import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions'


class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: ''
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <label >Title</label><br/>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                
                <p>{this.state.title}</p>
                <br/>
                
                    <label>Body</label><br/>
                    <textarea name="body" onChange={this.handleChange} value={this.state.body} />
                <br/>
                <p>{this.state.body}</p>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);