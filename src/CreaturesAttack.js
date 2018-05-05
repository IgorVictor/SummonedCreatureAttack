import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatureGroup from './components/CreatureGroup';
import Creature from './components/Creature';
import CreatureCreator from './components/CreatureCreator';

class Creaturesattack extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			creatures : [],
		}
	}
	
	rollDie (dice) {
	  return Math.floor(Math.random() * (dice+1));
	}	
	
	rollDice (diceSize, numberOfDice) {
		let result = 0;
		for (let i = 0; i < numberOfDice; i++) {
		  result = result + Math.floor(Math.random() * (diceSize+1))
		}
	  return result;
	}
	
	orderedCreatureList(creatures) {
		let orderedCreatures = creatures.sort( function (a,b) {
		return b.attackRoll-a.attackRoll})
		let colectiveDamage = 0;
		for (let i = 0; i < orderedCreatures.length; i++) {
			orderedCreatures[i].colectiveDamage = parseInt(colectiveDamage + orderedCreatures[i].damage);
			colectiveDamage = orderedCreatures[i].colectiveDamage;
		}
		return orderedCreatures;
	}
	
	calculateattack(attackBonus, roll, rollTacticalPosition, tacticalPosition) {
		if (tacticalPosition > 0) {
			return parseInt(attackBonus + Math.max(roll, rollTacticalPosition));
		} else if (tacticalPosition === 0) {
			return parseInt(attackBonus + roll);
		} else {
			return parseInt(attackBonus + Math.min(roll, rollTacticalPosition));
		}
	}
	
	generateCreatureattacks(name, attackBonus, numberOfCreatures, damage, tacticalPosition) {
		let creatures = [];
		let colectiveDamage = 0;
		for (let i = 0; i < numberOfCreatures; i++) {
			let c = new Creature();
			c.name = name+i;
			c.attackBonus = attackBonus;
			c.roll = this.rollDie(20);
			if (tacticalPosition !== 0) {
				c.rollTacticalPosition = this.rollDie(20);
			} else {
				c.rollTacticalPosition = 0;
			}
			
			c.attackRoll = this.calculateattack(c.attackBonus, c.roll, c.rollTacticalPosition, tacticalPosition);
			c.damage = damage;
			c.colectiveDamage = 0;
			creatures.push(c);
		}
//		let orderedCreatures = this.orderedCreatureList(creatures);
//		let printTexts = [];
//		for (let j = 0; j < orderedCreatures.length; j++) {
//			printTexts.push(orderedCreatures[j].printText);
			
//		}
		this.setState({creatures: this.orderedCreatureList(creatures)}) ;
	}
	
	handleSubmit(name, numberOfCreatures, attackBonus, damage, tacticalPosition) {
		this.generateCreatureattacks(name, parseInt(attackBonus), parseInt(numberOfCreatures), parseInt(damage), parseInt(tacticalPosition));
	}
	
	render() {
		return (
		<div className="App">
			<CreatureCreator onSubmit={(i,j,k,l,m) => this.handleSubmit(i, j, k, l, m)}/>
			<CreatureGroup creatures={this.state.creatures}/>
		</div>
		);
  }
}

export default Creaturesattack;
