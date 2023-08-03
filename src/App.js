import { Component } from 'react';
import './App.css';

import { getPosts } from './utils/load-posts';
import { PostSection } from './components/Posts';

class App extends Component {
  //criando um estado
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await getPosts();
    this.setState({posts: postsAndPhotos});
  }
 
  render() {
    const {posts} = this.state;

    return (
      <section className="container">
        <PostSection posts={posts} />
      </section>
    );
  }
}

export default App;
