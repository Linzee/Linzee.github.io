import React, { Component } from 'react';
import Template from './ImageEntry.pug.js';

export class ImageEntry extends Component {
  render() {
    return <Template translator={this.props.translator} entry={this.props.entry} />
  }
}

export default ImageEntry;