import Command from './Command.js';
import React from 'react';

class CommandHandler extends React.Component {
    commandList = {
        1: new Command('help', 'type help to see a full list of commands.', 'placeholder'),
        2: new Command('projects', 'view a list of my projects', 'placeholder'),
        3: new Command('about', 'find a bit more out about the man himself', 'placeholder')
    }
    
    render() {
        const mappedCommands = Object.entries(this.commandList).map(([key, value]) => (
            <li key={key}>{value.constructComponent()}</li>
        ))
        return (
            <ul>{mappedCommands}</ul>
        )
    }
}
  

export default CommandHandler;