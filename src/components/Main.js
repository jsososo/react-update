require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

export default class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      child: [<NodeB changeStr={this.changeStr} />]
    }

    this.btn1 = this.btn1.bind(this);
    this.btn2 = this.btn2.bind(this);
    this.btn3 = this.btn3.bind(this);
    this.btn4 = this.btn4.bind(this);
    this.btn5 = this.btn5.bind(this);
    this.btn11 = this.btn11.bind(this);
    this.btn12 = this.btn12.bind(this);
    this.btn13 = this.btn13.bind(this);
    this.btn14 = this.btn14.bind(this);
    this.btn15 = this.btn15.bind(this);
  }

  componentDidMount() {
    console.log('======================')
  }

  componentDidUpdate() {
    console.log('======================')
  }

  btn1() {
    this.setState({
      child: [<NodeB />]
    })
  }

  btn2() {
    this.setState({
      child: [<NodeB />, <NodeC />]
    })
  }

  btn3() {
    this.setState({
      child: [<NodeB child={[<NodeD />]}/>, <NodeC />]
    })
  }

  btn4() {
    this.setState({
      child: [<NodeB />, <NodeC child={[<NodeD />]}/>]
    })
  }

  btn5() {
    this.setState({
      child: [<NodeC />, <NodeB />]
    })
  }

  btn11() {
    this.setState({
      child: [<NodeB key='nodeB'/>]
    })
  }

  btn12() {
    this.setState({
      child: [<NodeB key='nodeB'/>, <NodeC key='nodeC' />]
    })
  }

  btn13() {
    this.setState({
      child: [<NodeB child={[<NodeD />]} key='nodeB'/>, <NodeC key='nodeC'  />]
    })
  }

  btn14() {
    this.setState({
      child: [<NodeB key='nodeB' />, <NodeC child={[<NodeD key='nodeD'/>]}  key='nodeC' />]
    })
  }

  btn15() {
    this.setState({
      child: [<NodeC key='nodeC'/>, <NodeB key='nodeB'/>]
    })
  }

  render() {
    return (
      <div className="box">
        <div className="description">You can see the info in console</div>
        <div className="container" style={{margin: '50px 10%'}}>
          <NodeA child={this.state.child}/>
        </div>
        <div className="btn-box">
          <div className="btn-text">With out set keys</div>
          <div className="btn" onClick={this.btn1}>
            <div className="btn-line">A</div>
            <div className="btn-line">B</div>
          </div>
          <div className="btn" onClick={this.btn2}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
          </div>
          <div className="btn" onClick={this.btn3}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
            <div className="btn-line"><div>D</div><div></div><div></div><div></div></div>
          </div>
          <div className="btn" onClick={this.btn4}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
            <div className="btn-line"><div></div><div></div><div></div><div>D</div></div>
          </div>
          <div className="btn" onClick={this.btn5}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>C</div><div>B</div></div>
          </div>
        </div>

        <div className="btn-box">
          <div className="btn-text">set keys</div>
          <div className="btn" onClick={this.btn11}>
            <div className="btn-line">A</div>
            <div className="btn-line">B</div>
          </div>
          <div className="btn" onClick={this.btn12}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
          </div>
          <div className="btn" onClick={this.btn13}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
            <div className="btn-line"><div>D</div><div></div><div></div><div></div></div>
          </div>
          <div className="btn" onClick={this.btn14}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>B</div><div>C</div></div>
            <div className="btn-line"><div></div><div></div><div></div><div>D</div></div>
          </div>
          <div className="btn" onClick={this.btn15}>
            <div className="btn-line">A</div>
            <div className="btn-line"><div>C</div><div>B</div></div>
          </div>
        </div>
      </div>
    );
  }
}

class NodeA extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log('NodeA will mount');
  }

  componentDidMount() {
    console.log('NodeA did mout');
  }

  componentWillUpdate() {
    console.log('NodeA will update');
  }

  componentDidUpdate() {
    console.log('NodeA did update');
  }

  componentWillUnmount() {
    console.log('NodeA will unmount');
  }

  render() {
    console.log('NodeA render')
    return (
      <div className="container containerA">
        <div className="node-box">
          <div className="node">A</div>
        </div>
        {this.props.child && this.props.child}
      </div>
    )
  }
}

class NodeB extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  componentWillMount() {
    console.log('NodeB will mount');
  }

  componentDidMount() {
    console.log('NodeB did mout');
  }

  componentWillUpdate() {
    console.log('NodeB will update');
  }

  componentDidUpdate() {
    console.log('NodeB did update');
  }

  componentWillUnmount() {
    console.log('NodeB will unmount');
  }

  render() {
    console.log('NodeB render')
    return (
      <div className="container containerB">
        <div className="node-box">
          <div className="node">B</div>
        </div>
        {this.props.child && this.props.child}
      </div>
    )
  }
}

class NodeC extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  componentWillMount() {
    console.log('NodeC will mount');
  }

  componentDidMount() {
    console.log('NodeC did mout');
  }

  componentWillUpdate() {
    console.log('NodeC will update');
  }

  componentDidUpdate() {
    console.log('NodeC did update');
  }

  componentWillUnmount() {
    console.log('NodeC will unmount');
  }

  render() {
    console.log('NodeC render');
    return (
      <div className="container containerC">
        <div className="node-box">
          <div className="node">C</div>
        </div>
        {this.props.child && this.props.child}
      </div>
    )
  }
}

class NodeD extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  componentWillMount() {
    console.log('NodeD will mount');
  }

  componentDidMount() {
    console.log('NodeD did mout');
  }

  componentWillUpdate() {
    console.log('NodeD will update');
  }

  componentDidUpdate() {
    console.log('NodeD did update');
  }

  componentWillUnmount() {
    console.log('NodeD will unmount');
  }

  render() {
    console.log('NodeD render')
    return (
      <div className="container containerD">
        <div className="node-box">
          <div className="node">D</div>
        </div>
        {this.props.child && this.props.child}
      </div>
    )
  }
}

class NodeE extends React.Component {
  render() {
    return (
      <div className="container containerE">
        <div className="node-box">
          <div className="node">E</div>
        </div>
        {this.props.child && this.props.child}
      </div>
    )
  }
}