import createElement from "../functions/createElem"

const Header = (function(){

    const heading = createElement({ele: 'h1', text:"Do dn't due"})

    const header = createElement({ele:'header', children: [heading]})
    
    return header
})()

export default Header