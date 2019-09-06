import React from 'react';
// import When from '../src/Pages/When/When';
// import About from '../src/Pages/About/About';
// import Contact from '../src/Pages/Contact/Contact';
import './App.css';
// import Navbar from '../src/Components/Navbar/Navbar';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            page: 'when'
        };

        // this.pageChangetoHome = this.pageChangetoHome.bind(this); OR like i have done at place of function calling.
        // you can refer this link to understand : https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a
        //you guys were not binding in the function. Now the state is changing.
        //dont use anchor (<a>) tag for nav, just use div or button and modify it. 
    }


    pageChangetoHome(){
        this.setState({page : 'home'});
    }
    
    render() {
        console.log(this.state.page);
        return (
            <div>
                {/* {this.state.page}
                <Navbar pageChangeSelectorAbout = {this.pageChangeAbout} pageChangeSelectorContact = {this.pageChangeContact} pageChangeSelectorWhen = {this.pageChangeWhen} /> */}
                <button onClick={this.pageChangetoHome.bind(this)}>home</button> {/** i have done this one for demo */}
                
                <button>when</button>
                <button>where</button>
                <button>about</button>

                <div className="state">{this.state.page}</div>
            </div>
        );
    }
        
}

export default App;