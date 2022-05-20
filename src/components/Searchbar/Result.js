import React from 'react';
import CommandHandler from '../Commands/CommandHandler';

class Result extends React.Component {
    render() {
        console.log(this.props.query);
        switch(this.props.query) {
            case "help":
                return (
                    <CommandHandler />
                )
            default:
                return (
                    <h1>Please enter a valid command.</h1>
                )
        }
    }
}

export default Result;