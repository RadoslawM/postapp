import React, {Component} from 'react';
import './App.css';
import Post from './post';
import Home from './Home';



class App extends Component {
 state = {
      post: [],
    };


componentDidMout() {

  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(result => {
      this.setState({
      post:result.results
    });
});

}

render() {
  return(
    <div className="App">
    {this.state.post.length}
    {this.state.post.map(post => (
      <Post {...post}/>
      ))}>
      <Home/>

      </div>
  );
}

}

export default App;
