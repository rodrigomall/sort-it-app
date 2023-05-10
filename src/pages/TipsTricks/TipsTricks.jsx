import React from 'react';
import { Row } from 'react-bootstrap';
import TipsTricksCard from './TipsTricksCard';

const TipsTricks = ({list}) => {
  return (
    <Row className='px-5'>
      { list.map((item, index) => {
          return (
            <TipsTricksCard id={index} {...item} key={index}/>
          )
        })
      }
    </Row>
  )
}

export default TipsTricks;