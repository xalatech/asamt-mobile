import { Platform } from 'react-native';
import mainTheme from '../../../theme';

export const theme = {
  selectedDayBackgroundColor: '#038999',
  todayTextColor: mainTheme.primaryOrange,
  'stylesheet.calendar.header': {
    monthText: {
      fontSize: 22,
      color: '#82888F',
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: mainTheme.primaryOrange,
        },
        android: {
          tintColor: mainTheme.primaryOrange,
        },
      }),
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 35,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      elevation: 1,
    },
  },
  'stylesheet.calendar.main': {
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: '#FFFFFF',
      flex: 1,
    },
  },
};

export default mainTheme;
