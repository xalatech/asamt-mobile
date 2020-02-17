import { Platform } from 'react-native';

const android = Platform.OS === 'android';

const fontFamilies = {
  400: 'NunitoRegular',
  700: 'NunitoBold',
  800: 'NunitoExtraBold',
};

export const fontWeight = (weight = 400) => `
  font-family: ${android ? fontFamilies[weight] : 'Nunito'};
  font-weight: ${weight};
`;

export const noop = () => {};
