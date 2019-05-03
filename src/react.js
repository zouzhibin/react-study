class Component {
    static isReactComponent = true; // 判断这是否是一个class 类组件 因为class 类经babel转译后也会变为函数组件
    constructor(props){
        this.props = props
    }
}


/**
 * @param {*} type 标签元素
 * @param {*} config 属性集合
 * @param {*} children 子元素 
 */
function createElement(type,config={},children){
    let propName ;
    const props = {}
    // 如果有config 存在 也即是属性存在
    for(propName in config){
        props[propName] = config[propName]
    }
    // 获取子元素
    const childrenLength = arguments.length-2

    if(childrenLength==1){
        props.children = children
    }else if(childrenLength>1){
        props.children = Array.from(arguments).slice(2)
    }
    return ReactElement(type,props)

}

function ReactElement(type,props){
    const element = {type,props}
    return element
}




export default {createElement,Component}