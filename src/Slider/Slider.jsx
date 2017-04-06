import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
	getDefaultProps() {
		return {
			value: 48.4
		}
	}

	render() {
		const
			percent = (this.props.value + 1)*0.83,
			circleStyle = {
				left: percent + '%'
			};

		return (
			<div className="Slider">
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

Slider.propTypes = {
	value: React.PropTypes.number
};

export default Slider;
