import React from 'react';
import Home from './Pages/Home/Home';
import Why from './Pages/Why/Why';
import When from './Pages/When/When';
import About from './Pages/About/About'; 
import Burger from './Components/Burger.js';
import Navbar from './Components/Navbar.js';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            page: <Home />,
            color: 'rgb(26,26,26)',
            bcolor: 'white'
        };
        this.pageChangetoHome = this.pageChangetoHome.bind(this);
        this.pageChangetoWhy = this.pageChangetoWhy.bind(this);
        this.pageChangetoWhen = this.pageChangetoWhen.bind(this);
        this.pageChangetoAbout = this.pageChangetoAbout.bind(this);
    }

    pageChangetoHome() {
        if(this.state.page !== <Home />) {
            this.setState({page: <Home />, color: 'rgb(26,26,26)', bcolor: 'white'});
            var element = [document.getElementById("why-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
            for(i=0;i<3;i++) {
                element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("home-nav").className += " active";
        }
    }

    pageChangetoWhy() {
        if(this.state.page !== <Why />) {
            this.setState({page: <Why />, color: 'white', bcolor: 'black'});
            var element = [document.getElementById("home-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
            for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("why-nav").className += " active";
        }
    }

    pageChangetoWhen() {
        if(this.state.page !== <When />) {
        this.setState({page: <When />, color: '#6600CC', bcolor: 'white'});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("when-nav").className += " active";
        }
    }
    
    pageChangetoAbout() {
        if(this.state.page !== <About />) {
        this.setState({page: <About />, color: 'rgb(26,26,26)', bcolor: 'white'});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("when-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("about-nav").className += " active";
        }
    }

    openDrawer() {
        document.getElementById("navbar").style.right="0vw";
        document.getElementById("blur").style.right="0vw";
        document.getElementById("content").style.filter="blur(2px)";
    }

    closeDrawer() {
        if(document.getElementById("navbar")) {
        document.getElementById("navbar").style.right="150vw";
        document.getElementById("blur").style.right="200vw"; 
        document.getElementById("content").style.filter="blur(0)";
        }
    }

    render() {
        document.body.style.backgroundColor = this.state.color;
        return (
            <div id="grid">   
                <div id="blur" onClick={this.closeDrawer}></div> 
                <div id="navbar">
                <Navbar changetoHome={this.pageChangetoHome} changetoWhy={this.pageChangetoWhy} changetoWhen={this.pageChangetoWhen} changetoAbout={this.pageChangetoAbout} />
                </div>
                <div id="content" style={{backgroundColor: this.state.color}}>
                    <div id="burger" onClick={this.openDrawer}>
                        <Burger colour={this.state.bcolor} />
                    </div>
                    <div>
                        {this.state.page}
                    </div>
                </div>
            </div>
        );
    }       
}

export default App;