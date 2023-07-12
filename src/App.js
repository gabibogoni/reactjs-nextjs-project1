import { Component } from 'react';
import './App.css';

class App extends Component {
  //criando um estado
  state = {
    posts: [
      {
        id: 1,
        title: "O título 1",
        body: "O body 1"
      },
      {
        id: 2,
        title: "O título 2",
        body: "O body 2"
      },
      {
        id: 3,
        title: "O título 3",
        body: "O body 3"
      }
    ]
  };

  render() {
    /*sintaxe de destructuring*/
    const {posts} = this.state;

    return (
      <div className="App">
        {posts.map(apelido_do_item_do_array => (
          <div key={apelido_do_item_do_array.id}>
            <h1>{apelido_do_item_do_array.title}</h1>
            <p>{apelido_do_item_do_array.body}</p>
          </div>
        ))}
      </div>
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
