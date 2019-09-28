import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './Styles/MainButtonStyles';

export default class MainButton extends Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
        <View style={[styles.btnStyle]}>
          <Text style={styles.btnText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
