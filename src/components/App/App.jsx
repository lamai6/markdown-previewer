import { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './App.styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const markdown = e.target.value;
    this.setState({ markdown });
  }

  render() {
    const { markdown } = this.state;
    return (
      <div id="container">
        <textarea onChange={this.handleChange} name="editor" id="editor" />
        <p id="preview">{markdown}</p>
      </div>
    );
  }
}

export default App;
