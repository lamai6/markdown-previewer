import { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import defaultMarkdown from './App.markdown';
import './App.styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown,
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
        <textarea
          onChange={this.handleChange}
          value={markdown}
          name="editor"
          id="editor"
        />
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default App;
