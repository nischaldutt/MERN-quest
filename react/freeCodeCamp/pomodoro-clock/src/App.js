import React from 'react'
import accurateInterval from '../node_modules/accurate-interval'
import './App.scss';

class BreakPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id = 'breakPad'>
        <div id = 'break-label'>Break Length</div>
        <div id = 'breakControls'>
          <button id = 'break-decrement' value = {this.props.breakLength} onClick = {this.props.decrementLength}>-</button>
          <div id = 'break-length'>{this.props.breakLength}</div>
          <button id = 'break-increment' value = {this.props.breakLength} onClick = {this.props.incrementLength}>+</button>
        </div>
      </div>
    )
  }
}

class SessionPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id = 'sessionPad'>
        <div id = 'session-label'>Session Length</div>
        <div id = 'sessionControls'>
          <button id = 'session-decrement' value = {this.props.sessionLength} onClick = {this.props.decrementLength}>-</button>
          <div id = 'session-length'>{this.props.sessionLength}</div>
          <button id = 'session-increment' value = {this.props.sessionLength} onClick = {this.props.incrementLength}>+</button>
        </div>
      </div>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id = 'timer'>
        <div id = 'timerBlock'>
          <div id = 'timer-label'>{this.props.activeClock}</div>
          <div id = 'time-left'>{this.props.timeLeft}</div>
        </div>
      </div>
    )
  }
}

class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id = 'controls'>
        <button id = 'start_stop' onClick = {this.props.toggleButton}>{this.props.startStop}</button>
        <button id = 'reset' onClick ={this.props.resetTimer}>Reset</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerId: undefined,
      paused: true,
      startStop: 'Start',
      timeLeft: '25:00',
      activeClock: 'Session',
      isSessionRunning: false,
    }

    this.incrementLength = this.incrementLength.bind(this)
    this.decrementLength = this.decrementLength.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
    this.startSession = this.startSession.bind(this)
    this.pauseSession = this.pauseSession.bind(this)
    this.decrementTime = this.decrementTime.bind(this)
    this.clockify = this.clockify.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.switchClock = this.switchClock.bind(this)
    this.buzzer = this.buzzer.bind(this)
  }
  
  incrementLength(e) {
    if(!this.state.isSessionRunning) {
      const length = parseInt(e.target.value)
      if(length + 1 === 61) return

      return (e.target.id === 'break-increment') ? (
        this.setState({ 
          breakLength: (length + 1), 
          timer: (length + 1) * 60,
        })
      ) : (
        this.setState({ 
          sessionLength: (length + 1), 
          timer: (length + 1) * 60, 
        },() => this.clockify())
      );
    }
  }

  decrementLength(e) {
    if(!this.state.isSessionRunning) {
      const length = parseInt(e.target.value) 
      if(length - 1 === 0) return
      
      return (e.target.id === 'break-decrement') ? (
        this.setState({ 
          breakLength: (length - 1), 
          timer: (length - 1) * 60,
        })
      ) : (
        this.setState({ 
          sessionLength: (length - 1), 
          timer: (length - 1) * 60, 
        },() => this.clockify())
      );
    }
  }

  toggleButton() {
    return (this.state.paused) ? this.startSession() : this.pauseSession()
  }

  startSession() { 
    this.setState({ 
      timer: (this.state.timer !== 1500) ? this.state.timer : (this.state.sessionLength * 60),
      timerId: accurateInterval(() => {
        this.decrementTime()
      }, 1000),
      paused: false, 
      startStop: 'Pause',
      isSessionRunning: true,
    })
  }

  pauseSession() {
    this.setState({
      paused: true, 
      startStop: 'Resume', 
      timerId: this.state.timerId.clear()
    })
  }

  clockify() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer % 60;

    minutes = (minutes < 10) ? `0${minutes}` : minutes
    seconds = (seconds < 10) ? `0${seconds}` : seconds

    return this.setState({ timeLeft: minutes + ':' + seconds })
  }

  decrementTime() {
    if(this.state.timer - 1 < 0) {
      this.switchClock()
      this.decrementTime()
    }
    else {
      this.setState({ timer: (this.state.timer - 1) }, () => this.clockify())
    }
  }

  switchClock() {
    this.buzzer()
    if(this.state.activeClock === 'Session') {
      this.setState({
        timer: (this.state.breakLength * 60) + 1,
        activeClock: 'Break',
      })
    }
    else {
      this.setState({
        timer: (this.state.sessionLength * 60) + 1,
        activeClock: 'Session',
      })
    }
  }

  resetTimer() {
    if(this.state.timerId) {
      this.state.timerId.clear()
    }

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerId: undefined,
      paused: true,
      startStop: 'Start',
      timeLeft: '25:00',
      activeClock: 'Session',
      isSessionRunning: false,
    })

    this.audioBeep.pause()
    this.audioBeep.currentTime = 0
  }

  buzzer() {
    if(this.state.timer === 0) {
      this.audioBeep.play()
    }
  }

  render() {
    return (
      <div id = 'clock'>
        <div id = 'head'>25 + 5 Clock</div>

        <Timer activeClock = {this.state.activeClock} 
          timeLeft = {this.state.timeLeft}/>

        <Controls startStop = {this.state.startStop}
          toggleButton = {this.toggleButton} 
          resetTimer = {this.resetTimer} />

        <BreakPad breakLength = {this.state.breakLength} 
          incrementLength = {this.incrementLength}
          decrementLength = {this.decrementLength} />

        <SessionPad sessionLength = {this.state.sessionLength} 
          incrementLength = {this.incrementLength}
          decrementLength = {this.decrementLength} />

        <audio id = 'beep' preload = 'auto' 
          ref = {(audio) => { this.audioBeep = audio }}
          src = {beepSound} />
      </div>
    )
  }
}

const beepSound = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"

export default App;
