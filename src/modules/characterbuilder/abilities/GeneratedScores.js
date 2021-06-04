import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		fontWeight: 'bolder',
	},
}));

function GeneratedScores(p) {
	const classes = useStyles();

	const listItems = p.scores.map((number) => <ListItem>{number}</ListItem>);

	return (
		<div className={classes.root}>
			<Typography
				variant='h6'
				color='secondary'
				align='center'
				className={classes.heading}
			>
				Results
			</Typography>
			<List>{listItems}</List>
		</div>
	);
}

GeneratedScores.propTypes = {};

export default GeneratedScores;
