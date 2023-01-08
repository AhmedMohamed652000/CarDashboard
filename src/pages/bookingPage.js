import React from 'react'
import { Row, Col } from 'react-bootstrap';
import CarsCard from '../components/bookingComponents/carsCard';
import Filter from '../components/bookingComponents/filter';

function BookingPage() {
    return (
        <Row className='w-100 p-3' >
            <Row xs={12} className='mt-4'>
                <h2>Booking</h2>
            </Row>
            <Row xs={12} className='my-4'>
                <Filter />
            </Row>
            <Row xs={12} className='my-4 g-2 '>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard  />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
                <Col  lg={4}>
                    <CarsCard />
                </Col>
            </Row>

        </Row>
    )
}

export default BookingPage