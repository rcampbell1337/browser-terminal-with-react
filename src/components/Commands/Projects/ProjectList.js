import React  from 'react';
import axios from 'axios';

class ProjectList extends React.Component {
    constructor() {
        super();
        this.state = { projects: [] };
    }
    async getRepoList() {
        await axios.get('https://api.github.com/users/rcampbell1337/repos?sort=updated')
            .then(res => {
                this.processProjectList(res.data);
            })
    }

    async componentDidMount() {
        this.getRepoList();
    }

    async processProjectList(data) {
        let parsedList = [];
        data.forEach(repo => {
            let processedData = {'id': repo.id, 'name': repo.name, 'url': repo.html_url};
            parsedList.push(processedData);
        })
        this.setState({projects: parsedList})
    }

    render() {
        return (
            <ul className='list-inline'>
                {this.state.projects.slice(0, 10).map(repo => (
                    <li><a href={repo.url}><p className='text-info'>{repo.name}:</p></a></li>
                ))}
            </ul>
        )
    }
}
  

export default ProjectList;