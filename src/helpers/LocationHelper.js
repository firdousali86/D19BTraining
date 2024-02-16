import Geolocation from 'react-native-geolocation-service';

class LocationHelper {
  fetchLocation = (success, failure) => {
    Geolocation.getCurrentPosition(
      position => {
        success(position);
      },
      error => {
        // See error code charts below.
        failure(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  trackUserLocation = (success, failure) => {
    Geolocation.watchPosition(
      position => {
        success(position);
      },
      error => {
        // See error code charts below.
        failure(error);
      },
      {
        enableHighAccuracy: true,
        interval: 2000,
        distanceFilter: 100,
      },
    );
  };
}

export default new LocationHelper();
