import React from 'react'
import styled from 'styled-components'
import Button from 'muicss/lib/react/button'
import config from '../../config'

const Wrapper = styled.div`
  color: ${config.color.text};
  text-align: center;
`

const TimerCell = styled.h2`
  font-size: 1.6em;
  margin-top: 0;
  margin-bottom: 0;
`

function Cell(props) {
  return (
    <TimerCell>{props.start} - {props.end} {props.interval}</TimerCell>
  )
}

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      history: [],
      counting: false,
      start: 1,
      end: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      counting: !this.state.counting
    })
  }

  render() {
    const raps = this.state.history.map((element, index) => {
      return(
        <li key={index}>
          <TimerCell>{element}</TimerCell>
        </li>
      )
    })

    return (
      <Wrapper>
        <Button size="large" onClick={this.handleClick}>
          {this.state.counting ? 'Stop' : 'Start'}
        </Button>
        <ol>{raps}</ol>
      </Wrapper>
    )
  }
}

export default Timer
