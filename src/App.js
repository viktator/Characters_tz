import React, {Component} from 'react';
import './App.css';
import PersonList from './components/PersonList'
import PersonInfo from './components/PersonInfo'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            activePeronName: null
        };
    }

    componentDidMount() {
        fetch(
            '/api/people/',
            {
                method: "GET",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(result => {
                this.setState({characters: result.results})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleOpen = name =>this.setState({activePeronName: this.state.activePeronName === name ? null : name })

    render() {
        const {characters} = this.state;
        const activePerson = this.state.characters.find(({ name }) => name === this.state.activePeronName )
        return (
            <div className="App">
                <div className={'right-col'}>
                    <PersonList handleOpen={this.handleOpen} activePerson={this.state.activePeronName} characters={characters} />
                    {this.state.activePeronName && <PersonInfo {...activePerson} />}
                </div>
            </div>
        );
    }
}

export default App;
