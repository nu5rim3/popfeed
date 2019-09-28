import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AnimatedLoader from 'react-native-animated-loader';
// Images
import {Images, Colors} from '../Themes';
// Styles
import styles from './Styles/HomeScreenStyles';
// Icon
// import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
// ListCardItem
import ListCardItem from '../Components/ListCardItem';
import TagButton from '../Components/TagButton';
// Redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions
// Navigation
import NavigationService from '../Navigation/NavigationService';
// pop-up menu
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Logout Feature
const onLogout = () => {
  NavigationService.navigate('LoginScreen');
  AsyncStorage.clear();
};

let _this = null;

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <Image source={Images.logo} style={styles.logo} />,
    headerLeft: (
      <View style={styles.headerPadding}>
        <TouchableOpacity
          onPress={() => _this.getFeedData(_this.state.userdata)}>
          {/* <Icon name="home" size={25} /> */}
          <Image
            source={Images.home_logo}
            style={{width: 22, height: 22, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View style={[styles.headerPadding, {flexDirection: 'row'}]}>
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          style={{marginRight: 15}}>
          {/* <Icon name="search" size={25} /> */}
          <Image
            source={Images.search_logo}
            style={{width: 22, height: 22, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Menu>
          <MenuTrigger>
            {/* <Icon name="user" size={25} /> */}
            <Image
              source={Images.profile_logo}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              onSelect={() => alert('Profile')}
              disabled={true}
              text="Profile"
            />
            <MenuOption
              onSelect={() => alert('Not called')}
              disabled={true}
              text="Settings"
            />
            <MenuOption>
              <TouchableOpacity onPress={onLogout}>
                <Text style={{color: 'red'}}>Logout</Text>
              </TouchableOpacity>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    ),
    headerStyle: styles.removeShadow,
  });

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      userdata: {
        activity_id: '',
        limit: 20,
      },
    };
  }

  componentDidMount() {
    _this = this;
    this.getFeedData(this.state.userdata);
  }

  getFeedData(data) {
    this.setState({isFetching: false});
    this.props.getFeedList(data);
  }

  onRefresh() {
    this.setState({isFetching: true}, function() {
      this.getFeedData(this.state.userdata);
    });
  }

  // render feed list item for flatlist
  renderCardItem = ({item, index}) => {
    return (
      <ListCardItem
        userName={item.actor.id.slice(item.actor.id.lastIndexOf(':') + 1)}
        title={item.object.data.title}
        subtitle={item.object.data.title}
        imageID={item.object.data.image_id}
        onPressUser={() => {
          NavigationService.navigate('ProfileScreen', {
            imageData: item.object.data,
            profileData: item,
            userName: item.actor.id.slice(item.actor.id.lastIndexOf(':') + 1),
          });
        }}
        onPressImage={() => {
          NavigationService.navigate('ImageDetailScreen', {
            activity_id: item.id,
            profileData: item,
            imageData: item.object.data,
            userName: item.actor.id.slice(item.actor.id.lastIndexOf(':') + 1),
          });
        }}
      />
    );
  };

  keyExtractor = (item, index) => item.id.toString();

  // Logout Feature
  onLogout = () => {
    NavigationService.navigate('LoginScreen');
  };

  render() {
    const {data, loading} = this.props;
    return (
      <View style={styles.mainContainer}>
        {loading ? (
          <AnimatedLoader
            visible={loading}
            overlayColor="rgba(255,255,255,0.75)"
            source={require('../Images/loader.json')}
            animationStyle={styles.lottie}
            speed={1}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={this.renderCardItem}
            keyExtractor={this.keyExtractor}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isFetching}
                onRefresh={this.onRefresh.bind(this)}
                title="Pull to refresh"
                tintColor={Colors.coal}
                titleColor={Colors.coal}
              />
            }
            extraData={data}
          />
        )}
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
)(HomeScreen);
