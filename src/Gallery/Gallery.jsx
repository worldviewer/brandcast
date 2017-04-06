import React, { Component } from 'react';
import './Gallery.css';
import { connect } from 'react-redux';

class Gallery extends Component {
	static propTypes = {
		directory: React.PropTypes.string.isRequired,
		imageSize: React.PropTypes.number
	}

	static defaultProps = {
		directory: '01',
		imageSize: .5
	}

	getImageNames() {
	}

	componentWillReceiveProps(nextProps) {
		this.getImageNames();
	}

	render() {
		return (
			<div className="Gallery">
				<div className="vertical-line"></div>
				<div className="images">

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		imageDirectory: state.imageDirectory,
		imageWidth: state.imageWidth
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Gallery);
