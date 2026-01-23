import h1 from './app.js'
import circle from './test.js'

let root = ReactDOM.createRoot(document.querySelector("#root"))

const parent = React.createElement('div', null, [h1(), circle()])


root.render(parent)

