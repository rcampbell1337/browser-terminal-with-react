import React from 'react';
import Help from '../Commands/Help/Help';
import About from '../Commands/About/About';

class Result extends React.Component {
    render() {
        console.log(this.props.query);
        switch(this.props.query) {
            case "help":
                return <Help />
            case "about":
                return <About />
            
            default:
                return (
                    <p></p>
                )
        }
    }
}

export default Result;