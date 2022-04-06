import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';
import markdown from './App.markdown';

beforeAll(() => {
  global.markdown = markdown;
  global.setup = (component) => ({
    user: userEvent.setup(),
    ...render(component),
  });
});

afterAll(() => {
  global.markdown = undefined;
  global.setup = undefined;
});

describe('App component tests', () => {
  it('should render a textarea element with a corresponding id="editor" (US #1)', () => {
    const { getByRole } = render(<App />);
    const textarea = getByRole('textbox');

    expect(textarea).toBeInTheDocument();
  });

  it('should render an element with a corresponding id="preview" (US #2)', () => {
    const { container } = render(<App />);
    const markdownPreview = container.querySelector('div[id=preview]');

    expect(markdownPreview).toBeInTheDocument();
  });

  it('should update preview section when entering text into editor section (US #3)', async () => {
    const { container, getByRole } = render(<App />);
    const textarea = getByRole('textbox');

    fireEvent.change(textarea, {
      target: { value: '# Here is a markdown heading !' },
    });

    const heading = container.querySelector('h1');

    expect(heading).toHaveTextContent('Here is a markdown heading !');
  });

  it('should render markdown as HTML in preview section when entering markdown into editor section (US #4)', () => {
    const { container, getByRole } = render(<App />);
    const textarea = getByRole('textbox');
    const markdownPreview = container.querySelector('div[id=preview]');

    fireEvent.change(textarea, {
      target: { value: global.markdown },
    });

    expect(markdownPreview.children).toHaveLength(12);
  });

  it('should contain valid markdown in editor section on page load (US #5)', () => {
    const { getByRole } = render(<App />);
    const textarea = getByRole('textbox');
    const normalize = (text) =>
      text
        .replace(/(\n)/gm, '')
        .split(/#{1,6}/g)
        .filter(Boolean)
        .join(' ');

    expect(normalize(textarea.value)).toBe(normalize(global.markdown));
  });

  it('should render markdown as HTML in preview section on page load (US #6)', () => {
    const { container } = render(<App />);
    const markdownPreview = container.querySelector('div[id=preview]');

    expect(markdownPreview.children).toHaveLength(12);
  });

  it('should interpret carriage returns and renders them as <br /> elements (US #7)', async () => {
    const { user, container, getByRole } = global.setup(<App />);

    const textarea = getByRole('textbox');

    fireEvent.change(textarea, {
      target: { value: '' },
    });

    await user.click(textarea);
    await user.keyboard('This is the first sentence');
    await user.keyboard('[Enter]');
    await user.keyboard('This is the second sentence');
    await user.keyboard('[Enter]');
    await user.keyboard('This is the last sentence');

    const markdownPreview = container.querySelectorAll('br');

    expect(markdownPreview).toHaveLength(2);
  });
});
