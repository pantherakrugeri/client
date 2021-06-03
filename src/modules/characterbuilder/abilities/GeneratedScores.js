import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function GeneratedScores(p) {
	console.log(p.scores);

	const renderLists = (p) => {
		console.log(p);
		p.scores.forEach((item) => <ListItem>console.log(item)</ListItem>);
	};

	return <List>{renderLists(p)}</List>;
}

GeneratedScores.propTypes = {};

export default GeneratedScores;
