import React from 'react';
import WhenColumnOne from './WhenColumnOne';
import WhenColumnTwo from './WhenColumnTwo';
import './When.css'

class When extends React.Component {
    render() {
        return (
            <div className = "Column">
                <div>
                </div>
                <WhenColumnOne id="ColumnOne"/>
                <div></div>    
                <WhenColumnTwo id="ColumnTwo"/>
            </div>
        );
    }
}
    
export default When;
