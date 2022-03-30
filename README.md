# Front End Development Certification (FreeCodeCamp) - Exam 2/5

## Explanation

I have to create 5 projects in order to earn the Front End Development certification delivered by FreeCodeCamp. This repository is the second one : Markdown Previewer. I used [my own React boilerplate](https://github.com/lamai6/react-app-starter) to start creating this application. You can [run it](https://github.com/lamai6/markdown-previewer#quick-start), [view the demo](https://lamai6.github.io/markdown-previewer) or [read the specifications](https://github.com/lamai6/markdown-previewer#specifications) the app must meet.

## Quick start

1. Make sure that you have Node.js v12 and npm v5 or above installed
2. Clone this repo using git clone: `git clone git@github.com:lamai6/markdown-previewer.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`
4. Run `npm install` in order to install dependencies
5. At this point you can run `npm start` to see the React app at http://localhost:8080

## Specifications

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/GrZVVO.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks.

User Story #1: I can see a textarea element with a corresponding id="editor".

User Story #2: I can see an element with a corresponding id="preview".

User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

## Exam validation

To ensure this project meets the specifications, FreeCodeCamp has a script that automatically run its own tests. You can run these tests following these steps:
- start the app or go to the project [demo](https://lamai6.github.io/markdown-previewer)
- click on the side menu at the top left of the page
- select the "Markdown Previewer" project from the drop-down menu
- click on "Run Tests" button