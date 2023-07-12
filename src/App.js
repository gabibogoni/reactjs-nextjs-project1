import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  //criando um estado
  state = {
    name: "Gabrieli Bogoni",
    counter: 0
  };

  handlePClick = () => {
    //sempre quando o estado muda no React a função render vai ser chamada novamente (chamei o estado render vai ser chamado novamente com o estado novo)
    this.setState({name: "Fellipe Carvalho"});
  }

  handleAClick = (event) => {
    /*para não precisar fazer um bind do método utilizamos um hack do JS onde é criado um método como arrow function 
    (a arrow function não tem this dentro dela, então significa que quando eu chamar o this, ela vai buscar dentro do elemento pai, que
    nesse caso é a própria classe)*/
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    /*sintaxe de destructuring*/
    const {name, counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {/*para colocar uma var no jsx {var} */}
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
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
