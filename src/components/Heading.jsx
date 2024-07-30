import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className='heading'>
                <div className='img'><img src="./images/m6.jpg" alt="" /></div>
                <div className='title'><h2>{props.name}</h2></div>
            </div>
        </>
    )
}

export default Heading
