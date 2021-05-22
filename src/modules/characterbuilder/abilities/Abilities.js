import React from "react";
import Ability from "./components/Ability";


const getAbilityData = [{
	abilityName: "Strength",
	abilityId: "strength-id",
	abilityType: "number",
	abilityValue: 0,
},
{
	abilityName: "Dexterity",
	abilityId: "dexterity-id",
	abilityType: "number",
	abilityValue: 0,
},
{
	abilityName: "Constitution",
	abilityId: "constitution-id",
	abilityType: "number",
	abilityValue: 0,
},
{
	abilityName: "Intelligence",
	abilityId: "intelligence-id",
	abilityType: "number",
	abilityValue: 0,
},
{
	abilityName: "Wisdom",
	abilityId: "wisdom-id",
	abilityType: "number",
	abilityValue: 0,
},
{
	abilityName: "Charisma",
	abilityId: "charisma-id",
	abilityType: "number",
	abilityValue: 0,
}];

class Abilities extends React.Component {
	state = {
		abilityData: getAbilityData
	};

	componentDidMount() {
		this.setState({ abilityData: getAbilityData });
		console.log(this.state.abilityData);
	}	

	abilityList = this.state.abilityData.map(({ abilityName, abilityId, abilityValue, ...Args }) => (
		<li key={abilityId}>
			<Ability
				//print
				abilityName={abilityName}
				abilityValue={this.state.abilityData.abilityValue}
				abilityType={Args.abilityType}
			/>
		</li>
	));

	render() {
		return (
			<div>
				<div style={{fontWeight: 'bold', paddingTop: '25px'}}>
					Abilities
				</div>
				<div>
					<ul style={{listStyleType: 'none'}}>
						{this.abilityList}
					</ul>
				</div>
			</div>
		)
	}
}

export default Abilities;
