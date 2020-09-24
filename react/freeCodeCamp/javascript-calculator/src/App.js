import React from 'react'
import './App.scss'

const endsWithOperator = /[*+-/]$/

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id = 'displayPad'>
        <div id = 'exp'>{this.props.exp}</div>
        <div id = 'display'>{this.props.currInput}</div>
      </div>
    )
  }
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div id = 'Keyboard'>
        <button id = 'clear' onClick = {this.props.reset}>AC</button>
        <button id = 'divide' className = 'operator' value = {'/'} onClick = {this.props.enterOperator}>/</button>
        <button id = 'multiply' className = 'operator' value = {'*'} onClick = {this.props.enterOperator}>X</button>
        <button id = 'subtract' className = 'operator' value = {'-'} onClick = {this.props.enterOperator}>-</button>
        <button id = 'add' className = 'operator' value = {'+'} onClick = {this.props.enterOperator}>+</button>
        <button id = 'equals' value = {'='} onClick = {this.props.evaluate}>=</button>
        <button id = 'decimal' value = {'.'} onClick = {this.props.enterDecimal}>.</button>
        {this.props.digits.map((digObj) => {
          return <button key = {digObj.keyId} 
            id = {digObj.keyId} className = 'digit'
            onClick = {this.props.enterNumber}
            value = {digObj.value} >
            {digObj.value}
          </button>
        })}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currInput: '0',
      expression: '',
      result: '',
      decimalExists: false,
      isEvaluated: false,
    }
    this.enterNumber = this.enterNumber.bind(this)
    this.enterOperator = this.enterOperator.bind(this)
    this.enterDecimal = this.enterDecimal.bind(this)
    this.evaluate = this.evaluate.bind(this)
    this.reset = this.reset.bind(this)
    this.isOperator = this.isOperator.bind(this)
  }

  isOperator(operator) {
    return (operator === '+' || operator === '-' || operator === '*' || operator === '/') ?
      true : false
  }

  enterNumber(e) {
    const digit = String(e.target.value)

    if(this.state.currInput === '0') {
      return this.setState({ 
        currInput: digit,
        expression: digit,
        result: '',
        isEvaluated: false,
      })
    }
    else if(this.state.currInput !== '0') {
      // check if currentInput is an operator
      if(this.isOperator(this.state.currInput)) {
        return this.setState({
          currInput: digit,
          expression: this.state.expression + digit,
          result: '',
          isEvaluated: false,
        })
      } 
      // else if currentInput is some number
      else { 
        // if expression is already evaluated
        if(this.state.isEvaluated) {
          return this.setState({
            currInput: digit,
            expression: digit,
            result: '',
            decimalExists: false,
            isEvaluated: false,
          })
        }
        // if expression is not evaluated
        else {
          return this.setState({
            currInput: this.state.currInput + digit,
            expression: this.state.expression + digit,
            result: '',
            isEvaluated: false,
          })
        }
      }
    }
  }

  enterOperator(e) { 
    const operator = e.target.value 
    
    // if result is already set to sum value
    if(this.state.result !== '') {
      return this.setState({
        expression: this.state.result + operator,
        result: '',
        currInput: operator,
        isEvaluated: false,
        decimalExists: false,
      })
    }
    // if result is nothing
    else {
      // if currentInput is an operator
      if(this.isOperator(this.state.currInput)) {
        // remove last 2 operators if operator is not '-'
        if(this.state.currInput === '-' && operator !== '-') {
          const len = this.state.expression.length
          return this.setState({
            expression: this.state.expression.substring(0, len - 2) + operator,
            currInput: operator,
            result: '',
            isEvaluated: false,
            decimalExists: false,
          })
        }

        if(operator === '-') {
          if(this.state.currInput === '-') {
            // if previous and current operators are both '-'
            return 
          }
          else {
            // if previous is not '-' but operator is
            return this.setState({
              expression: this.state.expression + operator,
              currInput: operator,
              result: '',
              isEvaluated: false,
              decimalExists: false,
            })
          }
        }
        // if operator is not '-' 
        else {
          return this.setState({
            currInput: operator,
            expression: this.state.expression.replace(/.$/, operator),
            result: '',
            isEvaluated: false,
            decimalExists: false,
          })
        }
      }
      // else if currentInput is a number
      else {
        this.setState({
          expression: this.state.expression + operator,
          currInput: operator,
          result: '',
          isEvaluated: false,
          decimalExists: false,
        })
      }
    }
  }

  enterDecimal() {
    // if decimal is at beginning of the expression
    if(this.state.isEvaluated || this.state.expression === '') {
      this.setState({
        currInput: '0.',
        expression: '0.',
        result: '',
        isEvaluated: false,
      })
    }
    else if(!this.state.decimalExists && !this.state.currInput.includes('Limits')) {
      this.setState({
        decimalExists: true,
        currInput: this.state.currInput + '.',
        expression: this.state.expression + '.',
        result: '',
        isEvaluated: false,
      })
    }
  }

  evaluate() {
    let formula = this.state.expression
    if(!formula) {
      return
    }

    while(endsWithOperator.test(formula)) {
      formula = formula.slice(0, -1)
    }

    const res = Math.round(1000000000000 * eval(formula)) / 1000000000000
    this.setState(state => ({
      currInput: res,
      expression: state.expression + '=' + res,
      result: res,
      isEvaluated: true,
    }))
  }

  reset() {
    this.setState({
      currInput: '0',
      expression: '',
      result: '',
      decimalExists: false,
      isEvaluated: false,
    })
  }

  render() {
    return (
      <div id = 'calculator'>
        <Display exp = {this.state.expression}
          currInput = {this.state.currInput} />

        <Keyboard digits = {digits}
          appState = {this.state} 
          enterNumber = {this.enterNumber}
          enterOperator = {this.enterOperator}
          evaluate = {this.evaluate} 
          enterDecimal = {this.enterDecimal}
          reset = {this.reset} />
      </div>
    )
  }
}

export default App

const digits = [
  {
    keyId: 'zero',
    value: 0,
  },
  {
    keyId: 'one',
    value: 1,
  },
  {
    keyId: 'two',
    value: 2,
  },
  {
    keyId: 'three',
    value: 3,
  },
  {
    keyId: 'four',
    value: 4,
  },
  {
    keyId: 'five',
    value: 5,
  },
  {
    keyId: 'six',
    value: 6,
  },
  {
    keyId: 'seven',
    value: 7,
  },
  {
    keyId: 'eight',
    value: 8,
  },
  {
    keyId: 'nine',
    value: 9,
  }
]