import React from 'react';
import { Row } from 'react-bootstrap';
import EcoShopCard from './EcoShopCard';


const EcoShop = ({list}) => {
  return (
    <Row className='px-5'>
      { list.map((item, index) => {
          return (
            <EcoShopCard id={index} {...item} key={index}/>
          )
        })
      }
    </Row>
  )
}
export default EcoShop;