import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitButton from './SplitButton';
import AppContext from '../../context/app/appContext';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		margin: '5px',
	},
	gamesystemContainer: {
		position: 'absolute',
		right: '100px',
	},
	hamburgerContainer: {
		position: 'absolute',
		right: '25px',
	},
	slogan: {
		position: 'relative',
		left: '25px;',
		fontSize: '1.5rem',
	},
}));

export default function ButtonAppBar(props) {
	const appContext = useContext(AppContext);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const classes = useStyles();

	const handleHClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleHClose = () => {
		setAnchorEl(null);
	};

	const handleGameSystem = (value) => {
		console.info(value);
		appContext.setGameSystem(value);
	};

	return (
		<React.Fragment>
			<AppBar position={props.position}>
				<Toolbar className={classes.toolbar}>
					<FontAwesomeIcon icon={props.logo} color='inherit' size='3x' />

					<Typography className={classes.slogan} color='inherit'>
						{props.title}
					</Typography>

					<Box className={classes.gamesystemContainer}>
						<SplitButton
							onSetValue={handleGameSystem}
							options={['Pathfinder', 'Rolemaster']}
						/>
					</Box>

					<Box className={classes.hamburgerContainer}>
						<Button
							edge='start'
							color='inherit'
							aria-label='menu'
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleHClick}
						>
							<MenuIcon fontSize='large' />
						</Button>

						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleHClose}
						>
							<MenuItem onClick={handleHClose}>Login</MenuItem>

							<MenuItem onClick={handleHClose}>Profile</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
