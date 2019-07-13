import React, { Component } from 'react';

import './App.css';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      colours: []
    }

    console.log(this.state.colours)
    

  }
  componentDidMount() {
    fetch('https://all.data.alexbooster.com/json/trainers.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data)

        this.setState({
          colours: [
            { size: data[0].allSizes },
            { color: data[0].allColors },
            { image: data[0].allImages },
            { bySize: data[0].bySize }
          ]
        });
      });
  }

  
  render() {
    console.log(this.state.colours[0])
    return (
      <div className="App">
        <select>
        {this.state.colours.map(item => {
          return <option>{item.color}</option>
        })}
        </select>

      </div>
    );
  }
}

export default App;
