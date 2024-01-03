const inputEl = document.getElementById("input");
const titleEl = document.getElementById("title");
const infoTextTl = document.getElementById("infoText");
const meaningEl = document.getElementById("meaning");
const meaningConatinerEl = document.getElementById("meaningConatiner");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
  infoTextTl.style.display = "block";
  meaningConatinerEl.style.display = "none";
  infoTextTl.innerHTML = `Searching meaning of "${word}"`;
  try {
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((res) => {
      return res.json();
    });


    if (result.title) {
      meaningConatinerEl.style.display = "block";
      infoTextTl.style.display = "none";
      titleEl.textContent = word;
      meaningEl.textContent = "Not Available";
      audioEl.style.display = "none";
    } else {
      infoTextTl.style.display = "none";
      meaningConatinerEl.style.display = "block";
      audioEl.style.display = "inline-flex";

      titleEl.textContent = result[0].word;
      meaningEl.textContent = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }

    if(result[0].phonetics[0].audio === ""){
        audioEl.style.display = "none";
    }

  } catch (error) {
    infoTextTl.innerHTML = "Something went wrong, please try again later";
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
