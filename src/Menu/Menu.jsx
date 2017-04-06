import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
	static propTypes = {
		collections: React.PropTypes.array,
		selectCollection: React.PropTypes.func, // .isRequired
		active: React.PropTypes.number
	}

	static defaultProps = {
		active: 0,
		collections: [
			{
				name: 'Adrian Frutiger',
				birth: 1928,
				death: 2015,
				directory: '01'
			},
			{
				name: 'Josef Muller-Brockman',
				birth: 1928,
				death: 2015,
				directory: '02'
			},
			{
				name: 'Emil Ruder',
				birth: 1928,
				death: 2015,
				directory: '03'
			},
			{
				name: 'Max Miedinger',
				birth: 1928,
				death: 2015,
				directory: '04'
			},
			{
				name: 'Herbert Matter',
				birth: 1907,
				death: 1984,
				directory: '05'
			}												
		]
	}

	getComponent(collection) {
		console.log('directory: ', this.props.collections[collection].directory);
		// this.props.selectCollection(collection);
	}

	render() {
		let isMobile = false;

		const mediaQueryStyles = isMobile ? {
				width: '100%'
			} :
			{
				display: 'inline-block',
				width: '20%'
			};

		return (
			<div className="Menu" style={mediaQueryStyles}>
				<nav>
					<ul className="collection-set">

						{this.props.collections.map((collection, i) =>
							(<li onClick={this.getComponent.bind(this, i)}
								key={i}
								className="collection">

								{this.props.active === i &&
								<div className="vertical-line li-line"></div>}

								<p className="name">{collection.name}</p>
								<p className="dates">{collection.birth} - {collection.death}</p>

							</li>)
						)}

					</ul>
				</nav>
				<div className="vertical-line ul-line"></div>
			</div>
		);
	}
}

export default Menu;
