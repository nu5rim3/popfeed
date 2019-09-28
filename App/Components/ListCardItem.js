import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import styles from './Styles/ListCardItemStyles';
import FitImage from 'react-native-fit-image';
import AnimatedLoader from 'react-native-animated-loader';
import '../Globle';
var {height, width} = Dimensions.get('window');
var containWidth = width - (width * 12) / 100;

export default class ListCardItem extends Component {
  state = {
    imageHeight: 0,
    imageWidth: 0,
  };

  componentDidMount() {
    Image.getSize(
      {
        uri:
          'https://appserv-dev.popsockets.com/v1.0/image/get?image_id=' +
          this.props.imageID,
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

  render() {
    const {userName, title, imageID, onPressImage, onPressUser} = this.props;
    return (
      <View style={[styles.cardItemImage, styles.cardPadding]}>
        <View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onPressImage()}>
              <View
                style={{
                  width: containWidth,
                  height: this.state.imageHeight,
                  backgroundColor: '#ddd',
                }}>
                <Image
                  onLoadStart={() => {
                    this.setState({
                      loading: true,
                    });
                  }}
                  onLoadEnd={() => {
                    this.setState({
                      loading: false,
                    });
                  }}
                  source={{
                    uri:
                      'https://appserv-dev.popsockets.com/v1.0/image/get?image_id=' +
                      imageID,
                    method: 'GET',
                    headers: {
                      Authorization: global.TOKEN,
                    },
                  }}
                  style={[styles.imageSize, {height: this.state.imageHeight}]}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.titleSection}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onPressUser()}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubTitle}>{userName}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

ListCardItem.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  imageID: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPressImage: PropTypes.func.isRequired,
  onPressUser: PropTypes.func.isRequired,
};
