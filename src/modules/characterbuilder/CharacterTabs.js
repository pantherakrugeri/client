import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CharacterStepBuilder from './components/CharacterStepBuilder';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component={'span'} variant={'body2'}>
						{children}
					</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '100%',
		label: {
			fontWeight: 'bolder',
		},
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		fontWeight: 'bolder',
	},
	TabPanel: {
		width: '100%',
	},
}));

export default function CharacterTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation='vertical'
				variant='scrollable'
				value={value}
				onChange={handleChange}
				aria-label='Vertical tabs example'
				className={classes.tabs}
				textColor='primary'
			>
				<Tab label='Character Generation' {...a11yProps(0)} />
				<Tab label='Character Administration' {...a11yProps(1)} />
			</Tabs>
			<TabPanel value={value} index={0} className={classes.TabPanel}>
				Character Generation Wizard
				<CharacterStepBuilder />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Character Administration
			</TabPanel>
		</div>
	);
}
