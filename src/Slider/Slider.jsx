import React, { Component } from 'react';
import './Slider.css';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

class Slider extends Component {
	static propTypes = {
		changeImageWidth: React.PropTypes.func.isRequired,
		screenWidth: React.PropTypes.number
	}

	static defaultProps = {
		screenWidth: window.innerWidth
	}

	constructor(props) {
		super(props);

		this.state = {
			deltaPosition: {
				x: 0,
				y: 0
			}
		};

		this.handleDrag = this.handleDrag.bind(this);
		this.handleDragStop = this.handleDragStop.bind(this);
	}

	handleDragStop() {
		// -46 --> 47, total range of 93
		const width = (this.state.deltaPosition.x + 46)/93;

		this.props.changeImageWidth(width);
	}

	handleDrag(e, ui) {
	    const {x, y} = this.state.deltaPosition;

	    this.setState({
	    	deltaPosition: {
	    		x: x + ui.deltaX,
	    		y: y + ui.deltaY
	    	}
	    });
	}

	render() {
		const isMobile = this.props.screenWidth < this.props.mobileBreakpoint;

		const mediaQueryStyles = isMobile ? {
				margin: '0 auto',
				transform: 'scale(2)' // better, but not perfect
			} :
			{
				position: 'absolute',
				right: 0,
				top: 0
			};

		const
			circleStyle = {
				left: '42%'
			};

		return (
			<div className="Slider" style={mediaQueryStyles}>
				<div className="vertical-line left-line"></div>
				<div className="vertical-line right-line"></div>
				<div className="horizontal-line"></div>

				<Draggable
					axis="x"
					bounds="parent"
					onDrag={this.handleDrag}
					onStop={this.handleDragStop}>

					<div className="outer-circle" style={circleStyle}>
						<div className="inner-circle"></div>
					</div>

				</Draggable>

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
	return {...ownProps};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider);
