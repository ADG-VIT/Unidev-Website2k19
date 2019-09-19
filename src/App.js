import React from 'react';
import Home from './Pages/Home/Home';
import Why from './Pages/Why/Why';
import When from './Pages/When/When';
import About from './Pages/About/About'; 
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            page: <Why />,
            color: 'white'
        };
        this.pageChangetoHome = this.pageChangetoHome.bind(this);
        this.pageChangetoWhy = this.pageChangetoWhy.bind(this);
        this.pageChangetoWhen = this.pageChangetoWhen.bind(this);
        this.pageChangetoAbout = this.pageChangetoAbout.bind(this);
    }

    pageChangetoHome() {
        if(this.state.page !== <Home />) {
            this.setState({page: <Home />, color: 'rgb(26,26,26)'});
        var element = [document.getElementById("why-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("home-nav").className += " active";
        }
    }

    pageChangetoWhy() {
        this.setState({page: <Why />, color: 'white'});
        var element = [document.getElementById("home-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("why-nav").className += " active";
    }

    pageChangetoWhen() {
        this.setState({page: <When />, color: '#6600CC'});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("when-nav").className += " active";
    }
    
    pageChangetoAbout() {
        this.setState({page: <About />, color: 'black'});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("when-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        document.getElementById("about-nav").className += " active";
    }

    render() {
        return (
            <div id="grid">
                
                <div id="content" style={{backgroundColor: this.state.color}}>
                    {this.state.page}
                </div>
                
                <div id="navbar">
                    <div className="navbar-element-div">
                    <p id="home-nav" onClick={this.pageChangetoHome} className="navbar-element">HOME</p>
                    </div>
                    <div className="navbar-element-div">
                    <p id="why-nav" onClick={this.pageChangetoWhy} className="navbar-element active">WHY ATTEND</p>
                    </div>
                    <div className="navbar-element-div">
                    <p id="when-nav" onClick={this.pageChangetoWhen} className="navbar-element">WHEN AND WHERE</p>
                    </div>
                    <div className="navbar-element-div">
                    <p id="about-nav" onClick={this.pageChangetoAbout} className="navbar-element">ABOUT ADG</p>
                    </div>
                </div>

            </div>
        );
    }
        
}

export default App;