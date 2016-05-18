'use strict';

import React, {Component} from 'react';
import Relay from 'react-relay';

import {
  View,
  Text,
} from 'react-native';

class App extends Component {

  render() {
    console.log('props', this.props);
    return(
     <View>
      <Text>Testing</Text>
     </View>
    );
  }
}


export default Relay.createContainer(App, {
  fragments: {
    page: () => Relay.QL`
      fragment on Viewer {
        posts { id, title }
      }
    `,
  }
})
