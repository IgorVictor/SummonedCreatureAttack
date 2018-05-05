import React from 'react'
import Creature from './Creature'

class CreatureGroup extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render () {
		return (
			<div className="CreatureGroup">
				<div className="titles">
					<div className="name littlebox">
					Name
					</div>
					<div className="otherValues littlebox">
					attack Bonus
					</div>
					<div className="otherValues littlebox">
					Roll
					</div>
					<div className="otherValues littlebox">
					Roll Tac
					</div>
					<div className="otherValues littlebox">
					attack Roll
					</div>
					<div className="otherValues littlebox">
					Damage
					</div>
					<div className="otherValues littlebox">
					Coletive Damage
					</div>
				</div>
				<ul className="CreatureList">
				{this.props.creatures.map(function(item, i){
					return (
					<li key={i}>
						<Creature 
						name={item.name} 
						attackBonus={item.attackBonus} 
						roll={item.roll} 
						rollTacticalPosition={item.rollTacticalPosition}
						attackRoll={item.attackRoll}
						damage={item.damage}
						colectiveDamage={item.colectiveDamage}/>
					</li>);
				})}
				</ul>
			</div>			
		);
	}
}

export default CreatureGroup;