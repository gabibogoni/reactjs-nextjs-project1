import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';

class App extends Component {
  //criando um estado
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
    //const teste = await postsResponse.then((res) => res)
    //const testejson = await teste.json();
    //console.log(testejson);

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos', {method: 'GET'});
    //const teste2 = await photosResponse.then((res) => res)
    // const testejson2 = await teste2.json();
    //console.log(testejson2);

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //uma foto para cada post com função de zip unindo dois arrays pelo menor array (que nesse caso é o posts)
    const postsAndPhotos = postsJson.map((post, index) => {
      //o spread (...) serve para pegar o conteúdo de dentro do array;
      return {...post, imagem: photosJson[index].url}
    })

    this.setState({posts: postsAndPhotos});
  }
 
  render() {
    const {posts} = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}  
              title={post.title} 
              body={post.body}
              id={post.id}
              imagem={post.imagem}     
            />
          ))}
        </div>
      </section>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá mundo!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
