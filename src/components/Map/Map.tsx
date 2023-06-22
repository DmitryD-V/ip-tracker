import React, {FC} from 'react';
import {Container} from './styles';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

interface Props {
  markerCoords?: {
    lat: number
    lng: number
  }
}

const Map: FC<Props> = ({markerCoords}) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCwtUw9jGx_lXtWF9bnHm0On5hXmyVVj-k'
  })

  return (
    <Container>
      {isLoaded && <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%'
          }}
          center={markerCoords}
          zoom={15}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
          }}
      >
        {markerCoords && <Marker position={markerCoords} />}
      </GoogleMap>}
    </Container>
  );
}

Map.defaultProps = {
  markerCoords: {
    lat: 0,
    lng: 0
  }
}

export default Map
