// Little complex approach
/*
const customRender = (reactElement, container) => {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}
*/


// Reactive approach

const customRender = () => {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

// Simple JS approach
/*
const domElement = document.createElement('a')
domElement.setAttribute('href', 'https://google.com')
domElement.setAttribute('target', '_blank')
domElement.innerHTML = 'visit google'
container.appendChild(domElement)
*/

