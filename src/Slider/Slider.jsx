import React, { Component } from 'react';
import './Slider.css';
import { connect } from 'react-redux';
import { changeImageWidth } from '../redux';

class Slider extends Component {
	static propTypes = {
		value: React.PropTypes.number
	}

	static defaultProps = {
		value: 48.4
	}

	render() {
		let isMobile = false;

		const mediaQueryStyles = isMobile ? {
				
			} :
			{
				position: 'absolute',
				right: 0,
				top: 0
			};

		const
			percent = (this.props.value + 1)*0.83,
			circleStyle = {
				left: percent + '%'
			};

		return (
			<div className="Slider" style={mediaQueryStyles}>
				<div className="vertical-line left-line"></div>
				<div className="vertical-line right-line"></div>
				<div className="horizontal-line"></div>
				<div className="outer-circle" style={circleStyle}>
					<div className="inner-circle"></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		imageWidth: state.imageWidth
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeImageWidth: (width) => {
			return dispatch(changeImageWidth(width));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider);