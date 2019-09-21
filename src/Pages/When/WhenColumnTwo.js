import React from 'react';
import SubHeading from '../../Components/SubHeading';
import Para from '../../Components/Para';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique enim et urna fermentum consectetur. porta gravida nunc. Praesent sodales nisi at dolor laoreet, eu gravida orci convallis. Maecenas hendrerit varius velit, ut pulvinar tellus mollis sit amet. Vivamus finibus tempus nunc eu pellentesque. Aliquam faucibus ex leo, vitae rhoncus leo tincidunt at. Sed vehicula ante quis ipsum lobortis viverra. Curabitur pretium, quam commodo aliquet hendrerit, dolor leo pellentesque arcu, eu tincidunt urna diam id mi. Ut eu neque vel magna luctus iaculis. Proin luctus bibendum diam maximus euismod. In in ante sit amet nunc molestie efficitur. Morbi fermentum sem a aliquam auctor";

const WhenColumnTwo = () => {
    return (
        <div>
            <div className="whenhead">WHEN AND<br />WHERE</div>
            <div className="whensubhead">
            <SubHeading intext="WHERE WE CHILL" />
            </div>
            <div className="whenpara">
            <Para intext={text} />
            </div>
        </div>
    )
}

export default WhenColumnTwo;