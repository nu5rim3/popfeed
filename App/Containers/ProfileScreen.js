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
// Globle
import '../Globle';
// Images
import {Images, Colors} from '../Themes';
// Styles
import styles from './Styles/ProfileScreenStyles';
// Icon
// import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
// Navigation
import NavigationService from '../Navigation/NavigationService';
// ListCardItem
import ListCardItem from '../Components/ListCardItem';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions

class ProfileScreen extends Component {
  static navigationOptions = {
    headerTitle: <Image source={Images.logo} style={styles.logo} />,
    headerLeft: (
      <View style={styles.headerPadding}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('HomeScreen')}>
          {/* <Icon name="arrow-left" size={25} /> */}
        </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View style={[styles.headerPadding, {flexDirection: 'row'}]}>
        {/* <TouchableOpacity
          onPress={() => alert('This is a button!')}
          style={{marginRight: 15}}>
          <Icon name="search" size={25} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          {/* <Icon name="sliders" size={25} /> */}
          <Image
            source={Images.settings_logo}
            style={{width: 22, height: 22, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: styles.removeShadow,
  };

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      userdata: {
        user: this.props.navigation.getParam('userName'),
        activity_id: '',
        limit: 20,
      },
      followData: {
        user2: this.props.navigation.getParam('userName'),
      },
      isFollow: false,
    };
  }

  componentDidMount() {
    console.log('Profile screen');
    this.getProfileFeedData(this.state.userdata);
    this.isFollowed();
  }

  getProfileFeedData(data) {
    this.setState({isFetching: false});
    this.props.getProfileFeedList(data);
  }

  onRefresh() {
    this.setState({isFetching: true}, function() {
      this.getProfileFeedData(this.state.userdata);
    });
  }

  // render profile list item for flatlist
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
            imageData: item.object.data,
            userName: item.actor.id.slice(item.actor.id.lastIndexOf(':') + 1),
          });
        }}
      />
    );
  };

  keyExtractor = (item, index) => item.id.toString();

  // is user already follow
  isFollowed() {
    this.props.isfollowUser(this.state.followData, followRes => {
      this.setState({
        isFollow: followRes,
      });
    });
  }

  // on click follow
  onFollowORUnfollow() {
    if (this.state.isFollow) {
      this.props.unFollowUser(this.state.followData, followres => {
        alert(' sucsessfully unfollowed!');
      });
      this.isFollowed();
    } else {
      this.props.followUser(this.state.followData, followres => {
        alert('sucsessfully followed!');
      });
      this.isFollowed();
    }
  }

  render() {
    const {data, loading} = this.props;
    const {navigation} = this.props;
    const userName = navigation.getParam('userName');
    return (
      <View style={styles.mainContainer}>
        <View style={styles.profileSection}>
          <View style={styles.imageSection}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/lego/6.jpg',
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.nameSection}>
            <Text style={styles.nameStyle}>{userName}</Text>
            {global.USERNAME === userName ? null : (
              <TouchableOpacity
                style={styles.outlineButton}
                onPress={() => {
                  this.onFollowORUnfollow();
                }}>
                <Text style={styles.btnText}>
                  {this.state.isFollow ? 'Unfollow' : 'Follow'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.tabsSction}>
          <View style={styles.tabSection}>
            <TouchableOpacity>
              <Text style={styles.tabTtitle}>Images</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabSection}>
            <TouchableOpacity>
              <Text style={styles.tabTtitle}>Collections</Text>
            </TouchableOpacity>
          </View>
        </View>
        {loading ? (
          <View
            style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
            <ActivityIndicator size="small" color="#ddd" />
          </View>
        ) : (
          <View style={styles.gallerySection}>
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
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.profilefeedDataReducer.loading,
    data: state.profilefeedDataReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
