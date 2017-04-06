import React, { Component } from 'react';
import './Menu.css';
import { connect } from 'react-redux';

class Menu extends Component {
	static propTypes = {
		collections: React.PropTypes.array,
		changeActiveCollection: React.PropTypes.func.isRequired,
		active: React.PropTypes.number,
		screenWidth: React.PropTypes.number
	}

	static defaultProps = {
		active: 0,
		screenWidth: window.innerWidth
	}

	getComponent(collection) {
		this.props.changeActiveCollection(collection);
	}

	markActiveCollection(collection) {
		return this.props.active === collection ?
			(<div className="vertical-line"></div>) :
			null;
	}

	render() {
		const isMobile = this.props.screenWidth < 640;

		const mediaQueryStyles = isMobile ? {
				display: 'block',
				top: '-50px'
			} :
			{
				display: 'inline-block',
				width: '315px'
			};

		return (
			<div className="Menu" style={mediaQueryStyles}>
				<nav>
					<ul className="collection-set">

						{this.props.collections.map((collection, i) =>
							(<li onClick={this.getComponent.bind(this, i)}
								key={i}
								className="collection">

								{this.markActiveCollection(i)}

								<p className="name">{collection.name}</p>
								<p className="dates">{collection.birth} - {collection.death}</p>

							</li>)
						)}

					</ul>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		activeCollection: state.activeCollection
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);
