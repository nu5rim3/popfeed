import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
import {
  responsiveHeight as HP,
  responsiveWidth as WP,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  button: {
    outlineButton: {
      borderColor: Colors.ash,
      borderWidth: 1,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 8,
    },
    highLightButton: {
      backgroundColor: Colors.orange,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 8,
    },
  },
  headerIcon: {
    IconStyle: {
      height: 65,
      width: 65,
      resizeMode: 'contain',
    },
  },
  text: {
    normalText: {
      ...Fonts.type.normal,
    },
  },
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center',
  },
  card: {
    cardPadding: {
      // paddingVertical: WP(6),
      paddingHorizontal: WP(6),
    },
    imageSize: {
      width: '100%',
      // height: Metrics.images.xl_large,
      resizeMode: 'contain',
    },
  },
};

export default ApplicationStyles;
