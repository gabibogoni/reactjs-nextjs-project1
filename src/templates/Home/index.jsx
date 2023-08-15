import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { PostSection } from '../../components/Posts';
import { getPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(25);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? 
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) 
  : posts; 

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await getPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log('Oi');
    handleLoadPosts(0, postsPerPage);    
  }, [handleLoadPosts, postsPerPage]); //[] dependência do handleLoadPosts();

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }
  
  const handleChange = (e) =>{
    const {value} = e.target;
    setSearchValue(value);
  }

  return (
    <section className="container">
      <div className='search-container'>
        {
          !!searchValue && (
            <>
              <h1>Search value: {searchValue}</h1>
            </>
          )
        }            

        <SearchInput 
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </div>

      {filteredPosts.length > 0 && (
        <PostSection posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && (
        <p>This post does not exists!</p>
      )}
      
      <div className='button-container'>
        {!searchValue && (
          <Button 
          text="Load more posts"
          onClick={loadMorePosts}
          disabled={noMorePosts}
        />
        )}          
      </div>
    </section>
  );
}

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 25,
//     searchValue: ''
//   };

  // async componentDidMount() {
  //   await this.loadPosts();
  // }

  // loadPosts = async () => {
  //   const { page, postsPerPage} = this.state;

  //   const postsAndPhotos = await getPosts();
  //   this.setState({
  //     posts: postsAndPhotos.slice(page, postsPerPage),
  //     allPosts: postsAndPhotos
  //   });
  // }

  // loadMorePosts = () => {
  //   const {
  //     page,
  //     postsPerPage,
  //     posts,
  //     allPosts
  //   } = this.state;
  //   const nextPage = page + postsPerPage;
  //   const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
  //   posts.push(...nextPosts);

  //   this.setState({posts: posts, page: nextPage});
  // }
  
  // handleChange = (e) =>{
  //   const {value} = e.target;
  //   this.setState({searchValue: value})
  // }
 
//   render() {
//     const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length; 

//     const filteredPosts = !!searchValue ? 
//     allPosts.filter(post => {
//       return post.title.toLowerCase().includes(searchValue.toLowerCase());
//     }) 
    
//     : posts;

//     return (
//       <section className="container">
//         <div className='search-container'>
//           {
//             !!searchValue && (
//               <>
//                 <h1>Search value: {searchValue}</h1>
//               </>
//             )
//           }            

//           <SearchInput 
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && (
//           <PostSection posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <p>This post does not exists!</p>
//         )}
        
//         <div className='button-container'>
//           {!searchValue && (
//             <Button 
//             text="Load more posts"
//             onClick={this.loadMorePosts}
//             disabled={noMorePosts}
//           />
//           )}          
//         </div>
//       </section>
//     );
//   }
// }

