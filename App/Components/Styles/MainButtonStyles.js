import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  btnStyle: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    height: WP(12),
    width: WP(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 25,
  },
  btnText: {
    color: Colors.snow,
    ...Fonts.style.normal,
  },
});
