import React from 'react';
import './App.scss';

const activeStyle = {
  backgroundColor: '#C14545',
}
const inActiveStyle = {
  backgroundColor: '#c65554',
}

class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.playSound = this.playSound.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.clickEffect = this.clickEffect.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  clickEffect() {
    this.setState({
      isActive: true,
    })

    if(this.state.isActive) {
      this.setState({
        padStyle: activeStyle,
        isActive: false,
      })
    }
    else {
      this.setState({
        padStyle: inActiveStyle,
        isActive: true,
      })
    }
  }

  playSound() {
    this.clickEffect()
    setTimeout(() => this.clickEffect(), 100)
    const audio = document.getElementById(this.props.keyTrigger)
    audio.currentTime = 0
    audio.play() 
    this.props.updateDisplay(this.props.keyId)
  }

  handleKeyPress(e) {
    if(e.keyCode === this.props.keyCode) {
      this.playSound()
    }
  }

  render() {
    return (
      <div id = {this.props.keyId} className = 'drum-pad' 
      style = {this.state.padStyle} 
        onClick = {this.playSound} 
        onKeyDown = {this.handleKeyPress} >
        <audio 
          className = 'clip' 
          id = {this.props.keyTrigger} 
          src = {this.props.url} >
        </audio>
        {this.props.keyTrigger}
      </div>
    )
  }
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div id = 'keyboard'>
        {this.props.appState.currentMode.map((padObj) => {
          return (
            <div key = {padObj.keyCode + 'key'}>
              <Pad  
                keyId = {padObj.id}
                keyCode = {padObj.keyCode}
                keyTrigger = {padObj.keyTrigger}
                url = {padObj.url} 
                updateDisplay = {this.props.updateDisplay} />
            </div>
          )
        })}
      </div>
    )
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.updateDisplay = this.updateDisplay.bind(this)
  }

  updateDisplay() {
    console.log('here')
  }

  render() {
    return (
      <div id = 'display'>
        <div id = 'currKeyDiv'>{this.props.appState.displayKey}</div>
        <div id = 'currModeDiv'>{this.props.appState.displayMode}</div>
        <div id = 'volumeSlider'>
          <input type = 'range' min = '0' max = '1' step = '0.01'
            value = {this.props.appState.volume} 
            onChange = {this.props.updateVolume} />
            {this.props.appState.volumeText}
        </div>
        <div id = 'slider' onClick = {this.props.updateMode}>
          <div id = 'mode' style={this.props.style}></div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      currentMode: drums,
      displayKey: 'Press any key',
      displayMode: 'Heater Kit',
      volume: 0.5,
      volumeText: `Volume: 50`,
    }
    
    this.updateMode = this.updateMode.bind(this)
    this.displayKey = this.displayKey.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
  }

  updateMode() {
    if(this.state.displayMode === 'Heater Kit') {
      this.setState({
        currentMode: synth,
        displayKey: 'Press any key',
        displayMode: 'Smooth Piano Kit', 
      })
    }
    else {
      this.setState({
        currentMode: drums,
        displayKey: 'Press any key',
        displayMode: 'Heater Kit',
      })
    }
  }

  displayKey(name) {
    this.setState({
      displayKey: name,
    })
  }

  updateVolume(e) {
    this.setState({
      volume: e.target.value,
      volumeText: `Volume: ${Math.round(this.state.volume * 100)}`,
    })

    const clips = [].slice.call(document.getElementsByClassName('clip'))
    clips.forEach(audio => {
      return audio.volume = this.state.volume
    });
  }

  render() {
    const modeSlider = this.state.currentMode === drums ?
      { float: 'left', } : 
      { float: 'right', }
    
    return (
      <div id='drum-machine'>
        <Keyboard 
          appState = {this.state} 
          updateDisplay = {this.displayKey} />

        <Display 
          appState = {this.state} 
          style = {modeSlider}
          updateMode = {this.updateMode} 
          updateVolume = {this.updateVolume} />
      </div>
    )
  }
}

export default App;

const drums = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const synth = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];
