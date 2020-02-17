import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PropTypes from 'prop-types';

import { requestLocation } from '@redux/modules/location';
import { connect } from 'react-redux';
import search from '@images/find.png';
import * as S from './styled';

const query = {
  key: 'AIzaSyCifHFclre-m9eavSpBiwA1HjZtdt3ujTQ',
  language: 'no',
  types: '(cities)',
  components: 'country:no',
};

const GooglePlacesSearch = (props) => {
  // const predefinedPlaces = {
  //   description: props.location.name,
  //   vicinity: props.location.name,
  //   geometry: {
  //     location: {
  //       lat: props.location.geometry.location.lat,
  //       lng: props.location.geometry.location.lng,
  //     },
  //   },
  // };

  const currentLocation = {
    description: 'Din posisjon',
    geometry: {
      location: {
        lat: props.geolocation.coords ? props.geolocation.coords.latitude : null,
        lng: props.geolocation.coords ? props.geolocation.coords.longitude : null,
      },
    },
  };

  return (
    <GooglePlacesAutocomplete
      placeholder={props.placeholder}
      minLength={2}
      autoFocus={props.autoFocus}
      returnKeyType="search"
      listViewDisplayed={props.listViewDisplayed}
      fetchDetails
      renderDescription={row => row.description}
      onPress={(data, details) => {
        props.requestLocation(details);
        props.onPress();
    }}
      query={query}
      styles={props.styles}
      predefinedPlaces={props.geolocation.coords ? [currentLocation] : []}
    >
      <S.SearchIcon source={search} />
    </GooglePlacesAutocomplete>);
};

GooglePlacesSearch.defaultProps = {
  listViewDisplayed: 'auto',
};

GooglePlacesSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  requestLocation: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  styles: PropTypes.any.isRequired,
  geolocation: PropTypes.object.isRequired,
  listViewDisplayed: PropTypes.oneOf([true, false, 'auto']),
};

const mapStateToProps = ({ location: { geolocation, location } }) => ({
  geolocation,
  location,
});

const mapDispatchToProps = {
  requestLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(GooglePlacesSearch);
