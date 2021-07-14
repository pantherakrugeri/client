import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './context/app/AppState';

ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	// document.getElementById('root')

	<AppState>
		<App />
	</AppState>,
	document.getElementById('root')
);
