import React from 'react'
import SyncIcon from '@mui/icons-material/Sync';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
function ReacommendedCard({ recommended, color, carPicture, name, distance, speed }) {
    return (
        <div className=' recommendedCard text-start  p-4  ' style={{ background: color }}>
            <div>
                <SyncIcon className='me-2' style={{ color: '#72767C', fontSize: '20px' }} />
                <span>{recommended}% Recommend</span>
            </div>
            <img src={carPicture} alt="BigCo Inc. logo" />
            <h2>{name}</h2>
            <div className='center justify-content-between'>
                <div>
                    <RepeatOutlinedIcon className='' />
                    <span className='me-3'> {distance}</span>
                    <AddCircleOutlineOutlinedIcon className='me-3' />
                    <BoltOutlinedIcon className='me-3' />

                </div>

                <div>
                    <p>${speed}/h</p>
                </div>
            </div>


        </div>
    )
}

export default ReacommendedCard