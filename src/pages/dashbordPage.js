import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BarChar from '../components/dashbordComponents/barChar'
import ReacommendedCard from '../components/dashbordComponents/reacommendedCard';
import Card from './../components/dashbordComponents/card';
import Graph from './../components/dashbordComponents/graph';
function DashbordPage() {
    return (

        <Row xs={12} className='h-100 w-100 text-center  m-auto'>
            <Row xs={12} className='gx-4 m-auto ' >
                <Col md={6} lg={3} className=' mb-3 '>
                    <Card icon={'BoltOutlinedIcon'} word={'Energy'} KnobValue={45} />
                </Col>
                <Col md={6} lg={3} className=' mb-3'>
                    <Card icon={'HeightOutlinedIcon'} word={'Range'} KnobValue={'157k'} />
                </Col>
                <Col md={6} lg={3} className=' mb-3'>
                    <Card icon={'OpacityRoundedIcon'} word={'Break fluid'} KnobValue={9} />
                </Col>
                <Col md={6} lg={3} className=' mb-3'>
                    <Card icon={'TireRepairIcon'} word={'Tire Wear'} KnobValue={25} />
                </Col>
            </Row>
            <Row xs={12} className='gx-5 m-auto' >
                <Col className='mb-3' md={6}>
                    <BarChar />
                </Col>
                <Col className='mb-3' md={6}>
                    <Graph />
                </Col>
            </Row>
            <Row xs={12} className=' m-auto' >
                <Col md={6} lg={4} className=''>
                    <ReacommendedCard recommended='33' color='#E1DFA4' carPicture='car.png' name='Mini Cooper' distance='132' speed='32' />
                </Col>
                <Col md={6} lg={4} className=''>
                    <ReacommendedCard recommended='74' color='#E3ECF1' carPicture='car2.png' name='Porsche 911 Carrera' distance='130' speed='28' />
                </Col>
                <Col md={6} lg={4} className=''>
                    <ReacommendedCard recommended='74' color='#F4E3E5' carPicture='car3.png' name='Porsche 911 Carrera' distance='130' speed='28' />
                </Col>
            </Row>

        </Row>
    )
}

export default DashbordPage