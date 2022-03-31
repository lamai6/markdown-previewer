import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeAll(() => {
  global.markdown = `
      # I am a heading element

      ## I am a sub heading element

      [I am a link](https://github.com/lamai6/markdown-previewer)

      I am a ~inline code~

      ~~~js
      console.log('I am a line of code')
      ~~~

      - I am a list item
      - Me too
      - **I am a bolded list item**

      > I am a blockquote

      ![I am an image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
});

afterAll(() => {
  global.markdown = undefined;
});

describe('App component tests', () => {
  it('should render a textarea element with a corresponding id="editor" (US #1)', () => {
    const { getByRole } = render(<App />);
    const textarea = getByRole('textbox');

    expect(textarea).toBeInTheDocument();
  });

  it('should render an element with a corresponding id="preview" (US #2)', () => {
    const { container } = render(<App />);
    const markdownPreview = container.querySelector('p[id=preview]');

    expect(markdownPreview).toBeInTheDocument();
  });

  it('should update preview section when entering text into editor section (US #3)', () => {
    const { container, getByRole } = render(<App />);
    const textarea = getByRole('textbox');
    const markdownPreview = container.querySelector('p[id=preview]');

    expect(markdownPreview).toHaveTextContent('');

    fireEvent.change(textarea, {
      target: { value: '# Here is a markdown heading !' },
    });

    expect(markdownPreview).toHaveTextContent('# Here is a markdown heading !');
  });

  it('should render markdown as HTML in preview section when entering markdown into editor section (US #4)', () => {
    const { container, getByRole } = render(<App />);
    const textarea = getByRole('textbox');
    const markdownPreview = container.querySelector('p[id=preview]');

    fireEvent.change(textarea, {
      target: { value: global.markdown },
    });

    expect(markdownPreview.children).toHaveLength(8);
  });

  it('should contain valid markdown in editor section on page load (US #5)', () => {
    const { getByRole } = render(<App />);
    const textarea = getByRole('textbox');

    expect(textarea).toHaveTextContent(global.markdown);
  });

  it('should render markdown as HTML in preview section on page load (US #6)', () => {
    const { container } = render(<App />);
    const markdownPreview = container.querySelector('p[id=preview]');

    expect(markdownPreview.children).toHaveLength(8);
  });

  it('should interpret carriage returns and renders them as <br /> elements (US #7)', () => {
    const { container } = render(<App />);
    const markdownPreview = container.querySelectorAll('br');

    expect(markdownPreview).toHaveLength(7);
  });
});
