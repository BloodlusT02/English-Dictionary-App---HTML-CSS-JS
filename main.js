// Get references to HTML elements
const inputEl = document.getElementById("input");
const titleEl = document.getElementById("title");
const infoTextTl = document.getElementById("infoText");
const meaningEl = document.getElementById("meaning");
const meaningConatinerEl = document.getElementById("meaningConatiner");
const audioEl = document.getElementById("audio");

// Function to fetch word data from DictionaryAPI
async function fetchAPI(word) {
  // Display search information while fetching data
  infoTextTl.style.display = "block";
  meaningConatinerEl.style.display = "none";
  infoTextTl.innerHTML = `Searching meaning of "${word}"`;

  try {
    // Fetch word data from DictionaryAPI
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((res) => {
      return res.json();
    });

    // Check if the word is not available in the API response
    if (result.title) {
      // Display appropriate message when the word is not available
      meaningConatinerEl.style.display = "block";
      infoTextTl.style.display = "none";
      titleEl.textContent = word;
      meaningEl.textContent = "Not Available";
      audioEl.style.display = "none";
    } else {
      // Display word information when available
      infoTextTl.style.display = "none";
      meaningConatinerEl.style.display = "block";
      audioEl.style.display = "inline-flex";

      // Populate HTML elements with word information
      titleEl.textContent = result[0].word;
      meaningEl.textContent =
        result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }

    // Hide audio element if audio source is not available
    if (result[0].phonetics[0].audio === "") {
      audioEl.style.display = "none";
    }

  } catch (error) {
    // Display error message if there is an issue with the API
    infoTextTl.innerHTML = "Something went wrong, please try again later";
  }
}

// Event listener to trigger the API call when Enter key is pressed
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    // Call fetchAPI function with the entered word
    fetchAPI(e.target.value);
  }
});
