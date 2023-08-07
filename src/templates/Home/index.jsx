import { Component } from 'react';

import './styles.css';

import { PostSection } from '../../components/Posts';
import { getPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  //criando um estado
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 25
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage} = this.state;

    const postsAndPhotos = await getPosts();
    this.setState({
      /*.slice (fateamento) retorna uma cópia de parte de um array a partir de um subarray criado entre as
       posições início e fim (fim não é incluído) de um array original. O Array original não é modificado. 
       ex: arr.slice([início[,fim]]) */
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      posts,
      allPosts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
  }
 
  render() {
    const {posts, page, postsPerPage, allPosts} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length; 

    return (
      <section className="container">
        <PostSection posts={posts} />

        <div className='button-container'>
          <Button 
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}

