import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';

function CarsCard() {
    return (
        <div className='CarsCard p-4'>
            <div className='center justify-content-between'>
                <h4>Porshe 718 Cayman </h4>
                <FavoriteBorderIcon  style={{ color: '#A4A5A6', fontSize: '24px' }} />
            </div>
            <div className='gray-color typeCar'>
                Coupe
            </div>
            <img className='mb-4' src='car.png' alt='car' />
            <div className='center justify-content-between'>
                <div>
                    <span>
                        <PersonOutlineOutlinedIcon className='iconCard' />{' '}
                        <span className='gray-color'>4</span>
                    </span>
                    <span>
                        <RepeatOutlinedIcon className='iconCard' />{' '}
                        <span className='gray-color'>Manual</span>
                    </span>
                </div>
                <div>
                    <span className='' style={{ fontSize: '18px' }}> $400</span> <span style={{ color: '#A4A5A6' }}> /d</span>
                </div>
            </div>
        </div>
    )
}

export default CarsCard