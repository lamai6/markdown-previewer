import { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import defaultMarkdown from './App.markdown';
import './App.styles.scss';

const components = {
  code({ inline, className, children }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className}>{children}</code>
    );
  },
};

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
      <div>
        <div id="header">
          <h2>
            <FontAwesomeIcon
              icon={solid('pen-to-square')}
              style={{ marginRight: '0.4em' }}
            />
            Editor
          </h2>
          <h2>
            <FontAwesomeIcon
              icon={solid('eye')}
              style={{ marginRight: '0.4em' }}
            />
            Previewer
          </h2>
        </div>
        <div id="container">
          <textarea
            onChange={this.handleChange}
            value={markdown}
            name="editor"
            id="editor"
          />
          <div id="preview">
            <ReactMarkdown
              remarkPlugins={[remarkBreaks, remarkGfm]}
              components={components}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
