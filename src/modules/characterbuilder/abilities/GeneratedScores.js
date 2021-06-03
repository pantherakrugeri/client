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

	const renderLists = () => {
		console.log(p);
		p.scores.forEach(function (item) {
			console.log(item);
			return <ListItem>item</ListItem>;
		});
	};

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
			<List>{renderLists()}</List>
		</div>
	);
}

GeneratedScores.propTypes = {};

export default GeneratedScores;
