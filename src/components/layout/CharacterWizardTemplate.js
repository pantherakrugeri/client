import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		marginTop: theme.spacing(5),
	},
	heading: {
		color: theme.palette.primary.color,
		fontSize: '1.75rem',
		fontWeight: '750',
	},
}));

const CharacterWizardTemplate = (props) => {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Typography className={classes.heading}>{props.title}</Typography>

			{props.children}
		</Grid>
	);
};

CharacterWizardTemplate.propTypes = {
	containerType: PropTypes.string,
};

export default CharacterWizardTemplate;
