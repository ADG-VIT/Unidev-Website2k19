import React from 'react';
import map from '../../Images/undraw_product_teardown_elol.png';
import Image from '../../Components/Image';
import Para from '../../Components/Para';
import './Why.css';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, vitae rhoncus leo tincidunt at. Sed vehicula ante quis ipsum lobortis viverra. Curabitur pretium, quam commodo aliquet hendrerit, dolor leo pellentesque arcu, eu tincidunt urna diam id mi. Ut eu neque vel magna luctus iaculis. Proin luctus bibendum diam maximus euismod. In in ante sit amet nunc molestie efficitur.";

const WhyColumnTwo = () => {
    return (
        <div>
            <Image source={map} className="image" />
            <div id="whypara">
            <Para className="whypara" intext={text} />
            </div>
        </div>
    )
}

export default WhyColumnTwo;