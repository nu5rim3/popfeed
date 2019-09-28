import React, {Component} from 'react';
import {Text, Image, View, TextInput, SafeAreaView, Alert} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
// Images
import {Images} from '../Themes';
// Styles
import styles from './Styles/RestPassWordScreenStyles';
// Icon
// import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
// ListCardItem
import ListCardItem from '../Components/ListCardItem';
import MainButton from '../Components/MainButton';
// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions
// Navigation
import NavigationService from '../Navigation/NavigationService';

class RestPassWordScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerStyle: styles.removeShadow,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      email: '',
    };
  }

  componentDidMount() {
    // this.onLogin(); // remove in the buid
  }

  componentWillUnmount() {
    this.setState({
      isFetching: false,
    });
  }

  // on Login
  onLogin = () => {
    NavigationService.navigate('LoginScreen');
  };

  // on Sign Up
  onSend = () => {
    console.log('send an email');
  };

  render() {
    const {data, loading} = this.props;
    return (
      <SafeAreaView style={styles.mainContainer}>
        {/* <View style={styles.mainContainer}> */}
        <AnimatedLoader
          visible={this.state.isFetching}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../Images/loader.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
        <View style={styles.headerSection}>
          <View style={styles.logoScection}>
            <Image source={Images.login_logo} style={styles.logo} />
          </View>
        </View>
        <View style={styles.screenTitle}>
          <Text style={styles.titleStyle}>Change Password</Text>
        </View>
        <View style={styles.bodySection}>
          <View style={styles.formSection}>
            <View style={styles.formItem}>
              <View style={{flex: 1}}>
                <View style={styles.itemLogo}>
                  <Image source={Images.email_logo} style={styles.itemImage} />
                </View>
              </View>
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  autoCapitalize="none"
                  placeholder="Email"
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mainButton}>
          <MainButton title="Send an Email" onPress={this.onSend} />
        </View>
        <View style={styles.bottomStyle}>
          <View>
            <TouchableOpacity
              style={{marginVertical: 10}}
              onPress={() => {
                NavigationService.navigate('LoginScreen');
              }}>
              <Text style={[styles.normalText]}>
                Back to
                <Text style={styles.linkText}> Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.userDataReducer.loading,
    data: state.userDataReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestPassWordScreen);
