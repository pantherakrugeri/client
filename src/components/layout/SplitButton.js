import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function SplitButton(props) {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleClick = (e) => {
		console.info(`You clicked ${props.options[selectedIndex]}`);
		props.onSetValue(props.options[selectedIndex]);
		console.log(props);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	return (
		<div>
			<ButtonGroup
				variant='contained'
				color='primary'
				ref={anchorRef}
				aria-label='split button'
			>
				<Button
					color='inherit'
					size='small'
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label='select gamesystem'
					aria-haspopup='menu'
					onClick={handleToggle}
				>
					<ArrowDropDownIcon color='primary' />
				</Button>
				<Button onClick={handleClick}>{props.options[selectedIndex]}</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id='split-button-menu'>
									{props.options.map((option, index) => (
										<MenuItem
											key={option}
											selected={index === selectedIndex}
											onClick={(event) => handleMenuItemClick(event, index)}
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
}
