import React, { Component } from 'react'; 
// Définir l'interface pour l'état du composant
interface CounterState {
    count: number;
  }

  // La classe doit étendre React.Component pour beneficier des fonctionnalités de React, comme setState et render

class Counter  extends Component  { 
    state: CounterState = {
        count: 0,
      };
       increment = () => {
            this.setState({ count: this.state.count + 1 }); 
        }; 
       // Méthode render pour afficher le composant
    render() {
        return (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div> 
            );
            }
     } 
    export default Counter;