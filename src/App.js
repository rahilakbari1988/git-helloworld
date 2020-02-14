import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Square from './Square';
import Para from './Para'


class App extends React.Component {
  render() {
    return (
    <div>
    <h1 className="helloWorld">Hello world!</h1>
    <Square/>
    <Para/>
    </div>
    );
  }
}
export default App;
