import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h2>Custom App !!</h2>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// React syntex is like this

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click to visit goooogle'
)

const anotherElement = (
  < a href="https://google.com" target='_blank' > Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // reactElement
  anotherElement
  // <MyApp />
  // MyApp()

)
