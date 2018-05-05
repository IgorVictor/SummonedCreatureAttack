import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatureGroup from './components/CreatureGroup'

class App extends Component {
	
	
	rollTwenty () {
	  return Math.floor(Math.random() * 21);
	}	
	
  	
	generateCreatureAtacks(name, atackBonus) {
		
	}
		
	
  render() {
    return (
      <div className="App">
		<CreatureGroup creatures={['cobra 1', 'cobra2', 'cobra3']}/>
      </div>
    );
  }
}

export default App;
