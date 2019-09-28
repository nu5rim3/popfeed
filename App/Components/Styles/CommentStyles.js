import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts} from '../../Themes';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  commet: {
    marginBottom: WP(3),
  },
  profileImage: {
    height: Metrics.images.sm_avatar,
    width: Metrics.images.sm_avatar,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
  },
  userName: {
    ...Fonts.style.normal,
    marginBottom: WP(0.5),
  },
  duration: {
    ...Fonts.style.description,
    color: Colors.title_text,
    marginBottom: WP(0.5),
  },
  commentStyle: {
    borderRadius: 15,
    backgroundColor: '#F5F5FB',
    paddingHorizontal: WP(3),
    paddingVertical: WP(4),
  },
  commetText: {
    ...Fonts.style.description,
  },
});
