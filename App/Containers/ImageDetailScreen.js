import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
} from 'react-native';
import '../Globle';
// Images
import {Images, Colors} from '../Themes';
// Styles
import styles from './Styles/ImageDetailScreenStyles';
// Icon
// import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

// TagButton
import TagButton from '../Components/TagButton';
// commentComponent
import Comment from '../Components/Comment';
// Navigation
import NavigationService from '../Navigation/NavigationService';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../Actions'; //Import your actions

var {height, width} = Dimensions.get('window');
var containWidth = width - (width * 12) / 100;

class ImageDetailScreen extends Component {
  static navigationOptions = {
    // headerTitle: <Image source={Images.logo} style={styles.logo} />,
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
      userData: {
        user: this.props.navigation.getParam('userName'),
        activity_id: this.props.navigation.getParam('activity_id'),
      },
      like: 0,
      getCheckliked: {
        activity_id: this.props.navigation.getParam('activity_id'),
      },
      addLike: {
        activity_id: this.props.navigation.getParam('activity_id'),
      },
      isLiked: false,
      imageHeight: 0,
      imageWidth: 0,
    };
  }

  componentDidMount() {
    console.log('Image details screen, imageData');
    this.onReactionCount();
    this.checkIsLiked();
    Image.getSize(
      {
        uri:
          'https://appserv-dev.popsockets.com/v1.0/image/get?image_id=' +
          this.props.navigation.getParam('imageData').image_id,
        method: 'GET',
        headers: {
          Authorization: global.TOKEN,
        },
      },
      (reswidth, resheight) => {
        this.setState({
          imageHeight: (containWidth / reswidth) * resheight,
          imageWidth: width,
        });
      },
    );
  }

  checkIsLiked() {
    this.props.isImageLiked(this.state.getCheckliked, islikeRes => {
      console.log(islikeRes);
      this.setState({
        isLiked: islikeRes,
      });
    });
  }
  onReactionCount() {
    this.props.getImageReactions(this.state.userData);
    setTimeout(() => {
      if (this.props.data['fault'] !== undefined) {
        this.setState({
          like: 0,
        });
      } else {
        this.setState({
          like: this.props.data.result.reactionCounts.like,
        });
      }
      this.checkIsLiked();
    }, 3000);
  }

  onLike() {
    this.props.addImageLike(this.state.addLike, value => {
      if (value) {
        this.onReactionCount();
      }
    });
  }

  onUser() {
    NavigationService.navigate('ProfileScreen', {
      imageData: this.props.navigation.getParam('imageData'),
      profileData: this.props.navigation.getParam('profileData'),
      userName: this.props.navigation.getParam('userName'),
    });
  }

  render() {
    const {data, loading} = this.props;
    const {navigation} = this.props;
    const imageDetail = navigation.getParam('imageData');
    const userName = navigation.getParam('userName');
    const activity_id = navigation.getParam('activity_id');
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.paddingView}>
          <View
            style={{
              height: this.state.imageHeight,
              width: containWidth,
              backgroundColor: '#ddd',
            }}>
            <Image
              source={{
                uri:
                  'https://appserv-dev.popsockets.com/v1.0/image/get?image_id=' +
                  imageDetail.image_id,
                method: 'GET',
                headers: {
                  Authorization: global.TOKEN,
                },
              }}
              style={(styles.imageStyle, {height: this.state.imageHeight})}
            />
          </View>
          {/* START IMAGE BTN SECTION */}
          <View style={styles.detailSection}>
            <Text style={styles.textTitle}>{imageDetail.title}</Text>
            <TouchableOpacity
              onPress={() => {
                this.onUser();
              }}>
              <Text style={styles.textSubTitle}>{userName}</Text>
            </TouchableOpacity>
            <View style={styles.btnSection}>
              <TouchableOpacity
                disabled={this.state.isLiked}
                onPress={() => {
                  this.onLike();
                }}>
                <View style={{flexDirection: 'row'}}>
                  {/* <Icon
                    name="star"
                    size={30}
                    color={this.state.isLiked ? Colors.orange : Colors.cloud}
                  /> */}
                  <View
                    style={{justifyContent: 'center', paddingHorizontal: 10}}>
                    <Text style={styles.userName}>{this.state.like}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="bookmark" size={30} color={Colors.cloud} />
                  <View
                    style={{justifyContent: 'center', paddingHorizontal: 10}}>
                    <Text>70</Text>
                  </View>
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
          {/* END IMAGE BTN SECTION */}

          {/* START TAG SECTION */}
          {/* <View style={{flexDirection: 'row'}}> */}
          <ScrollView horizontal={true} style={styles.tagSection}>
            <TagButton
              title="#Popular"
              onPress={() => {
                alert('popular');
              }}
            />
            <TagButton
              title="#Travel"
              onPress={() => {
                alert('popular');
              }}
            />
            <TagButton
              title="#Nature"
              onPress={() => {
                alert('popular');
              }}
            />
          </ScrollView>
          {/* </View> */}
          {/* END TAG SECTION */}

          {/* START COMMENT SECTION */}
          <View style={[styles.commentSection]}>
            <Text style={styles.commetTitle}>Comments 2</Text>
            <View style={styles.commentShow}>
              <Comment
                avatar="https://randomuser.me/api/portraits/women/45.jpg"
                user="Stella"
                days="2"
                comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                onPress={() => {
                  alert('User Screen');
                }}
              />
              <Comment
                avatar="https://randomuser.me/api/portraits/women/35.jpg"
                user="Stiff"
                days="1"
                comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                onPress={() => {
                  alert('User Screen');
                }}
              />
            </View>
          </View>
          {/* END COMMENT SECTION */}
          <View />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.imageReactDataReducer.loading,
    data: state.imageReactDataReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageDetailScreen);
