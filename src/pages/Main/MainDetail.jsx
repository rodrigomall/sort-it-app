import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Category from '../Category/Category';
import ContainerShape from '../Container/Container';
import TipsTricks from '../TipsTricks/TipsTricks';
import { dataCategory, dataContainer, dataTipsTricks }  from '../../api/data';





const MainDetail = (props) => {
  const { arrayButton, onClickButton } = props;
  const [listCategories, setListCategories] = useState(dataCategory);
  const [listContainer, setListContainer] = useState(dataContainer);
  const [listTipsTricks, setListTipsTricks] = useState(dataTipsTricks);
  
  return (
    <>
      <Container fluid className='px-5 py-4'>
        <Card className='p-2 border-0' style={{ height: '72px', borderRadius: '16px'}} >
          <Row>
            { arrayButton.map((a, i) => (
               <Col key={`arr_${i}`}>
                  <Button className={`btn-lg w-100 border-0   ${a.isActive ? 'btn-box-active': 'btn-box'} `} variant='' style={{borderRadius: '12px', color: 'black', height: '54px'}} onClick={()=>onClickButton(a)}>{a.name}</Button>
                </Col>
              ))
            }
          </Row>
        </Card>
      </Container>
      { arrayButton[0].isActive &&
        <Category list={listCategories} />
      }
      { arrayButton[1].isActive &&
        <ContainerShape list={listContainer} />
      }
      { arrayButton[4].isActive &&
        <TipsTricks list={listTipsTricks} />
      }
    </>
  )
}

export default MainDetail