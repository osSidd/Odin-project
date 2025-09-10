export default function createElement({ele, text=null, children=null}){
    const element = document.createElement(ele)
    element.textContent = text

    if(children){
        children.forEach(child => {
            element.appendChild(child)
        })
    }

    return element
}