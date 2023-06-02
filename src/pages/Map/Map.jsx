import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, InputGroup } from 'react-bootstrap';
import MapScreen from './MapScreen';

const Map = ({list}) => {
  const [listMap, setMap ] = useState(list)
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    if(search){
      const search = searchValue.toLowerCase();
      // const filter = listMap.filter((p) => {
      //   return (
      //     p.name.toLowerCase().includes(search)
      //   )
      // });
      const filter = list.filter(p => p.name.toLowerCase().includes(search));
      setMap(filter);
    } else {
      setMap(list);
    }
  }
  
  return (
    <div>
      <Row>
        <Col>
        </Col>
        <Col>
          <InputGroup size="sm" className="mb-3"
            value={searchValue}
            placeholder='Buscar Productos'
            onChange={handleChange}
          > 
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="shadow-none"
            />
          </InputGroup>
        </Col>
        <Col>
        </Col>
      </Row>
      <MapScreen listLocation={listMap} />
    </div>
  )
}

export default Map