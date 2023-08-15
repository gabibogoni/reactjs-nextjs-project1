import { Component } from 'react';

import './styles.css';

import { PostSection } from '../../components/Posts';
import { getPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/TextInput';
//teste commit
export class Home extends Component {
  //criando um estado
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 25,
    searchValue: ''
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

    this.setState({posts: posts, page: nextPage});
  }
  
  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({searchValue: value})
  }
 
  render() {
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length; 

    // se a condição for verdadeira eu faço uma ação se for falsa faça outra
    /*se tem valor no searchValue os posts vão ser filtrados (.filter) retornando todos os posts que contém (.includes) 
    o seachValue que for digitado no input, significa que estou filtrando os meus posts e caso não tenha nenhum valor,
    vou retornar normalmente meus posts*/ 
    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) 
    
    : posts;

    return (
      <section className="container">
        <div className='search-container'>
          {/* para saber se existe algum valor em searchValue utilizo !!, que converte o valor para booleano
          (verdadeiro ou falso), se for uma string vazia vai ser falso, se for uma string que tem um valor vai ser true */}
          {
            !!searchValue && (
              <>
                <h1>Search value: {searchValue}</h1>
              </>
            )
          }            

          <SearchInput 
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && (
          <PostSection posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>This post does not exists!</p>
        )}
        
        <div className='button-container'>
          {/*enquanto estou fazendo a busca não aparece o botão 'load more posts'*/}
          {!searchValue && (
            <Button 
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
          )}          
        </div>
      </section>
    );
  }
}

