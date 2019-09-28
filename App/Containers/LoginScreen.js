import React, {Component} from 'react';
import {Text, Image, View, TextInput, SafeAreaView, Alert} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
// Images
import {Images} from '../Themes';
// Styles
import styles from './Styles/LoginScreenStyles';
// Icon
import Icon from 'react-native-vector-icons/Feather';
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

class LoginScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerStyle: styles.removeShadow,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      userName: '', // remove in the buid lakmalj12
      passWord: '', // remove in the buid !2Abcqwt
    };
  }

  componentDidMount() {
    // this.onLogin(); // remove in the buid
  }

  onLogin() {
    this.setState({
      isFetching: true,
    });
    this.props.userLogin(this.state.userName, this.state.passWord, res => {
      if (res) {
        this.setState({
          isFetching: false,
        });
        NavigationService.navigate('HomeScreen');
      } else {
        Alert.alert(
          'Authentication Faild',
          'Please try again',
          [
            {
              text: 'OK',
              onPress: () => {
                this.setState({
                  isFetching: false,
                });
              },
            },
          ],
          {cancelable: false},
        );
      }
      // this.setState({
      //   userName: '',
      //   passWord: '',
      // });
    });
  }

  // on Sign up
  onSignUp = () => {
    NavigationService.navigate('RegisterScreen');
  };

  onForgot = () => {
    NavigationService.navigate('RestPassWordScreen');
  };

  componentWillUnmount() {
    this.setState({
      isFetching: false,
      userName: '',
      passWord: '',
    });
  }

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
          <Text style={styles.titleStyle}>Account Sign In</Text>
        </View>
        <View style={styles.bodySection}>
          <View style={styles.formSection}>
            <View style={styles.formItem}>
              <View style={{flex: 1}}>
                <View style={styles.itemLogo}>
                  <Image source={Images.user_logo} style={styles.itemImage} />
                </View>
              </View>
              <View style={{flex: 5}}>
                <TextInput
                  style={styles.itemText}
                  autoCapitalize="none"
                  placeholder="Username"
                  onChangeText={text => this.setState({userName: text})}
                  value={this.state.userName}
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
                  secureTextEntry
                  placeholder="Password"
                  onChangeText={text => this.setState({passWord: text})}
                  value={this.state.passWord}
                />
              </View>
            </View>
          </View>
          <MainButton title="Log In" onPress={() => this.onLogin()} />
          <View style={{justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{marginVertical: 30}}
              onPress={this.onForgot}>
              <Text style={styles.normalText}>
                <Text style={styles.linkText}>Forgot</Text> Password or
                Username?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginVertical: 10}}
              onPress={this.onSignUp}>
              <Text style={styles.normalText}>
                Don’t have an account?
                <Text style={styles.linkText}> Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.socialSection}>
            <Text>Sign in with your account on</Text>
          </View> */}
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
)(LoginScreen);
