import React from 'react';
import When from '../src/Pages/When/When';
import About from '../src/Pages/About/About';
import Contact from '../src/Pages/Contact/Contact';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            page: <When />
        };
    }

    pageChangeWhen() {
        this.setState({page : <When />});       
    }

    pageChangeAbout() {
        this.setState({page : <About />});
    }

    pageChangeContact() {
        this.setState({page : <Contact />});
    }
    
    render() {
        console.log(this.state.page);
        return (
            <div>
                {this.state.page}
                <Navbar pageChangeSelectorAbout = {this.pageChangeAbout} pageChangeSelectorContact = {this.pageChangeContact} pageChangeSelectorWhen = {this.pageChangeWhen} />
            </div>
        );
    }
        
}

export default App;