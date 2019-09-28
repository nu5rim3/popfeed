import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './Styles/TagButtonStyles';

export default class TagButton extends Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.tagButton]}
        onPress={() => onPress()}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

TagButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
