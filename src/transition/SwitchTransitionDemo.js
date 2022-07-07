import React, { PureComponent } from 'react'
import { SwitchTransition,CSSTransition } from 'react-transition-group'

export default class  extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isOn:true,
      btn:'btn'
    }
  }
  render() {
    const {isOn} = this.state;
    return (
      <div>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={isOn?'on':'off'}
                         classNames='btn'
                         timeout={1000}>
            <button onClick={e=>this.setState({isOn:!isOn})}>
              {isOn?'on':'off'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
