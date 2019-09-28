import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './Styles/CommentStyles';

export default class Comment extends Component {
  render() {
    const {user, avatar, onPress, comment, days} = this.props;
    return (
      <View style={styles.commet}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image source={{uri: avatar}} style={styles.profileImage} />
            </View>
            <View style={{flex: 3, justifyContent: 'space-around'}}>
              <Text style={styles.userName}>{user}</Text>
              <Text style={styles.duration}>{days} days ago</Text>
              <View style={styles.commentStyle}>
                <Text style={styles.commetText}>{comment}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Comment.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
