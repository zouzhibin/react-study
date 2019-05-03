function render(element,parentNode){
    console.log(element)
    // 如果第一个参数是字符串或者数字的话 那么他就是一个文本节点 直接让他插进元素中
    if(typeof element ==='string'||typeof element ==='number'){
        // debugger
        return parentNode.appendChild(document.createTextNode(element))
    }
    let type = element.type;
    let props = element.props;
    // 如果是类组件
    if(type.isReactComponent){
        let returnElement =new type(props).render();
        type = returnElement.type    
        props = returnElement.props 
    // // 如果是函数组件    
    }else if(typeof type ==='function'){
        let returnElement = type(props)
        type = returnElement.type    
        props = returnElement.props    
    }
    let domElement = document.createElement(type)
    for(let propName in props){
        // 判断属性是否是className 和style children这两个要做不同的处理方式
        if(propName === 'className'){
            document.className = props[propName]
        }else if(propName=='style'){
             let styleObj = props[propName]
            //  console.log(styleObj)
            //  for(let attr in styleObj){
            //     domElement.style[attr] = styleObj[attr]
            //  }   
           // ['color','fontSize']
             let cssText = Object.keys(styleObj).map(attr=>{
                 return `${attr.replace(/([A-Z])/g,function(){
                     return "-"+arguments[1].toLowerCase()
                 })}:${styleObj[attr]}`
             }).join(";")    
        }else if(propName==='children'){
            let childre = Array.isArray(props.children)?props.children:[props.children]
            // 挂载到自身身上
            childre.forEach(child=>{render(child,domElement)})
        }
        else{
            domElement.setAttribute(propName,props[propName])
        }
    }
    parentNode.appendChild(domElement)
}
export default {render}