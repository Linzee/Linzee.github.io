import React, { Component } from 'react';

import Template from './PortfolioItem.pug.js';

export class PortfolioItem extends Component {
	render() {
		return <Template translator={this.props.translator} project={this.props.item} />
	}
}

export default PortfolioItem;