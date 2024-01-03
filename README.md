# English Dictionary Web App

# Overview
This web app is an interactive English dictionary that allows users to quickly retrieve definitions, synonyms, and pronunciation for a wide range of words. The application leverages the DictionaryAPI to fetch real-time data, providing users with accurate and up-to-date information.

# Features
Instant Search: Enter a word and get instant access to its definition.
Dynamic Content: The app displays detailed information about the word, including meanings and phonetics.
Audio Pronunciation: Listen to the correct pronunciation of the word.

# Technologies Used
HTML
CSS
JavaScript

# How to Use
Clone the repository to your local machine.

bash
Copy code
https://github.com/BloodlusT02/English-Dictionary-App---HTML-CSS-JS.git
Open the index.html file in a web browser.

Type a word in the input field and press Enter to fetch its meaning.

# Code Structure
The code is structured with JavaScript functions that interact with the DictionaryAPI to retrieve and display word information. Key elements include:

fetchAPI: Asynchronous function to fetch word data from the DictionaryAPI.
Event listener on the input field triggers the API call when the user presses Enter.
javascript
Copy code
// Include code snippets if needed
const inputEl = document.getElementById("input");
// ... (other variables)

// ... (fetchAPI function)

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

# Contributing
Feel free to contribute to the project by submitting bug reports, feature requests, or directly making pull requests.

License
This project is licensed under the MIT License.

Remember to replace placeholders such as your-username and your-dictionary-app with your actual GitHub username and repository name. If your project has additional features or dependencies, you may want to include more details in the README.

# License
This project is licensed under the MIT License.
