import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 25,
	},
	heading: {
		textTransform: 'uppercase',
		fontWeight: 'bolder',
	},
}));

function GeneratedScores(p) {
	const classes = useStyles();

	const renderLists = () => {
		console.log(p);
		p.scores.forEach((item) => <ListItem>{this.item}</ListItem>);
	};

	return (
		<div className={classes.root}>
			<Typography variant='h5' color='secondary' align='center'>
				Results
			</Typography>
			<List>{renderLists}</List>
		</div>
	);
}

GeneratedScores.propTypes = {};

export default GeneratedScores;
