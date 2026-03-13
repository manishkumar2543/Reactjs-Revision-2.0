// const h1= React.createElement('h1',null, "Hello React js")


// const container= document.querySelector('.container')


// const root= ReactDOM.createRoot(container)

// root.render(h1)


// const h1= React.createElement('h1',null,'Hello from Siwan 1')
// const h2= React.createElement('h2',null,'Hello from Siwan 2')

// const div=React.createElement('div',{id:'parent'},[h1,h2])


// const root=ReactDOM.createRoot(document.querySelector('.container'))

// root.render(div)

import hero from "./app.js";

const root= ReactDOM.createRoot(document.querySelector('.container'))

root.render(hero())

