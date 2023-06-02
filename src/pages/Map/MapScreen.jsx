import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Row, Col, Button } from 'react-bootstrap';
import location1 from '../../assets/img/location1.svg';
import location2 from '../../assets/img/location2.svg';
import location3 from '../../assets/img/location3.svg';

const MapScreen = (props) => {
  const { listLocation } = props;

  return (
    <Col className='mx-5'>
      <MapContainer center={[56.94, 24.10]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { listLocation?.map((loc, i) => (
            <Marker key={`loc_${i}`} position={[loc?.gps?.latitude, loc?.gps?.longitude]}>
              <Popup>
                {loc.name}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      <Row className='py-2'>
        <Col className='text-start'>
          <img src={location1} alt='img' width='20px' height='29px' />
          <span className='fw-bold'>Waste collection points</span>
        </Col>
        <Col>
          <img src={location2} alt='img' width='20px' height='29px' />
          <span className='fw-bold'>Waste collection area</span>
        </Col>
        <Col className='text-end'>
          <img src={location3} alt='img' width='20px' height='29px' />
          <span className='fw-bold'>Waste collection area</span>
        </Col>
      </Row>
      
        { listLocation?.map((loc, i) => (
          <Row key={`list_${i}`}>
            <Col className='py-2'>
              <Row>
                <Col className='mw-fc text-start'>
                  <p className='my-2'>{loc.name} </p>
                  <p className='my-2'>Working hours: Mo-Su 08:00-22:00 </p>
                  <p className='my-2'>Contacts: {loc.contact} </p>     
                </Col>
                <Col/>
                <Col className='mw-fc d-flex align-items-center'>
                  <Button className='btn-sm w-100 border-0 fw-bold' variant='' style={{borderRadius: '12px', color: 'black', background:  '#C9F697', height: '44px'}}>{`Open with Google maps ->`}</Button>
                </Col>
              </Row>
              <hr className='my-0' />
            </Col>
          </Row>
        ))}
     
    </Col>
  )
}

export default MapScreen