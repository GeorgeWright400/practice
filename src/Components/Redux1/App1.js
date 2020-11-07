import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

export default class App1 extends React.Component {
    render() {
        return (
            <div>
              <PostForm />
              <hr />
              <Posts />
            </div>
        );
    }
}