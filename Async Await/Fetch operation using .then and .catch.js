function fetchUserData(url) {
  fetch(url) // We start by calling the fetch function, which returns a Promise.
    .then((response) => {
      // We use .then() to handle the successful response.
      return response.json(); // If the response was successful, we return the parsed JSON data using response.json(), which itself returns a Promise.
    })
    .then((data) => {
      // We chain another .then() to handle the parsed JSON data.
      console.log(data);
    })
    .catch((error) => {
      // Finally, we use .catch() to handle any errors that might occur during the fetch or the parsing process.
      console.error("Error fetching data:", error);
    });
}

fetchUserData("https://api.example.com/users"); //
