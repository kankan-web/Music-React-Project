import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      products:[]
    }
  }
  async componentDidMount(){
    //拿到数据
    this.setState({
      products:[...this.state.products,...res]
    })
    // 1.axios发生基本的网络请求
    // axios({
    //   url:'https://httpbin.org/get',
    //   params:{
    //     name:'why',
    //     age:18
    //   }
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })

    // axios({
    //   url:'https://httpbin.org/post',
    //   data:{
    //     name:'kebe',
    //     age:40
    //   },
    //   method:'post',
    // }).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err)
    // })

    //2.常用的请求方法
    // axios.get("https://httpbin.org/get",{
    //   params:{
    //     name:'lilei',
    //     age:30
    //   }
    // }) .then(console.log)
    // axios.post('https://httpbin.org/post',{
    //   name:'lucy',
    //   age:28
    // }).then(console.log)


    // axios.request({

    // })

    //3.await async
    // try{
    //   const result = await axios.get('https://httpbin.org/get',{
    //     params:{
    //       name:'lilei',
    //       age:30
    //     }
    //   });
    //   console.log(result)
    // }catch(err){
    //   console.log(err)
    // }

    //4.axios.all方法
    // const request1 = axios({
    //   url:'https://httpbin.org/post',
    //   data:{name:'kebe',age:40},
    //   method:'post'
    // })
    // const request2 = axios({
    //   url:'https://httpbin.org/get',
    //   params:{name:'why',age:18},
    // })
    // axios.all([request1,request2]).then(res=>{
    //   console.log(res)
    // })

    //5. all方法本质
    // const promise1 = new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //     resolve('promise1')
    //   },1000)
    // })
    // const promise2 = new Promise((resolve,reject)=>{
    //   setTimeout(()=>{
    //     resolve('promise1')
    //   },3000)
    // })
    // Promise.all([promise1,promise2]).then(res=>{
    //   console.log(res)
    // })

    // 7.创建新的实例
    // const instance1 = axios.create({
    //   baseURL:'http://codewhy.xyz',
    //   timeout:5000,
    //   headers:{

    //   }
    // })

    //8.拦截器
    axios.interceptors.request.use(config=>{
      //1.发生网络请求，在界面的中间位置显示loading的组件
      // 2.某些请求要求用户必须携带token,如果没有携带,那么直接跳转到登录页面
      // 3.params/data序列化的操作
      return config;
    },err=>{
      if(err&&err.response){
        switch (err.response.status){
          case 400:
            console.log('请求错误');
            break;
          case 401:
            console.log('未授权访问');
            break;
          default:
            console.log('')
        }
      }
    });
    axios.interceptors.response;
  }
  render() {
    return (
      <div>App</div>
    )
  }
}
