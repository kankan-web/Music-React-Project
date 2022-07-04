import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>App</div>
    )
  }
}
function enhanceComponent(WrappedComponent){
   class NewComponent extends PureComponent{
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
  NewComponent.displayName='kobe'
  return NewComponent;
}
// function enhanceComponent2(WrappedComponent){
//   function NewComponent(props){
//     return <WrappedComponent {...props}/>
//   }
//  NewComponent.displayName='kobe'
//  return NewComponent;
// }
const EnhanceComponent = enhanceComponent(App)
export default EnhanceComponent;