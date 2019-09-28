import React, {Component} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';

import {Images} from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

// Navigation Service
import NavigationService from '../Navigation/NavigationService';
// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions

class LaunchScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    console.log('Splash Screen');
    // this.props.userLogin();
    setTimeout(() => {
      NavigationService.navigate('LoginScreen');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <View style={styles.centered}>
          <Text style={styles.version}>Version 0.0.1</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.feedDataReducer.loading,
    data: state.feedDataReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchScreen);
