import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  listItem = [];
  constructor(props) {
    super(props);
    this.state = { newItem: "", list: [] }
  }
  addItems(item) {
    if (item !== null) {
      const itemObj = {
        id: Date.now(),
        value: item,
        isAvailable: true
      }
      this.state.list.push(itemObj)
      this.state.newItem = ''
      this.setState(this.state);
    }

  }

  deleteItem(id) {
    if (id !== null) {
      const updatedList = this.state.list.filter(x => x.id !== id);
      this.state.list = updatedList;
      this.setState(this.state);
    }
  }

  updateInput(inputValue) {
    this.setState({
      newItem: inputValue
    })
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo"></img>
          <p className="App">This is React Project</p>
        </header>
        <div className="container">
          <input className="input" type="text" placeholder="write Item"
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          ></input>
          <button className="btn-submit"
            onClick={() => this.addItems(this.state.newItem)}
          >Add Items</button>
          <ul>
            {this.state.list.map(
              item =>{
                return(
                  <li key={item.id}>
                  <input
                    type="checkbox" className="input-checkbox" name="isDone" checked={item.isAvailable} onChange={() => {}}
                  ></input>
                    {item.value}
                    <button className="btn-delete"
                     onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
