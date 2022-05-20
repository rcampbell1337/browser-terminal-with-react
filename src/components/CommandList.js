import Command from './Command.js';

function getFullCommandList() {
    const commandList = {
        1: new Command('help', 'type help to see a full list of commands.'),
        2: new Command('projects', 'view a list of my projects'),
        3: new Command('about', 'find a bit more out about the man himself')
    }
    return commandList;
}

export default getFullCommandList;