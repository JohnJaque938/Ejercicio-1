import './App.css';
import React, { Component } from 'react';
import { ItemForm, ItemList, Title } from './Component';

class App extends Component {
  constructor(props) {
    super(props);
    this.itemListRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Title />
        <ItemForm addItem={(item) => this.itemListRef.current.addItem(item)} />
        <ItemList ref={this.itemListRef} />
      </div>
    );
  }
}

export default App;