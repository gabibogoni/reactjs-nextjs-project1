import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    //super() para chamar o constructor da classe
    super(props);

    //criando um estado
    this.state = {
      name: "Gabrieli Bogoni" 
    };
  }

  handlePClick() {
    console.log('<p> clicado')
  }



  render() {
    /*sintaxe de destructuring*/
    const {name} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {/*para colocar uma var no jsx {var} */}
            {name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
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
