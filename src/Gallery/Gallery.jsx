import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
	static propTypes = {
		directory: React.PropTypes.string.isRequired,
		imageSize: React.PropTypes.number
	}

	getDefaultProps() {
		return {
			size: 50
		}
	}

	render() {
		return (
			<div className="Gallery">

			</div>
		);
	}
}

export default Gallery;
