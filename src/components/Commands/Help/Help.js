import Command from './Command.js';
import React from 'react';

class Help extends React.Component {
    
    commandList = {
        1: new Command('help', 'type help to see a full list of commands.'),
        2: new Command('projects', 'view a list of my projects.'),
        3: new Command('about', 'find a bit more out about the man himself.'),
        4: new Command('cls', 'clear your search history.')
    }
    
    render() {
        const mappedTitles = Object.entries(this.commandList).map(([key, value]) => (
            <div className='d-flex'><p className='text-info' key={key}>{value.title}:</p><p>{'     '}{value.description}</p></div>
        ))
        return (
            <div className='d-flex'>
                <div className='d-flex flex-column'>
                    {mappedTitles}
                </div>
            </div>
        )
    }
}
  

export default Help;