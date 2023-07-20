import { Component } from 'react';
import './App.css';

class App extends Component {
  //criando um estado
  state = {
    counter: 0,
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

  timeoutUpdate = null;

  /*quando o componente for montado na tela eu quero que aconteça alguma coisa, o componentDidMount() vai ser montado uma vez assim que o componente
  for montado na tela*/
  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    /*looping infinito (o componentDidMount() dispara 1x, o componente atualiza, como nesse caso ele atualizou, o método componentDidUpdate() vai ser
    usado e vai chamar de novo essa função e vira um looping infinito)*/
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = "O título mudou";
    
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter + 1});
    }, 1000)
  }
 
  render() {
    /*sintaxe de destructuring*/
    const {posts, counter} = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
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
