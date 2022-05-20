import CommandList from './CommandList.js';
import React from 'react';

class FormattedCommands extends React.Component {
    render() {
        const mappedCommands = CommandList().map(command => (
            <li key={command.title}>{command}</li>
        ))
        console.log(mappedCommands);
        return (
            <ul>{mappedCommands}</ul>
        )
    }
}

export default FormattedCommands;