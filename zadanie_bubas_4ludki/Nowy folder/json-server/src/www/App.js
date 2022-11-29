import React, { Component } from 'react'
import Item from './components/Item'
import './App.css'

class App extends Component {
  state = {
    count: 'loading...'
  }

  componentDidMount = async () => {
    const { count } = await window.fetch(`/api/count`).then(res => res.json())
    this.setState({ count })
  }

  increment = async () => {
    const { count } = await window
      .fetch(`/api/count/increment`, { method: 'POST' })
      .then(res => res.json())
    this.setState({ count })
  }

  render() {
    return (
      <div className="App">
        <Item></Item>
      </div>
    )
  }
}

export default App
