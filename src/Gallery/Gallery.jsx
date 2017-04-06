import React, { Component } from 'react';
import './Gallery.css';
import { connect } from 'react-redux';

// Fetch all image assets at runtime using Webpack context.
// For more info, see http://webpack.github.io/docs/context.html
const assets = require.context('../../public/img', true, /\.jpg$/).keys();

class Gallery extends Component {
	static propTypes = {
		directory: React.PropTypes.string.isRequired,
		imageSize: React.PropTypes.number
	}

	constructor(props) {
		super(props);

		this.state = {
			files: []
		};
	}

	static defaultProps = {
		directory: '01',
		imageSize: .5
	}

	getImageNames(directory) {
		const re = new RegExp('/' + directory + '/', "g");
		const files = assets.filter(filename => filename.match(re));

		this.setState({
			files
		});
	}

	componentWillReceiveProps(nextProps) {
		this.getImageNames(nextProps.directory);
	}

	componentDidMount() {
		this.getImageNames(this.props.directory);
	}

	render() {
		const 
			isMobile = false;

		const mediaQueryStyles = isMobile ? {

			} :
			{

			};

		const width = this.props.imageSize * 500;

		return (
			<div className="Gallery">
				<div className="vertical-line"></div>
				<div className="images">

					{ this.state.files.map((filename, i) =>
						(<img src={'img/' + filename}
							key={i}
							alt="artist's work"
							className="graphics"
							width={width + 'px'} />))
					}

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
