import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    height: 45,
    width: WP(26.5),
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  headerSection: {
    width: 280,
    height: 45,
  },
  headerPadding: {
    paddingHorizontal: WP(6),
  },
  removeShadow: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderBottomColor: 'transparent',
    elevation: 5,
  },
  lottie: {
    height: 50,
    width: 50,
  },
});
