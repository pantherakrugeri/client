import React from "react";
import Ability from "./components/Ability";
//import AbilityData from "./AbilityData";

class Abilities extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.getAbilityData(),
		};
        
        this.getAbilityData = this.getAbilityData.bind(this);
	}

	componentDidMount() {
        console.log(this.state.data)
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
        console.log(abilities);
        return abilities;
	}

    renderAbilities() {
        const abilities = this.state.data;
        abilities.forEach(function (item, index) {
            let x = item.abilityName;
            console.log(x);
            //return(<div>x</div>);
            return <li>x</li>
        });

        console.log();

        //return [abilities[0].abilityName];

        return (
            <div>
            <Ability
                print
                abilityName={abilities[0].abilityName}
                abilityValue={abilities[0].abilityValue}
            />
            <Ability
                print
                abilityName={abilities[1].abilityName}
                abilityValue={abilities[1].abilityValue}
            />
            </div>
        )
    }

	render() {
		return (
            <div>
                {this.renderAbilities()}
            </div>
        )
	}
}

export default Abilities;
