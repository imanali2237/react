function customRender(reactElement,mainContainer){
//     // Element Created
//     const domElement=document.createElement(reactElement.type);
//     // Childern Inserted in elemnet
//     domElement.innerHTML=reactElement.children;
// //     Setting attributes
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     mainContainer.append(domElement)
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.append(domElement)


}
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'Click me to visit google.com '
}
const mainContainer=document.getElementById('root')
// custom Render took to Parameter , first what to render , second where to render
customRender(reactElement,mainContainer)