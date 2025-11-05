import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                color: 'green'
            }}
            value={props.value}
            defaultValue={props.defaultValue}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
