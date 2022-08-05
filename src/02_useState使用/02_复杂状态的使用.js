import React, { PureComponent,useState } from 'react'


export default function MultiHookStae() {
  const [friends,setFriends] = useState(['kebo','lilei'])
  const [students,setStudents] = useState([
    {id:110,name:'why',age:18},
    {id:111,name:'keby',age:30},
    {id:112,name:'lilei',age:28},
  ])
    return (
      <div>
        <h2>好友列表：</h2>
        <ul>
          {
            friends.map((item,index)=>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={e=>setFriends([...friends,'tom'])}>添加朋友</button>
        {/* 错误做法 */}
        {/* <button onClick={addFriend}>添加朋友</button> */}
        <hr/>
        <h2>学生列表</h2>
        <ul>
          {
            students.map((item,index)=>{
              return (
                <li key={item.id}>
                  <span>姓名:{item.name} 年龄:{item.age}</span>
                  <button onClick={e=>incrementAgeWithIndex(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
    function addFriend(){
      friends.push('humm');
      setFriends(friends)
    }
    function incrementAgeWithIndex(index){
      const newStudents = [...students];
      console.log(newStudents,index)
      newStudents[index].age += 1
      setStudents(newStudents)
    }
}
