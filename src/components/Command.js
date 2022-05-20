import React from 'react';

class Command extends React.Component {
    constructor(title, description) {
        super();
        this.title = title;
        this.description = description;
    }

    render() {
        return <h1>{this.title}         {this.description}</h1>
    }
}

export default Command;