import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class Home extends Component {
    state = {
        post: [],
      };
  
  
  componentDidMount() {
  
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(posts => {
        this.setState({
        post:posts
      });
  });
  }

    render() {
    console.log(this.state.post)
        return (
    <div>
     <p>{this.state.post.map((post) =>
        <Link to={`/posts/${post.id}`}>
        {post.title}</Link>
        )}</p>
    </div>
  );
}

}

export default Home;