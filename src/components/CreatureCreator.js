import React from 'react'


class CreatureCreator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name : null, 
			attackBonus : 0, 
			damage : 0,
			adv : 0, 
			numberOfCreatures: 0
		}
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAtkBonusChange = this.handleAtkBonusChange.bind(this);
		this.handleDamageChange = this.handleDamageChange.bind(this);
		this.handleTacticalChange = this.handleTacticalChange.bind(this);
		this.handleNumCreaturesChange = this.handleNumCreaturesChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleNameChange(event) {
		 this.setState({name: event.target.value});
	}
	handleDamageChange(event) {
		 this.setState({damage: event.target.value});
	}
	handleAtkBonusChange(event) {
		 this.setState({attackBonus: event.target.value});
	}
	handleTacticalChange(event) {
		 this.setState({adv: parseInt(event.target.value)});
	}
	
	handleNumCreaturesChange(event) {
		 this.setState({numberOfCreatures: event.target.value});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.name, this.state.numberOfCreatures, this.state.attackBonus, this.state.damage, this.state.adv);
		this.setState({name: ''});
		this.setState({attackBonus: 0});
		this.setState({damage: 0});
		this.setState({adv: 0})
		this.setState({numberOfCreatures: 0});
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit} className="CreationForm">
			<label className="form-title">
			Name
			</label>
			<input className="field" type="text" value={this.state.name} onChange={this.handleNameChange} />
			<label className="form-title">
			Attack Bonus
			</label>
			<input className="field" type="number" value={this.state.attackBonus} onChange={this.handleAtkBonusChange} />
			<label className="form-title">
			Damage
			</label>
			<input className="field" type="number" value={this.state.damage} onChange={this.handleDamageChange} />
			<label className="form-title">
			Number of Creatures
			</label>
			<input className="field" type="number" value={this.state.numberOfCreatures} onChange={this.handleNumCreaturesChange} />
			<label className="form-title">
			Tactical Position
			</label>
			<select value={this.state.adv} onChange={this.handleTacticalChange}>
				<option value="-1">Disadvantage</option>
				<option value="0">Normal</option>
				<option value="1">Advantage</option>
			</select>
			<input type="submit" value="Submit" className="submitButton form-title"/>
			</form>
		);
	}

}

export default CreatureCreator;