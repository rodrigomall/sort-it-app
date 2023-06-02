import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import useMain from './useMain';
import MainDetail from './MainDetail';
import banner from '../../assets/img/banner.svg';
import bannerMobile from '../../assets/img/banner-mobile.svg';
import { isMobile } from 'react-device-detect';



const Main = () => {
  const { arrayButton, onClickButton } = useMain();
  const propsDetail = {
    arrayButton,
    onClickButton
  }
  return (
    <div>
      <Header />
      <Container fluid className='px-5 pt-5'>
        <Card className='border-0' style={{ height: '570px',  borderRadius: '14px'}}>
          <Card.Body className='d-flex justify-content-center align-items-center'>
            <img src={isMobile ? bannerMobile : banner} alt='img' className='img-banner' />
          </Card.Body>
        </Card>
      </Container>
      <MainDetail {...propsDetail}  />
      <Footer />
    </div>
  )
}

export default Main