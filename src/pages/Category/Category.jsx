import React from 'react';
import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

const Category = ({list}) => {
  return (
    <Row className='px-5'>
      { list.map((item, index) => {
          return (
            <CategoryCard id={index} {...item} key={index}/>
          )
        })
      }
    </Row>
  )
}
export default Category;