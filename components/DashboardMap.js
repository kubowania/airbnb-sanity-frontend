import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const DashboardMap = ({ properties }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.googlePlacesAPI,
  })

  console.log(properties[0].location?.lat)
  console.log(properties[0].location?.lat)
  const containerStyle = {
    width: "100%",
    height: "100vh",
  }

  const center = {
    lat: properties[0].location?.lat,
    lng: properties[0].location?.lng,
  }

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {properties.map((property, index) => (
        <Marker
          position={{
            lat: property?.location?.lat,
            lng: property?.location?.lng,
          }}
          icon={{
            url: image,
            anchor: new google.maps.Point(5, 58),
          }}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(DashboardMap)
