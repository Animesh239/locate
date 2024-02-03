import React, {useRef} from 'react'
import {StandaloneSearchBox , LoadScript} from '@react-google-maps/api'

const LocationSearchBar = () => {
  const inputRef = useRef() ;

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if(place){
      const address = place.formatted_address;
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(address , lat, lng);
    }
  }
  return(
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <StandaloneSearchBox
        onLoad={ref => inputRef.current = ref}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter your location"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: `absolute`,
            left: `50%`,
            marginLeft: `-120px`
          }}
        />
      </StandaloneSearchBox>
    </LoadScript>
  )
}



export default LocationSearchBar