import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.headerIcon,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: WP(10),
  },
  centered: {
    alignItems: 'center',
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
    backgroundColor: '#00263E',
  },
  headerSection: {
    height: HP(20), //
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00263E',
  },
  screenTitle: {
    height: HP(8), //
    width: '100%',
    backgroundColor: '#FF8E0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    ...Fonts.style.h5,
    color: Colors.snow,
  },
  bodySection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    // flexDirection: 'row',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    marginBottom: 10,
  },
  formItem: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: 5,
  },
  lottie: {
    height: 50,
    width: 50,
  },
  itemLogo: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: '#FF8E0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  itemText: {
    ...Fonts.style.normal,
    width: '100%',
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    fontSize: 15,
    paddingVertical: 5,
  },
  normalText: {
    ...Fonts.style.normal,
  },
  linkText: {
    color: '#0058FF',
  },
});
