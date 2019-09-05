import React from 'react';
import WhenColumnOne from './WhenColumnOne';
import WhenColumnTwo from './WhenColumnTwo';

class When extends React.Component {
    render() {
        return (
            <div className = "Column">
                <WhenColumnOne id="ColumnOne"/>    
                <WhenColumnTwo id="ColumnTwo"/>
            </div>
        );
    }
}
    
export default When;
