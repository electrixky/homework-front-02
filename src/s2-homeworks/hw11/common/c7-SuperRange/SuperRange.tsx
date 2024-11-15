import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '40%',  // Adjust the width as needed
                color: '#00CC22',  // Track and thumb color
                padding: '15px 0',

                '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',  // Thumb color
                    border: '2px solid #00CC22',
                },

                '& .MuiSlider-track': {
                    height: 6,
                    borderRadius: 4,
                },

                '& .MuiSlider-rail': {
                    height: 6,
                    borderRadius: 4,
                    color: '#8B8B8B',
                    opacity: 1
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
