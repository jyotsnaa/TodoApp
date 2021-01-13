import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NestedList from './components/NestedList';
import Form from './components/form';

class App extends Component{
  render(){
    return(
    <div>
      <NavBar/>
      <Form/>
      <NestedList/>
    </div>
    )
  }
}

export default App;
