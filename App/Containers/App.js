import React, {Component} from 'react';
import RootContainer from './RootContainer';
import AnimatedLoader from 'react-native-animated-loader';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../Stores'; //Import the store'
// pop-up menu
import {MenuProvider} from 'react-native-popup-menu';

class App extends Component {
  renderLoading = () => (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('../Images/loader.json')}
      // eslint-disable-next-line react-native/no-inline-styles
      animationStyle={{height: 50, width: 50}}
      speed={1}
    />
  );

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <MenuProvider>
            <RootContainer />
          </MenuProvider>
        </PersistGate>
      </Provider>
    );
  }
}

console.disableYellowBox = true;

export default App;
