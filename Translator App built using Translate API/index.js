let translatedTextP = document.getElementById("translated-text");
async function translateText() {
  try {
    let input = document.getElementById("input-text").value;
    console.log(input);
    let res = await fetch(`https://libretranslate.de/translate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: input,
        source: "en",
        target: "hi",
        format: "text",
      }),
    });

    let data = await res.json();
    displayData(data, translatedTextP);
  } catch (err) {
    console.log(err);
  }
}

function displayData(data, parent) {
  parent.textContent = data.translatedText;
}
