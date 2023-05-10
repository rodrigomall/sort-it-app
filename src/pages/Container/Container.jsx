import React from 'react';
import { Row } from 'react-bootstrap';
import ContainerCard from './ContainerCard';

const Container = ({list}) => {
  return (
    <Row className='px-5'>
      { list.map((item, index) => {
          return (
            <ContainerCard id={index} {...item} key={index}/>
          )
        })
      }
    </Row>
  )
}

export default Container;