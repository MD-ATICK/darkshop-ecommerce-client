import React from 'react'

function RightContent({children}) {
    return (
        <div className=' flex-grow  w-full h-full md:p-0 p-4'>
            <div className=' bg-white min-h-[90.2vh] rounded-2xl md:rounded-none h-full w-full shadow-lg'>
                {children}
            </div>
        </div>
    )
}

export default RightContent