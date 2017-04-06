import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeActiveCollection, changeImageWidth } from './redux';

import './App.css';
import Gallery from './Gallery/Gallery.jsx';
import Menu from './Menu/Menu.jsx';
import Slider from './Slider/Slider.jsx';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Slider
					value={50}
				 	changeImageWidth={this.props.changeImageWidth} />

				<Menu
					active={this.props.activeCollection}
					changeActiveCollection={this.props.changeActiveCollection}
					collections={this.props.collections} />

				<Gallery />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		imageWidth: state.imageWidth,
		activeCollection: state.activeCollection,
		imageDirectory: state.imageDirectory,
		collections: state.collections
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeImageWidth: (width) => {
			return dispatch(changeImageWidth(width));
		},
		changeActiveCollection: (collection) => {
			return dispatch(changeActiveCollection(collection));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
