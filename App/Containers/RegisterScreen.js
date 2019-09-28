import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  TextInput,
} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
// Images
import {Images} from '../Themes';
// Styles
import styles from './Styles/RegisterScreenStyles';
// Icon
// import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
// Main Button
import MainButton from '../Components/MainButton';
// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions
// Navigation
import NavigationService from '../Navigation/NavigationService';

class RegisterScreen extends Component {
  static navigationOptions = {
    // headerTitle: <Image source={Images.logo} style={styles.logo} />,
    headerLeft: null,
    headerStyle: styles.removeShadow,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      userName: '', // remove in the buid lakmalj12
      passWord: '', // remove in the buid !2Abcqwt
      email: '',
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount() {}

  onSignUp = () => {
    console.log('Sign Up clicked');
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
          <Text style={styles.titleStyle}>Create Account</Text>
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
                  keyboardType="email-address"
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                />
              </View>
            </View>
            <View style={styles.formItem}>
              <View style={{flex: 1}}>
                <View style={styles.itemLogo}>
                  <Image source={Images.user_logo} style={styles.itemImage} />
                </View>
              </View>
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  placeholder="Username"
                  onChangeText={text => this.setState({userName: text})}
                  value={this.state.userName}
                />
              </View>
            </View>
            <View style={styles.formItem}>
              <View style={{flex: 1}} />
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  placeholder="First Name"
                  onChangeText={text => this.setState({firstName: text})}
                  value={this.state.firstName}
                />
              </View>
            </View>
            <View style={styles.formItem}>
              <View style={{flex: 1}} />
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  placeholder="Last Name"
                  onChangeText={text => this.setState({lastName: text})}
                  value={this.state.lastName}
                />
              </View>
            </View>
            <View style={styles.formItem}>
              <View style={{flex: 1}}>
                <View style={styles.itemLogo}>
                  <Image source={Images.pass_logo} style={styles.itemImage} />
                </View>
              </View>
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  autoCapitalize="none"
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={text => this.setState({passWord: text})}
                  value={this.state.passWord}
                />
              </View>
            </View>
          </View>
          {/* <View style={styles.socialSection}>
            <Text>Sign in with your account on</Text>
          </View> */}
        </View>
        <View style={styles.mainButton}>
          <MainButton title="Sign Up" onPress={this.onSignUp} />
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
)(RegisterScreen);
