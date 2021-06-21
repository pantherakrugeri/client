import React from 'react';
import PropTypes from 'prop-types';
import {
	makeStyles,
	withStyles,
	Typography,
	List,
	ListItem,
	Grid,
	Tooltip,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
	diceIcon: {
		marginLeft: 10,
	},
	itemWidth: {
		display: 'inline-block',
		width: 25,
		textAlign: 'right',
	},
	list: {
		marginTop: 25,
	},
	h4: {
		textAlign: 'center',
	},
}));

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
		padding: 10,
	},
}))(Tooltip);

const GeneratedScores = (props) => {
	const classes = useStyles();

	const propList = props.scores;

	const getIcon = (die) => {
		let dieText = null;
		let icon = 'dice-';

		switch (die) {
			case 6:
				dieText = 'six';
				break;
			case 5:
				dieText = 'five';
				break;
			case 4:
				dieText = 'four';
				break;
			case 3:
				dieText = 'three';
				break;
			case 2:
				dieText = 'two';
				break;
			case 1:
				dieText = 'one';
				break;
			default:
				dieText = 'one';
		}
		return icon + dieText;
	};

	if (!props.showResults) {
		return null;
	}

	let listItems = '';

	if (props.methodStyle === 'choose') {
		listItems = propList.map((section) => (
			<div key={section.title} className={classes.list}>
				<h4 className={classes.h4}>{section.title}</h4>
				<List key={section.title}>
					{section.data.map((score, index) => {
						return (
							<HtmlTooltip
								placement='right'
								key={Math.random()}
								title={
									<div ref={React.createRef()}>
										{section.diceResults[index].map((die, index) => (
											<FontAwesomeIcon
												key={'die' + Math.random()}
												icon={getIcon(die)}
												className={classes.diceIcon}
												color='#FFDB58'
												size='3x'
											/>
										))}
									</div>
								}
							>
								<ListItem key={'item-' + score + index}>
									<span className={classes.itemWidth}>{score}</span>

									<FontAwesomeIcon
										icon='dice-d20'
										className={classes.diceIcon}
										color='#4682B4'
										size='2x'
									/>
								</ListItem>
							</HtmlTooltip>
						);
					})}
				</List>
			</div>
		));
	} else {
		listItems = '';
	}

	return (
		<div className={classes.root}>
			<Typography
				variant='h6'
				color='secondary'
				align='center'
				className={classes.heading}
			>
				{props.title}
			</Typography>
			<Grid direction='row' container spacing={2}>
				{listItems}
			</Grid>
		</div>
	);
};

GeneratedScores.propTypes = {
	scores: PropTypes.array,
	results: PropTypes.array.isRequired,
	title: PropTypes.string,
};

GeneratedScores.defaultProps = {
	title: '',
};

export default GeneratedScores;
