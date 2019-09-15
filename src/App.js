import React from 'react';
import When from '../src/Pages/When/When';
import About from '../src/Pages/About/About';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            page: <When />
        };
        this.pageChangetoHome = this.pageChangetoHome.bind(this);
        this.pageChangetoWhy = this.pageChangetoWhy.bind(this);
        this.pageChangetoWhen = this.pageChangetoWhen.bind(this);
        this.pageChangetoAbout = this.pageChangetoAbout.bind(this);
    }

    pageChangetoHome() {
        //this.setState({page: <Home />});
        var element = [document.getElementById("why-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        element = document.getElementById("home-nav");
        element.className += " active";
    }

    pageChangetoWhy() {
        //this.setState({page: <Why />});
        var element = [document.getElementById("home-nav"), document.getElementById("when-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        element = document.getElementById("why-nav");
        element.className += " active";
    }

    pageChangetoWhen() {
        this.setState({page: <When />});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("about-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        element = document.getElementById("when-nav");
        element.className += " active";
    }
    
    pageChangetoAbout() {
        this.setState({page: <About />});
        var element = [document.getElementById("home-nav"), document.getElementById("why-nav"), document.getElementById("when-nav")], i;
        for(i=0;i<3;i++) {
            element[i].className = element[i].className.replace(/\bactive\b/g, "");
        }
        element = document.getElementById("about-nav");
        element.className += " active";
    }

    render() {
        return (
            <div id="grid">
                <div>
                </div>
                <div id="content">
                    {this.state.page}
                </div>
                <div>
                </div>
                <div id="navbar">
                    <div className="navbar-element-div">
                    <p id="home-nav" onClick={this.pageChangetoHome} className="navbar-element active">HOME</p>
                    </div>
                    <div className="navbar-element-div">
                    <p id="why-nav" onClick={this.pageChangetoWhy} className="navbar-element">WHY ATTEND</p>
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