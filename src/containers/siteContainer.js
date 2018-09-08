import React from 'react';
import { Container } from 'components/layout';

class SiteContainer extends React.Component {
  render() {
    return <Container lg={70} md={80} sm={95} {...this.props}>{this.props.children}</Container>;
  }
}

export default SiteContainer;