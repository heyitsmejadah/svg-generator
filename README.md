# SVG Generator

### About:
This application takes in user input and creates 

### User Story:
AS a freelance web developer<br>
I WANT to generate a simple logo for my projects<br>
SO THAT I don't have to pay a graphic designer<br>

### With acceptance criteria that is as follows: 

GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for text<br>
THEN I can enter up to three characters<br>
WHEN I am prompted for the text color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I am prompted for a shape<br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square<br>
WHEN I am prompted for the shape's color<br>
THEN I can enter a color keyword (OR a hexadecimal number)<br>
WHEN I have entered input for all the prompts<br>
THEN an SVG file is created named `logo.svg`<br>
AND the output text "Generated logo.svg" is printed in the command line<br>
WHEN I open the `logo.svg` file in a browser<br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered<br>

### Prerequisites:
Must run "npm install" to install inquirer.
The application will be invked by running "node index.js"

### Appearance: