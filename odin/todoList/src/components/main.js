import createElement from "../functions/createElem"
import Sidebar from "./sidebar"

const Main = (function(){
    const main = createElement({ele:'main', children:[Sidebar]})
    return main
})()

export default Main