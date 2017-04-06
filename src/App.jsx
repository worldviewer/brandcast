import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeActiveCollection, changeImageWidth } from './redux';

import './App.css';
import Gallery from './Gallery/Gallery.jsx';
import Menu from './Menu/Menu.jsx';
import Slider from './Slider/Slider.jsx';

class App extends Component {
	render() {
		const isMobile = this.props.screenWidth < 640;

		return (
			<div className="App">
				{!isMobile && (<Slider
					value={50}
				 	changeImageWidth={this.props.changeImageWidth}
				 	screenWidth={this.props.screenWidth} />)}

				<Menu
					active={this.props.activeCollection}
					changeActiveCollection={this.props.changeActiveCollection}
					collections={this.props.collections}
					screenWidth={this.props.screenWidth} />

				{isMobile && (<Slider
					value={50}
				 	changeImageWidth={this.props.changeImageWidth}
				 	screenWidth={this.props.screenWidth} />)}

				<Gallery
					directory={this.props.imageDirectory}
					imageSize={this.props.imageWidth}
					collections={this.props.collections}
					screenWidth={this.props.screenWidth} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		imageWidth: state.imageWidth,
		activeCollection: state.activeCollection,
		imageDirectory: state.imageDirectory,
		collections: state.collections,
		screenWidth: state.screenWidth
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
