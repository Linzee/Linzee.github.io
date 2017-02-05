import React, { Component } from 'react';
import Template from './Layout.pug.js';

import './style/app.css';
import 'foundation-sites/js/foundation.js';

class Layout extends Component {
	render() {
		return <Template translator={this.props.route.translator} children={this.props.children} changeLocale={this.props.route.changeLocale} />
	}
}

export default Layout;