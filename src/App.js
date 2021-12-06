import React from 'react';
import './App.css';
import Clock from './testComponent/clock'

/**
 * @describe JSX if else逻辑展示 
 */
// const userName = 'Parker'
// function App() {
//   if (userName) {
//     return (
//       <div className="App">
//         <h1> {formatNmae(userName)} Hello World!</h1>
//       </div>
//     );
//   } else {
//     return <h1 className="App"> NoBay Hello World!</h1>
//   }
// }

/**
 * @describe JSX中也可以使用大括号，来在属性值中插入一个 JavaScript 表达式
 * @describe JSX中可以通过使用引号""，来将属性值指定为字符串字面量
 */
// function formatNmae(name) {
//   return name + '!'
// }
// function App() {
//   return (
//     <div className="App">
//       <h1> {formatNmae(userName)} Hello World!</h1>
//     </div>
//   );
// }

/**
 * @describe JSX if else逻辑展示
 * @PS 组件名称必须以大写字母开头，React 会将以小写字母开头的组件视为原生 DOM 标签
 */
// react函数组件
// function Welcome(props) {
//   return <h1>Hello {props.name}, I am function component</h1>
// }
// es6 Class组件
// class Welcome extends React.Component{
//   render () {
//     return <h1>Hello {this.props.name}, I am class component</h1>
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <Welcome name="Parker"/>
//       <Welcome name="Sam"/>
//       <Welcome name="Alice"/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

export default App;
