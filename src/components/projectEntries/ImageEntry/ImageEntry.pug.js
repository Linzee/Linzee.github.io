/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.div({ className: 'image-entry' }, React.DOM.a({
            'href': this.props.entry.path,
            className: 'image-popup'
        }, React.DOM.img({
            'src': this.props.entry.path,
            className: 'image-fit-window'
        })));
    }
};