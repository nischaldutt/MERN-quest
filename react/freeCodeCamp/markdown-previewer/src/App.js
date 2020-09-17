import React from 'react'
import marked from 'marked'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import './App.css'

const defaultInput = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)

`

marked.setOptions({
  breaks: true,
});

const Previewer = (props) => {
  return (
    <div id='previewWrap'>
      <div id='previewHeader'>
        <FontAwesomeIcon className='brand' icon={faFreeCodeCamp} size='lg' />
        Markdown Previewer
      </div>
      <div id='preview' dangerouslySetInnerHTML={{__html: props.output}}></div>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: defaultInput,
      output: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.handleChange()
  }

  handleChange(event) {
    let inputText = ''
    if(!event) 
      inputText = this.state.input
    else
      inputText = event.target.value
    this.setState({
      input: inputText,
      output: marked(inputText),
    })
  }

  render() {
    return (
      <div id='wrapper'>
        <div id='editWrap'>
          <div id='editHeader'>
            <FontAwesomeIcon className='brand' icon={faFreeCodeCamp} size='lg' />
            Editor
          </div>
          <textarea id='editor' name='editor' value={this.state.input} onChange={this.handleChange}></textarea>
        </div>
        <Previewer output={this.state.output} />
      </div>
    )
  }
}

export default App;
