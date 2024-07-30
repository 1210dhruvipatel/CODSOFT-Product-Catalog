import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate('')
    return (
        <>
            <section className='home'>
                <div className="head">
                    <h1>Luxe Gems</h1>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, sit quibusdam maiores assumenda aspernatur animi quisquam doloribus voluptas recusandae temporibus!</p>
                </div>
            </section>
            <section className='catalog'>
                <div className='div' onClick={() => { navigate('/ring') }} >
                    <img src="./images/ring.jpg" alt="" onClick={() => { navigate('/ring') }} />
                    <div className='name'>
                        <p>Rings</p>
                    </div>
                </div>
                <div className='div' onClick={() => { navigate('/bracelet') }} >
                    <img src="./images/bracelet.jpg" alt="" onClick={() => { navigate('/bracelet') }} />
                    <div className='name'>
                        <p>Bracelets & Bangles</p>
                    </div>
                </div>
                <div className='div' onClick={() => { navigate('/earring') }}>
                    <img src="./images/earring.jpg" alt="" />
                    <div className='name'>
                        <p>Earrings</p>
                    </div>
                </div>
                <div className='div' onClick={() => { navigate('/necklace') }} >
                    <img src="./images/necklace.jpg" alt="" />
                    <div className='name'>
                        <p>Nacklaces</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
