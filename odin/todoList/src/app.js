import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./components/main"
import createElement from "./functions/createElem"

const App = (function(){

    const content = createElement({ele:'div', children: [Header, Main, Footer]})
    return content
    
})()

export default App