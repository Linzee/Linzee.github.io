/*eslint-disable no-unused-vars, no-useless-concat, no-useless-escape, no-sequences */
import React from 'react';
import __map from 'pug-react-compiler/runtimes/map.js';
import {Link} from 'react-router';
import {slowScrollTo} from '../../javascript/utils';
import TextEntry from './../projectEntries/TextEntry/TextEntry';
import ImageEntry from './../projectEntries/ImageEntry/ImageEntry';
import FileEntry from './../projectEntries/FileEntry/FileEntry';
import VideoEntry from './../projectEntries/VideoEntry/VideoEntry';
module.exports = class __Component extends React.Component {
    render() {
        const {props, state} = this;
        return React.DOM.article({ className: 'single' + ' ' + 'project' }, React.DOM.div({ className: 'image' }, React.DOM.div({
            'style': { backgroundImage: 'url(' + (this.props.project.image ? this.props.project.image : require('../../images/noimage.png')) + ')' },
            className: 'img-container'
        }), React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'to-bottom' }, React.DOM.div({ className: 'corners' }, React.DOM.h1(null, this.props.project.title))))), React.DOM.div({ className: 'row' + ' ' + 'content' + ' ' + 'white-triange-bottom-border' }, React.DOM.div({ className: 'corners' }, __map(this.props.project.entries, (entry, $index) => {
            return React.DOM.div({
                'key': $index,
                className: 'entry'
            }, entry.type === 'image' ? React.createElement(ImageEntry, {
                'key': $index,
                'translator': this.props.translator,
                'entry': entry
            }) : null, entry.type === 'text' ? React.createElement(TextEntry, {
                'key': $index,
                'translator': this.props.translator,
                'entry': entry
            }) : null, entry.type === 'file' ? React.createElement(FileEntry, {
                'key': $index,
                'translator': this.props.translator,
                'entry': entry
            }) : null, entry.type === 'video' ? React.createElement(VideoEntry, {
                'key': $index,
                'translator': this.props.translator,
                'entry': entry
            }) : null);
        }), React.DOM.p({ className: 'project-meta' + ' ' + 'text-center' }, (this.props.project.startedAt ? this.props.formatDate(this.props.project.startedAt) : '?') + this.props.translator(' to ') + (this.props.project.finishedAt ? this.props.formatDate(this.props.project.finishedAt) : '?')), React.DOM.div({ className: 'row' }, React.DOM.div({ className: 'project-navigation' }, React.createElement(Link, {
            'to': 'project/' + this.props.project.predecessor.slug,
            className: 'button tiny left'
        }, this.props.translator('Previous project')), React.createElement(Link, {
            'to': 'project/' + this.props.project.successor.slug,
            className: 'button tiny right'
        }, this.props.translator('Next project')))))));
    }
};