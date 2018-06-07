import ShadowDOM from 'react-shadow';
import styled from 'styled-components';
import React, { Component } from 'react';


const stuff = [];
for(let i = 0; i < 999; i++) {
  const moreStuff = ['hello', 'world', 'hello', 'world', 'hello', 'world', 'hello', 'world', 'hello', 'world', 'hello', 'world']
  stuff.push(moreStuff)
}

const Foo = styled.div`
  color: red;
  background-color: green;
  font-size: 12.123132px;
  position: relative;
  display: flex;
`

const Bar = styled.div`
  color: red;
  background-color: green;
  font-size: 12.123132px;
  position: relative;
  display: flex;
`

class App extends Component {
  constructor() {
    super();
    this.state = { 
      style: ''
    }
  }
  render() {
    return (
      <div>
        <div className="bar">
          <button onClick={() => this.setState({style: 'shadow'})}>Shadow</button>
          <button onClick={() => this.setState({style: 'styled'})}>Styled</button>
          <button onClick={() => this.setState({style: 'normal'})}>normal</button>
        </div>
        {this.state.style === 'normal' && <div>
          <div>
          <style>{`.foo {
            color: red;
            background-color: green;
            font-size: 12.123132px;
            position: relative;
            display: flex;
          }

            .bar {
            color: red;
            background-color: green;
            font-size: 12.123132px;
            position: relative;
            display: flex;
            }`}</style>
            {stuff.map(moreStuff => (
              <div className="foo">
                ({moreStuff.map(thing => (<div className="bar">{thing}</div>))})
              </div>
            ))}
          </div>
        </div>}
        {this.state.style === 'shadow' && <div>
          <ShadowDOM include={[]}>
          <div>
          <style>{`.foo {
            color: red;
            background-color: green;
            font-size: 12.123132px;
            position: relative;
            display: flex;
          }

            .bar {
            color: red;
            background-color: green;
            font-size: 12.123132px;
            position: relative;
            display: flex;
            }`}</style>
            {stuff.map(moreStuff => (
              <div className="foo">
                ({moreStuff.map(thing => (<div className="bar">{thing}</div>))})
              </div>
            ))}
          </div>
          </ShadowDOM>
        </div>}
        {this.state.style === 'styled' && <div>
            {stuff.map(moreStuff => (
              <Foo>
                ({moreStuff.map(thing => (<Bar>{thing}</Bar>))})
              </Foo>
            ))}
        </div>}
      </div>
    );
  }
}

export default App;
