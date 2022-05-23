import Command from './Command.js';
import React from 'react';

class Help extends React.Component {
    
    commandList = {
        1: new Command('help', 'type help to see a full list of commands.'),
        2: new Command('projects', 'view a list of my projects'),
        3: new Command('about', 'find a bit more out about the man himself')
    }
    
    render() {
        const mappedTitles = Object.entries(this.commandList).map(([key, value]) => (
            <p className='text-info' key={key}>{value.title}</p>
        ))
        const mappedDescriptions = Object.entries(this.commandList).map(([key, value]) => (
            <p key={key}>{value.description}</p>
        ))
        return (
            <div className='d-flex'>
                <div className='d-flex p-2 flex-column'>
                    {mappedTitles}
                </div>
                <div className='d-flex p-2 flex-column'>
                    {mappedDescriptions}
                </div>
            </div>
        )
    }
}
  

export default Help;