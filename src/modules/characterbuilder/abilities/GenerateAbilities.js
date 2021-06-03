import React from 'react';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Ability from './components/Ability';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Abilities from './Abilities';
import GeneratedScores from './GeneratedScores';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 25,
		border: 'thin solid gray',
		padding: 25,
	},
	heading: {
		textTransform: 'uppercase',
		fontWeight: 'bolder',
	},
	pad: {
		padding: 50,
	},
	abilityPad: {
		padding: 10,
	},
	formControl: {
		margin: 50,
		minWidth: 120,
		width: 200,
	},
	boldLabels: {
		fontWeight: 'bold',
	},
}));

function GenerateAbilities(props) {
	// states
	const [strength, setStrength] = useState(0);
	const [dexterity, setDexterity] = useState(0);
	const [constitution, setConstitution] = useState(0);
	const [intelligence, setIntelligence] = useState(0);
	const [wisdom, setWisdom] = useState(0);
	const [charisma, setCharisma] = useState(0);
	const [generationmethod, setGenerationMethod] = useState('');
	const [methodstyle, setMethodStyle] = useState('');

	const classes = useStyles();

	//initial config to pass into ability
	const abilityConfig = [
		{
			abilityName: 'Strength',
			abilityId: 'strength-id',
			abilityType: 'number',
			abilityValue: 0,
		},
		{
			abilityName: 'Dexterity',
			abilityId: 'dexterity-id',
			abilityType: 'number',
			abilityValue: 0,
		},
		{
			abilityName: 'Constitution',
			abilityId: 'constitution-id',
			abilityType: 'number',
			abilityValue: 0,
		},
		{
			abilityName: 'Intelligence',
			abilityId: 'intelligence-id',
			abilityType: 'number',
			abilityValue: 0,
		},
		{
			abilityName: 'Wisdom',
			abilityId: 'wisdom-id',
			abilityType: 'number',
			abilityValue: 0,
		},
		{
			abilityName: 'Charisma',
			abilityId: 'charisma-id',
			abilityType: 'number',
			abilityValue: 0,
		},
	];

	function generateScores(min, max) {
		let strength = [];
		let dexterity = [];
		let constitution = [];
		let intelligence = [];
		let wisdom = [];
		let charisma = [];
		let rolls = 0;

		if (generationmethod === 'standard') {
			rolls = 4; //4d6
		} else if (generationmethod === 'classic') {
			rolls = 3;
		} else if (generationmethod === 'heroic') {
			rolls = 2;
		}

		console.log(generationmethod);

		let i = 0;
		do {
			i += 1;
			strength.push(Math.floor(Math.random() * (max - min + 1) + min));
			dexterity.push(Math.floor(Math.random() * (max - min + 1) + min));
			constitution.push(Math.floor(Math.random() * (max - min + 1) + min));
			intelligence.push(Math.floor(Math.random() * (max - min + 1) + min));
			wisdom.push(Math.floor(Math.random() * (max - min + 1) + min));
			charisma.push(Math.floor(Math.random() * (max - min + 1) + min));
		} while (i < rolls);
		strength.sort(function (a, b) {
			return b - a;
		});
		dexterity.sort(function (a, b) {
			return b - a;
		});
		constitution.sort(function (a, b) {
			return b - a;
		});
		intelligence.sort(function (a, b) {
			return b - a;
		});
		wisdom.sort(function (a, b) {
			return b - a;
		});
		charisma.sort(function (a, b) {
			return b - a;
		});

		console.log(strength);
		console.log(dexterity);
		console.log(constitution);
		console.log(intelligence);
		console.log(wisdom);
		console.log(charisma);

		if (generationmethod === 'heroic') {
			strength = strength[0] + strength[1] + 6;
			dexterity = dexterity[0] + dexterity[1] + 6;
			constitution = constitution[0] + constitution[1] + 6;
			intelligence = intelligence[0] + intelligence[1] + 6;
			wisdom = wisdom[0] + wisdom[1] + 6;
			charisma = charisma[0] + charisma[1] + 6;
		} else if (generationmethod === 'standard' || 'classic') {
			strength = strength[0] + strength[1] + strength[2];
			dexterity = dexterity[0] + dexterity[1] + dexterity[2];
			constitution = constitution[0] + constitution[1] + constitution[2];
			intelligence = intelligence[0] + intelligence[1] + intelligence[2];
			wisdom = wisdom[0] + wisdom[1] + wisdom[2];
			charisma = charisma[0] + charisma[1] + charisma[2];
		}

		if (generationmethod === 'purchase') {
			setStrength(10);
			setDexterity(10);
			setConstitution(10);
			setIntelligence(10);
			setWisdom(10);
			setCharisma(10);
		} else {
			// set state
			setStrength(strength);
			setDexterity(dexterity);
			setConstitution(constitution);
			setIntelligence(intelligence);
			setWisdom(wisdom);
			setCharisma(charisma);
		}
	}

	const handleGenerationMethod = (event) => {
		if (event.target.value === 'purchase') {
			setStrength(10);
			setDexterity(10);
			setConstitution(10);
			setIntelligence(10);
			setWisdom(10);
			setCharisma(10);
			setGenerationMethod('purchase');
		} else {
			setGenerationMethod(event.target.value);
		}
	};

	const handleMethodStyle = (event) => {
		setMethodStyle(event.target.value);
	};

	const handleGenerateAbilities = () => {
		generateScores(1, 6);
	};

	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<Typography
				variant='h5'
				color='primary'
				align='center'
				className={classes.heading}
			>
				{props.title}
			</Typography>
			<Grid
				container
				spacing={2}
				direction='row'
				justify='flex-start'
				alignItems='flex-start'
			>
				<Abilities />
				<GeneratedScores scores={[1, 3, 5, 7, 9]} numberOfSets={1} />
			</Grid>
		</form>

		// <form className={classes.root} noValidate autoComplete='off'>
		//   <Grid
		//     container
		//     spacing={1}
		//     direction='row'
		//     justify='flex-start'
		//     alignItems='flex-start'
		//   >
		//     <FormControl className={classes.formControl}>
		//       <InputLabel htmlFor='method-native-simple'>
		//         Generation Method
		//       </InputLabel>
		//       <Select
		//         native
		//         value={generationmethod}
		//         onChange={handleGenerationMethod}
		//         inputProps={{
		//           name: "generationmethod",
		//           id: "method-native-simple",
		//         }}
		//       >
		//         <option aria-label='None' value='' />
		//         <option value={"standard"}>Standard</option>
		//         <option value={"classic"}>Classic</option>
		//         <option value={"heroic"}>Heroic</option>
		//         <option value={"purchase"}>Purchase</option>
		//       </Select>
		//       {generationmethod === "standard" && <div>Standard: 4d6</div>}
		//       {generationmethod === "classic" && <div>Classic: 3d6</div>}
		//       {generationmethod === "heroic" && <div>Heroic: 2d6 + 6</div>}
		//       {generationmethod === "purchase" && (
		//         <div>Choose Style of Campaign</div>
		//       )}
		//     </FormControl>

		//     <FormControl className={classes.formControl}>
		//       <InputLabel htmlFor='methodstyle-native-simple'>
		//         Method Style
		//       </InputLabel>
		//       <Select
		//         hidden
		//         native
		//         value={methodstyle}
		//         onChange={handleMethodStyle}
		//         inputProps={{
		//           name: "methodstyle",
		//           id: "methodstyle-native-simple",
		//         }}
		//       >
		//         <option aria-label='None' value='' />
		//         <option value={"random"}>Assign Randomly</option>
		//         <option value={"choose"}>Assign from Pool</option>
		//       </Select>
		//     </FormControl>
		//   </Grid>

		//   <Grid
		//     className={classes.pad}
		//     container
		//     spacing={1}
		//     direction='column'
		//     justify='flex-start'
		//     alignItems='flex-start'
		//   >
		//     <Ability
		//       inputProps={{ min: 0 }}
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[0].abilityId}
		//       abilityName={abilityConfig[0].abilityName}
		//       abilityType={abilityConfig[0].abilityType}
		//       abilityValue={strength}
		//       onChange={(e) => setStrength(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     <Ability
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[1].abilityId}
		//       abilityName={abilityConfig[1].abilityName}
		//       abilityType={abilityConfig[1].abilityType}
		//       abilityValue={dexterity}
		//       onChange={(e) => setDexterity(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     <Ability
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[2].abilityId}
		//       abilityName={abilityConfig[2].abilityName}
		//       abilityType={abilityConfig[2].abilityType}
		//       abilityValue={constitution}
		//       onChange={(e) => setConstitution(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     <Ability
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[3].abilityId}
		//       abilityName={abilityConfig[3].abilityName}
		//       abilityType={abilityConfig[3].abilityType}
		//       abilityValue={intelligence}
		//       onChange={(e) => setIntelligence(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     <Ability
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[4].abilityId}
		//       abilityName={abilityConfig[4].abilityName}
		//       abilityType={abilityConfig[4].abilityType}
		//       abilityValue={wisdom}
		//       onChange={(e) => setWisdom(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     <Ability
		//       className={classes.abilityPad}
		//       abilityId={abilityConfig[5].abilityId}
		//       abilityName={abilityConfig[5].abilityName}
		//       abilityType={abilityConfig[5].abilityType}
		//       abilityValue={charisma}
		//       onChange={(e) => setCharisma(e.target.value)}
		//       InputLabelProps={{
		//         shrink: true,
		//         className: classes.boldLabels,
		//       }}
		//     />
		//     {(generationmethod === "standard" ||
		//       generationmethod === "classic" ||
		//       generationmethod === "heroic") &&
		//       methodstyle !== "" && (
		//         <Button
		//           variant='contained'
		//           color='primary'
		//           onClick={() => handleGenerateAbilities()}
		//         >
		//           Generate Abilities
		//         </Button>
		//       )}
		//   </Grid>
		// </form>
	);
}

export default GenerateAbilities;
