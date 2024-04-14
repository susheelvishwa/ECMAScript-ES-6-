// index.js
async function login() {
  try {
    let emailInputValue = document.getElementById("email-input").value;
    let passwordInputValue = document.getElementById("password-input").value;

    const loginDetails = {
      email: emailInputValue,
      password: passwordInputValue,
    };

    let res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let responseObject = await res.json();

    displayToken(responseObject);
  } catch (error) {
    console.log(error);
  }
}

function displayToken({ token }) {
  let tokenDisplay = document.getElementById("token-display");
  let tokenElement = document.createElement("h3");
  tokenElement.textContent = `Token : ${token}`;
  tokenDisplay.append(tokenElement);
}
