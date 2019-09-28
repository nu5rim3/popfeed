import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.button,
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
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 3,
    borderBottomColor: 'transparent',
    elevation: 0,
  },
  profileSection: {
    flexDirection: 'row',
    paddingVertical: Metrics.paddingVertical,
    paddingHorizontal: Metrics.paddingHorizontal,
  },
  imageSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    ...Fonts.style.normal,
    marginBottom: 10,
  },
  profileImage: {
    height: Metrics.images.avatar,
    width: Metrics.images.avatar,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
  },
  btnText: {
    ...Fonts.style.normal,
    marginTop: WP(1),
    color: Colors.ash,
  },
  tabsSction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  tabSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTtitle: {
    ...Fonts.style.normal,
  },
  gallerySection: {
    paddingBottom: 15,
  },
});
