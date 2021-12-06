import React from 'react'

/*  
  1、当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
  2、之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock 渲染的输出。
  3、当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
  4、浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此一来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
  5、一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。 
*/

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    // PS:构造函数是唯一可以给 this.state 赋值的地方,其他时机需要使用this.setState
    this.state = { date: new Date() }
  }

  // 生命周期函数，componentDidMount方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计
  componentDidMount() {
    this.timerID = setInterval(
      // 每秒执行一次tick来修改state中的date值
      () => this.tick(),
      1000
    )
  }

  // 生命周期函数，componentWillUnmount方法会在组件卸载时执行
  componentWillUnmount() {
    // 卸载前清楚定时器
    clearInterval(this.timerID)
  }

  tick() {
    // this.setState更新组件中的State
    /* 正确使用State
      1、不要直接修改State
        错误Wrong：this.state.str = 'Hello',直接修改不会重新渲染组件.
        正确Correct：this.setState({str: 'Hello'})
      2、State的更新可能是异步的
        React 可能会把多个 setState() 调用合并成一个调用。
        // Wrong 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
        this.setState({
          counter: this.state.counter + this.props.increment,
        });
        // Correct 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
        this.setState((state, props) => ({
          counter: state.counter + props.increment
        }));
        或者
        this.setState(function(state, props) {
          return {
            counter: state.counter + props.increment
          };
        });
      3、数据是向下流动的，不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。
    */
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

export default Clock
