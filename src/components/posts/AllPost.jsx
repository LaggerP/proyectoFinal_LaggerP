import React, { Component } from 'react';
import axios from 'axios'
import Post from './Post'


export default class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }
    componentDidMount() {
        //mas adelante se cambia por https://laggerpfinal.herokuapp.com/

        axios.get('http://localhost:4000/apiPost')
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    PostPublicados() {
        return this.state.posts.map(function (object, i) {
            return <Post obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h4>Últimos posteos</h4>
                <hr />
                {this.PostPublicados()}
            </div>
        );
    }
}
