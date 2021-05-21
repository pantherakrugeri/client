import React from "react";

class AbilityData extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [props],
		};

		this.getAbilityData = this.getAbilityData.bind(this);
	}

	componentDidMount() {
		//console.log(this)
		this.getAbilityData();
	}

	getAbilityData() {
		let abilities = [
			{
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
			},
		];
		//console.log(abilities)
		this.setState({
			data: abilities,
		});
	}

	render() {
		const abilityData = this.state.data;
		console.log(abilityData);
		return abilityData;
	}
}

export default AbilityData;
