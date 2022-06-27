[33mcommit 5b9d589d03879ee804ed767631bdeeed210d6d07[m[33m ([m[1;36mHEAD -> [m[1;32mdev[m[33m, [m[1;33mtag: 2.组件的生命周期[m[33m)[m
Author: kankan <2728360489@qq.com>
Date:   Mon Jun 27 16:02:18 2022 +0800

    2.组件的生命周期

[1mdiff --git a/src/App.js b/src/App.js[m
[1mnew file mode 100644[m
[1mindex 0000000..65a7acd[m
[1m--- /dev/null[m
[1m+++ b/src/App.js[m
[36m@@ -0,0 +1,47 @@[m
[32m+[m[32mimport React, { Component } from 'react'[m
[32m+[m[32mclass Cpn extends Component {[m
[32m+[m[32m  render(){[m
[32m+[m[32m    return <h2>我是Cpn组件</h2>[m
[32m+[m[32m  }[m
[32m+[m[32m  componentWillUnmount(){[m
[32m+[m[32m    console.log("调用了Cpn的componentWillUnmount方法")[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32mexport default class App extends Component {[m
[32m+[m[32m  constructor(){[m
[32m+[m[32m    super();[m
[32m+[m[32m    console.log('执行了组件的constructor')[m
[32m+[m[32m    this.state = {[m
[32m+[m[32m      counter:0,[m
[32m+[m[32m      isShow:true,[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m  render() {[m
[32m+[m[32m    console.log('执行了组件的render函数')[m
[32m+[m[32m    return ([m
[32m+[m[32m      <div>[m
[32m+[m[32m        <h2>当前计数:{this.state.counter}</h2>[m
[32m+[m[32m        <button onClick={e=>this.increment()}>+1</button>[m
[32m+[m[32m        <hr/>[m
[32m+[m[32m        <button onClick={e=>this.changeCpnShow()}>切换</button>[m
[32m+[m[32m        {this.state.isShow && <Cpn/>}[m
[32m+[m[32m      </div>[m
[32m+[m[32m    )[m
[32m+[m[32m  }[m
[32m+[m[32m  changeCpnShow(){[m
[32m+[m[32m    this.setState({[m
[32m+[m[32m      isShow:!this.state.isShow[m
[32m+[m[32m    })[m
[32m+[m[32m  }[m
[32m+[m[32m  increment(){[m
[32m+[m[32m    this.setState({[m
[32m+[m[32m      counter:this.state.counter+1[m
[32m+[m[32m    })[m
[32m+[m[32m  }[m
[32m+[m[32m  componentDidUpdate(){[m
[32m+[m[32m    console.log('执行了组件的componentDidUpdate方法')[m
[32m+[m[32m  }[m
[32m+[m[32m  componentDidMount(){[m
[32m+[m[32m    console.log('执行了组件的componentDidMount方法')[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..448eceb[m
[1m--- /dev/null[m
[1m+++ b/src/index.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mimport React from 'react'[m
[32m+[m[32mimport ReactDom from 'react-dom'[m
[32m+[m[32mimport App from './App'[m
[32m+[m
[32m+[m[32mReactDom.render(<App/>,document.getElementById('root'))[m
\ No newline at end of file[m
