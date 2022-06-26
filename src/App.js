import React,{Component} from "react";
/**-----------------第一小部分----------------- */
export default class APP extends Component{
  constructor(){
    super();
    this.state = {
      message:'你好李英华'
    }
  }
  render(){
    return(
      <div>
        {/*alt+shift+f:对代码格式化 */}
        <span>我是App组件</span>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

// export default function App(){
//   return(
//     <div>我是function的组件:App组件</div>
//   )
// }
/**-----------------第二小部分----------------- */
//render函数的返回

// export default class App extends Component {
//   render() {
//     return (
//       {/*数组
//       [
//         <div>App</div>
//         <div>App</div>
//       ]*/},
//       {/*字符串或数字
//         "aaa"
//         123
//     */},
//     {/*
//       布尔值或null
//     */}
//     )
//   }
// }
