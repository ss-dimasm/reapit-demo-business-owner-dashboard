import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PropertiesDetailsCardWrapper from './ui/propertiesDetails/cardWrapper'

const PropertiesDetails = () => {
  // plot properties coordinate here
  return (
    <>
      <MapContainer
        style={{ height: '100%', width: '100%', position: 'relative' }}
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            zIndex: 500,
            width: '100%',
            height: '100%',
            marginTop: '300px',
            paddingTop: '50%',
            overflowY: 'scroll',
          }}
        >
          <PropertiesDetailsCardWrapper />
        </div>
      </MapContainer>
    </>
  )
}

export default PropertiesDetails
