

let h1 = React.createElement('h1', { id: 'hero' }, "this is h1")
let h2 = React.createElement('h2', { id: "queen" }, "this is h2")


let div = React.createElement('div', { id: "parent" }, [h1, h2])

let container = document.querySelector("#root")

let root = ReactDOM.createRoot(container)

root.render(div)



