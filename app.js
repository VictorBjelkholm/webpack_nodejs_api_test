import React from 'react'
import ReactDOM from 'react-dom'

import ComponentA from './component_a'
// import ComponentLess from './component_less'
// import ComponentSass from './component_sass'
    // <ComponentSass/>
    // <ComponentLess/>

class App extends React.Component {
  render () {
    return <div>
      <ComponentA/>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})
