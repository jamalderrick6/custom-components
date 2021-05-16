import React from 'react'
import './App.css';

import WeeklyDatePicker from './components/date_time_selectors/@weekly'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <main className="Components__Main">
        <span className="Components__Title">Custom components for use</span>
        <div className="Components__GridContainer">
          <WeeklyDatePicker/>
        </div>
      </main>
    )
  }
}

export default App
