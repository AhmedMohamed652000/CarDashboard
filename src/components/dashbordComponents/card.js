import React from 'react'
import { Knob } from 'primereact/knob';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import TireRepairIcon from '@mui/icons-material/TireRepair';

function Card({icon,word,KnobValue}) {
    return (
        <div className='dashboardCard text-center '>
            {icon === 'BoltOutlinedIcon'?<BoltOutlinedIcon className='iconCard' style={{color:'#A162F7', background:'rgb(161, 98, 247,0.2)'}}/>:''}
            {icon === 'HeightOutlinedIcon'?<HeightOutlinedIcon className='iconCard' style={{color:'#FF7E86', background:'rgb(255, 126, 134,0.3)'}}/>:''}
            {icon === 'OpacityRoundedIcon'?<OpacityRoundedIcon className='iconCard' style={{color:'#A162F7', background:'rgb(161, 98, 247,0.2)'}}/>:''}
            {icon === 'TireRepairIcon'?<TireRepairIcon className='iconCard'style={{color:'#F6CC0D', background:' rgb(246, 204, 13,0.3)'}}/>:''}
            <div className="field col-12 md:col-4 text-blas">
                <p className="mt-3">{word}</p>
                <Knob valueColor='white' value={`${KnobValue}%`} />
            </div>
        </div>
    )
}

export default Card