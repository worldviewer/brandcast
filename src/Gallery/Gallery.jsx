import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
	render() {
		return (
			<div className="Gallery">

			</div>
		);
	}
}

Gallery.propTypes = {
	directory: React.PropTypes.string.isRequired
};

export default Gallery;
