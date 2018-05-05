import React from 'react'

class Creature extends React.Component {
		constructor(props) {
			super(props);
			attackBonus: 0;
			attackRoll: 0;
			roll: 0;
			rollTacticalPosition: 0;
			damage: 0;
			colectiveDamage: 0;
			name: null;
			printText: null;
		}
		
		render() {
			return (
			<div className="Creature">
				<div className="name littlebox">
				{this.props.name}
				</div>
				<div className="otherValues littlebox">
				{this.props.attackBonus}
				</div>
				<div className="otherValues littlebox">
				{this.props.roll}
				</div>
				<div className="otherValues littlebox">
				{this.props.rollTacticalPosition}
				</div>
				<div className="otherValues littlebox">
				{this.props.attackRoll}
				</div>
				<div className="otherValues littlebox">
				{this.props.damage}
				</div>
				<div className="otherValues littlebox">
				{this.props.colectiveDamage}
				</div>
				
			</div>
			);
		}
	}
export default Creature;