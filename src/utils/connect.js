import React,{ PureComponent } from "react"
import { StoreContext } from "./context";

export function connect(mapStateToProps,mapDispachToProp){
  return function enhanceHOC(WrappedComponent){
   class EnhanceComponent extends PureComponent{
    constructor(props,context){
      super(props,context);

      this.state = {
        storeState:mapStateToProps(context.getState())
      }
    }
    componentDidMount(){
      this.unsubscribe = this.context.store.subscribe(()=>{
        this.setState({
          storeState:mapStateToProps(this.context.store.getState())
        })
      })
    }
    componentWillUnmount(){
      this.unsubscribe();
    }
    render() {
      return <WrappedComponent {...this.props}
                               {...mapStateToProps(this.context.store.getState())}
                               {...mapDispachToProp(this.context.store.dispatch)}/>
    }
   }
   EnhanceComponent.contextType = StoreContext;

   return EnhanceComponent;
  }
}