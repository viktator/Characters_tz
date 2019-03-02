import React, {Component} from 'react';
import './App.css';
import Person from './components/Person'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {characters: [],
            isOpen: null
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

    handleOpen = name => this.setState({ isOpen: name === this.state.isOpen ? null : name })

    render() {
        const {characters} = this.state;
        console.log(this.state.isOpen);
        return (
            <div className="App">
                <div className={'right-col'}>

                    {this.state.characters.map((person) => <Person handleOpen={this.handleOpen} isOpened={person.name === this.state.isOpen} key={person.name} {...person} />)}
                </div>
            </div>
        );
    }
}

export default App;
