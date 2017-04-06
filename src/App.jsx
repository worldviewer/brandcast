import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery/Gallery.jsx';
import Menu from './Menu/Menu.jsx';
import Slider from './Slider/Slider.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Slider value={50} />
			</div>
		);
	}
}

export default App;
