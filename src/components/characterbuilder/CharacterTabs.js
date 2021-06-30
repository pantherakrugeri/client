import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import CharacterStepBuilder from './CharacterStepBuilder';
import CharacterWizard from './CharacterWizard';

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
		width: '100%',
	},
	tab: {
		fontSize: '16px',
		fontWeight: '600',
		textTransform: 'none',
	},
	selected: {
		fontWeight: '1000',
	},
	tabs: {
		borderRight: theme.palette.primary.main,
		width: '20%',
		minWidth: '250px',
		'& .Mui-selected': {
			fontWeight: '750',
		},
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

	let characterSteps = [
		'Generate Abilities',
		'Choose Race',
		'Choose Class',
		'Pick Skills',
		'Buy Equipment',
		'Finish Details',
	];

	//let icons = ['dice', 'user', 'users', 'user-map', 'hiking', 'user-graduate'];

	return (
		<div className={classes.root}>
			<Tabs
				orientation='vertical'
				variant='scrollable'
				value={value}
				onChange={handleChange}
				aria-label='Vertical tabs'
				className={classes.tabs}
				textColor='primary'
			>
				<Tab
					className={classes.tab}
					label='Character Generation'
					{...a11yProps(0)}
				/>
				<Tab
					className={classes.tab}
					label='Character Administration'
					{...a11yProps(1)}
				/>
			</Tabs>
			<TabPanel value={value} index={0} className={classes.TabPanel}>
				<h1>Character Generation Wizard</h1>
				<CharacterWizard steps={characterSteps} />
				{/* <CharacterStepBuilder /> */}
			</TabPanel>
			<TabPanel value={value} index={1} className={classes.TabPanel}>
				<h1>Character Administration</h1>
			</TabPanel>
		</div>
	);
}
