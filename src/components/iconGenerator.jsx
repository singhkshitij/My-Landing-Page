import React, { Component } from 'react';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconsToGenerate: props.iconsToGenerate,
      urlsToLink: props.urlsToLink
    };
  }

  generateHtmlTags = (iconName, url) => {
    return (
      '<a target="_blank" rel="noopener noreferrer" href="' +
      url +
      '"><i class="fab ' +
      iconName +
      '"></i></a>'
    );
  };

  createAllIconsAndHyperLinks = () => {
    let outputHtml = '';
    for (let index = 0; index < this.state.iconsToGenerate.length; index++) {
      outputHtml +=
        this.generateHtmlTags(
          this.state.iconsToGenerate[index],
          this.state.urlsToLink[index]
        ) + '\n';
    }
    console.log(outputHtml);
    return outputHtml;
  };

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.createAllIconsAndHyperLinks() }}
      />
    );
  }
}
