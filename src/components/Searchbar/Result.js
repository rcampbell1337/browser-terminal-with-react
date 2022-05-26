import React from 'react';
import Help from '../Commands/Help/Help';
import About from '../Commands/About/About';
import ProjectList from '../Commands/Projects/ProjectList';

class Result extends React.Component {
    render() {
        console.log(this.props.query);
        switch(this.props.query) {
            case "help":
                return <Help />
            case "about":
                return <About />
            case "projects":
                return <ProjectList />
            default:
                return (
                    <p><span className='text-danger'>Err</span>: No results for <span className='text-info'>"{this.props.query}"</span></p>
                )
        }
    }
}

export default Result;