import './RootView';
import RootView from './RootView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faDiceD20,
	faDiceSix,
	faDiceFive,
	faDiceFour,
	faDiceThree,
	faDiceTwo,
	faDiceOne,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import TopBar from './components/layout/TopBar';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4682B4',
			color: '#4682B4',
		},
		secondary: {
			main: '#B0C4DE',
			color: '#B0C4DE',
		},
	},
	typography: {
		fontFamily: ['Arial', 'Verdana', 'sans-serif'].join(','),
	},
});

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<TopBar
					logo='dice-d20'
					title='...find your game! : Pathfinder'
					position='static'
				></TopBar>
				<RootView />
			</ThemeProvider>
		</div>
	);
}

library.add(
	fab,
	faDiceD20,
	faDiceSix,
	faDiceFive,
	faDiceFour,
	faDiceThree,
	faDiceTwo,
	faDiceOne
);

export default App;
