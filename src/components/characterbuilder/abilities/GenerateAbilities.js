import React from 'react';
import { useState } from 'react';
import {
	Typography,
	makeStyles,
	Grid,
	FormControl,
	Select,
	InputLabel,
	Button,
} from '@material-ui/core';
import Abilities from './Abilities';
import GeneratedScores from './GeneratedScores';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '50px 10px 10px 10px',
		padding: '25px 15px 25px 50px',
		border: '1.75px solid gray',
		borderRadius: '25px',
		boxShadow: '2px 5px 8px gray',
	},
	heading: {
		marginBottom: '10px',
		fontSize: '2.25rem',
		fontWeight: '750',
	},
	formControl: {
		margin: 0,
		minWidth: 120,
		width: 250,
	},
	formLabel: {
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
	const [diceResults, setDiceResults] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);
	const [genResults, setGenResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	const classes = useStyles();

	function generateScores(min, max) {
		let str = [];
		let dex = [];
		let con = [];
		let int = [];
		let wis = [];
		let cha = [];
		let rolls = 0;

		if (generationmethod === 'standard') {
			rolls = 4; //4d6
		} else if (generationmethod === 'classic') {
			rolls = 3;
		} else if (generationmethod === 'heroic') {
			rolls = 2;
		}

		let i = 0;
		do {
			i += 1;
			str.push(Math.floor(Math.random() * (max - min + 1) + min));
			dex.push(Math.floor(Math.random() * (max - min + 1) + min));
			con.push(Math.floor(Math.random() * (max - min + 1) + min));
			int.push(Math.floor(Math.random() * (max - min + 1) + min));
			wis.push(Math.floor(Math.random() * (max - min + 1) + min));
			cha.push(Math.floor(Math.random() * (max - min + 1) + min));
		} while (i < rolls);
		str.sort(function (a, b) {
			return b - a;
		});
		dex.sort(function (a, b) {
			return b - a;
		});
		con.sort(function (a, b) {
			return b - a;
		});
		int.sort(function (a, b) {
			return b - a;
		});
		wis.sort(function (a, b) {
			return b - a;
		});
		cha.sort(function (a, b) {
			return b - a;
		});

		tempScores[0].diceResults = [];

		tempScores[0].diceResults.push(str);
		tempScores[0].diceResults.push(dex);
		tempScores[0].diceResults.push(con);
		tempScores[0].diceResults.push(int);
		tempScores[0].diceResults.push(wis);
		tempScores[0].diceResults.push(cha);
		setDiceResults(tempScores[0].diceResults);

		console.log(str);
		console.log(dex);
		console.log(con);
		console.log(int);
		console.log(wis);
		console.log(cha);

		if (generationmethod === 'heroic') {
			str = str[0] + str[1] + 6;
			dex = dex[0] + dex[1] + 6;
			con = con[0] + con[1] + 6;
			int = int[0] + int[1] + 6;
			wis = wis[0] + wis[1] + 6;
			cha = cha[0] + cha[1] + 6;
		} else if (generationmethod === 'standard' || 'classic') {
			str = str[0] + str[1] + str[2];
			dex = dex[0] + dex[1] + dex[2];
			con = con[0] + con[1] + con[2];
			int = int[0] + int[1] + int[2];
			wis = wis[0] + wis[1] + wis[2];
			cha = cha[0] + cha[1] + cha[2];
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
			setStrength(str);
			setDexterity(dex);
			setConstitution(con);
			setIntelligence(int);
			setWisdom(wis);
			setCharisma(cha);
		}
		tempScores[0].data.length = 0;
		tempScores[0].data = [str, dex, con, int, wis, cha];
		setGenResults(tempScores);
		console.log({ genResults });
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
		if (methodstyle === 'choose') setShowResults(true);
		else setShowResults(false);
	};

	let tempScores = [
		{
			title: 'Result 1',
			data: [strength, dexterity, constitution, intelligence, wisdom, charisma],
			diceResults: diceResults,
		},
		{
			title: 'Result 2',
			data: [4, 7, 9, 11, 13, 15],
			diceResults: [
				[2, 1, 1, 1],
				[3, 3, 1, 1],
				[3, 3, 3, 1],
				[5, 4, 2, 1],
				[6, 6, 1, 1],
				[5, 5, 5, 1],
			],
		},
	];

	return (
		<div className={classes.root} id='generateAbilities'>
			<Typography
				variant='h2'
				color='primary'
				align='center'
				className={classes.heading}
			>
				- {props.title} -
			</Typography>

			<form noValidate autoComplete='off'>
				<Grid
					container
					direction='row'
					alignItems='flex-start'
					alignContent='flex-start'
					spacing={1}
				>
					<Grid
						id='left-container'
						item
						container
						//lg={4}
						direction='column'
						spacing={2}
					>
						<Grid item>
							<FormControl className={classes.formControl}>
								<InputLabel
									htmlFor='method-native-simple'
									className={classes.formLabel}
								>
									Generation Method
								</InputLabel>
								<Select
									native
									value={generationmethod}
									onChange={handleGenerationMethod}
									inputProps={{
										name: 'generationmethod',
										id: 'method-native-simple',
									}}
								>
									<option aria-label='None' value='' />
									<option value={'standard'}>Standard</option>
									<option value={'classic'}>Classic</option>
									<option value={'heroic'}>Heroic</option>
									<option value={'purchase'}>Purchase</option>
								</Select>
								{generationmethod === 'standard' && <div>Standard: 4d6</div>}
								{generationmethod === 'classic' && <div>Classic: 3d6</div>}
								{generationmethod === 'heroic' && <div>Heroic: 2d6 + 6</div>}
								{generationmethod === 'purchase' && (
									<div>Choose Style of Campaign</div>
								)}
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<InputLabel
									htmlFor='methodstyle-native-simple'
									className={classes.formLabel}
								>
									Method Style
								</InputLabel>
								<Select
									hidden
									native
									value={methodstyle}
									onChange={handleMethodStyle}
									inputProps={{
										name: 'methodstyle',
										id: 'methodstyle-native-simple',
									}}
								>
									<option aria-label='None' value='' />
									<option value={'random'}>Assign Randomly</option>
									<option value={'choose'}>Assign from Pool</option>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							{(generationmethod === 'standard' ||
								generationmethod === 'classic' ||
								generationmethod === 'heroic') &&
								methodstyle !== '' && (
									<Button
										variant='contained'
										color='primary'
										onClick={() => handleGenerateAbilities()}
									>
										Generate Abilities
									</Button>
								)}
						</Grid>
					</Grid>

					<Grid id='right-container' item container>
						<Abilities
							title={'Abilities'}
							methodStyle={methodstyle}
							generationMethod={generationmethod}
						/>

						<GeneratedScores
							scores={tempScores}
							results={genResults}
							methodStyle={methodstyle}
							showResults={showResults}
						/>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}

export default GenerateAbilities;
