# JavaScript Quiz Application

A simple and interactive web-based quiz application designed to test knowledge of JavaScript, React, and jQuery concepts. The quiz fetches questions from a JSON file, displays them dynamically, and provides immediate feedback on the user's answers. The application features a clean, responsive design and is easy to use, making it suitable for both learning and self-assessment.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Dynamic Question Generation**: Randomly selects questions from a JSON file to keep the quiz engaging.
- **Immediate Feedback**: Highlights correct and incorrect answers with color-coded visual feedback.
- **Responsive Design**: Adapts to various screen sizes, ensuring usability on both desktop and mobile devices.
- **Interactive UI**: Clean and intuitive interface with a "Generate Question" button to start or refresh the quiz.
- **Multilingual Support**: Includes questions in both English and Polish for broader accessibility.
- **Extensive Question Bank**: Covers a wide range of topics, including JavaScript fundamentals, React, and jQuery.

## Technologies

- **HTML5**: For structuring the web page.
- **CSS3**: For styling, including responsive design with media queries and CSS variables.
- **JavaScript (ES6+)**: For application logic, including asynchronous data fetching and DOM manipulation.
- **JSON**: For storing and retrieving quiz questions.
- **Google Fonts**: Uses the Lato font for a modern and readable typography.

## Installation

To run the quiz application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/javascript-quiz-app.git
   cd javascript-quiz-app
   ```

2. **Install Dependencies**:
   The project uses Node.js modules. Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Serve the Application**:
   Use a local server to serve the files (e.g., `live-server` or any static file server):
   ```bash
   npm install -g live-server
   live-server
   ```
   Alternatively, you can open `index.html` directly in a browser, but some features (like fetching the JSON file) may require a server due to CORS restrictions.

## Usage

1. Open the application in a web browser.
2. Click the **Generate Question** button to display a random question.
3. Select an answer by clicking one of the provided options (A or B).
4. The selected answer will be highlighted:
   - **Green** for correct answers.
   - **Red** for incorrect answers.
5. Click **Generate Question** again to load a new question.

The quiz tracks the current question number and the total number of questions, displayed above the question.

## Project Structure

```
javascript-quiz-app/
├── index.html          # Main HTML file
├── style.css           # CSS styles for the application
├── app.js              # JavaScript logic for quiz functionality
├── quiz-questions.json # JSON file containing quiz questions
├── package.json        # Node.js configuration file
└── README.md           # Project documentation
```

- **`index.html`**: Defines the structure of the quiz interface, including the question display, answer options, and generate button.
- **`style.css`**: Contains styles for layout, colors, and responsiveness, using CSS variables for consistent theming.
- **`app.js`**: Handles fetching questions, generating random questions, updating the UI, and checking answer correctness.
- **`quiz-questions.json`**: Stores the question bank with fields for question text, answer options, and correct answers.
- **`package.json`**: Specifies the project as an ES module for modern JavaScript syntax.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit them with a descriptive message:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request with a clear description of your changes.

Please ensure your code follows the existing style and includes appropriate tests if applicable.

## Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [konradxmalinowski](https://github.com/konradxmalinowski)
- **Email**: malinowski.konrad45@gmail.com

Happy quizzing! 🚀
