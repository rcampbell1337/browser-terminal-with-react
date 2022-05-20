import React from 'react';

class Command extends React.Component {
    constructor(title, description, method) {
        super();
        this.title = title;
        this.description = description;
        this.method = method;
    }

    constructComponent() {
        return (
            <div className="d-flex justify-content-between">
                <p className="title">{this.title}</p>
                <p className="description">{this.description}</p>
            </div>
        )
    }
}

export default Command;