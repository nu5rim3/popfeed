import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  ...ApplicationStyles.card,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    height: 45,
    width: 150,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  cardItemImage: {
    width: '100%',
    justifyContent: 'center',
  },
  titleSection: {
    // paddingHorizontal: Metrics.paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: WP(5),
  },
  textTitle: {
    ...Fonts.style.normal,
    marginTop: WP(2.5),
    color: Colors.title_text,
  },
  textSubTitle: {
    ...Fonts.style.description,
    marginTop: WP(1),
    color: Colors.title_text,
  },
  lottie: {
    width: 50,
    height: 50,
  },
});
