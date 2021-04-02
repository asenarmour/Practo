import React from 'react';
import Carousel from 'react-elastic-carousel';
import res1 from '../images/res1.png';
import res2 from '../images/res2.png';
import res3 from '../images/res3.png';
const Slider = () => {
    return (
        <div>
            <Carousel>
                <div><img src={res1} alt="response 1" /> </div>
                <div><img src={res2} alt="response 2" /></div>
                <div><img src={res3} alt="response 3" /></div>
            </Carousel>
        </div>
    )
}

export default Slider
