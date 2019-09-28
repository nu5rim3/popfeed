import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes';
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
    width: 150,
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
  paddingView: {
    paddingHorizontal: WP(6),
  },
  imageStyle: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  detailSection: {
    // paddingBottom: WP(0.5),
  },
  imageTitle: {
    ...Fonts.style.h5,
    color: Colors.title_text,
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    paddingVertical: Metrics.paddingVertical,
  },
  commentSection: {
    paddingVertical: Metrics.paddingVertical,
  },
  commetTitle: {
    ...Fonts.style.h6,
    paddingBottom: WP(1),
  },
  commentShow: {
    paddingVertical: WP(1),
  },
  iconStyle: {
    color: Colors.cloud,
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
  tagSection: {
    flexDirection: 'row',
    paddingBottom: WP(1),
  },
});
