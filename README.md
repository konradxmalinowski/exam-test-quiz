# JavaScript Quiz Application

An engaging and interactive web-based quiz application designed to test your knowledge of **JavaScript**, **React**, and **jQuery** concepts. The quiz dynamically fetches questions from a JSON file and provides an intuitive user experience with automatic scoring.



## Features

**Dynamic Question Generation**  
Randomly selects questions from a JSON file to keep the quiz engaging.

**Immediate Feedback**  
Highlights correct and incorrect answers with visually appealing color-coded feedback:  
- **Green** for correct answers.  
- **Red** for incorrect answers.

**Responsive Design**  
Adapts to various screen sizes, ensuring usability on both desktop and mobile devices.

**Interactive UI**  
A clean and intuitive interface with a "Generate Question" button to start or refresh the quiz.

**Multilingual Support**  
Includes questions in both **English** and **Polish** for broader accessibility.

**Extensive Question Bank**  
Covers a wide range of topics, including **JavaScript fundamentals**, **React**, and **jQuery**.



## Technologies

- **HTML5**: For structuring the web page.  
- **CSS3**: For styling, including responsive design.  
- **JavaScript (ES6+)**: For application logic and DOM manipulation.  
- **JSON**: For storing and retrieving quiz questions.  
- **Google Fonts**: Includes the **Lato** font for modern and readable typography.



## How to Run the Project Locally?

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/konradxmalinowski/exam-test-quiz.git
   cd exam-test-quiz
   ```

2. **Install Dependencies**  
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Serve the Application**  
   Use a local server to serve the files (e.g., `live-server`):  
   ```bash
   npm install -g live-server
   live-server
   ```
   Alternatively, open `index.html` directly in your browser. Note: Some features may require a server due to browser restrictions.

The application will be available at: [http://localhost:8080](http://localhost:8080)



## Project Structure

```
exam-test-quiz/
├── index.html          # Main HTML file
├── style.css           # CSS styles for the application
├── app.js              # JavaScript logic for quiz functionality
├── quiz-questions.json # JSON file containing quiz questions
├── package.json        # Node.js configuration file
└── README.md           # Project documentation
```

- **`index.html`**: Defines the quiz interface structure.  
- **`style.css`**: Styles the layout, colors, and responsiveness using CSS variables.  
- **`app.js`**: Handles fetching questions, generating random questions, and checking answer correctness.  
- **`quiz-questions.json`**: Stores the question bank with fields for question text, answer options, and correct answers.  
- **`package.json`**: Specifies the project configuration.



## Contributing

Contributions are welcome! Here's how you can help:  

1. **Fork the Repository**  
2. **Create a New Branch**  
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Changes & Commit**  
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push Changes**  
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a Pull Request**  
   Open a pull request with a descriptive summary of your changes.

Please ensure your code adheres to the existing style and includes appropriate tests.

## Contact

For any inquiries or feedback:
 **Email**: [malinowski.konrad45@gmail.com](mailto:malinowski.konrad45@gmail.com)
