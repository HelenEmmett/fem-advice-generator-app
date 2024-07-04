let adviceContainer = document.getElementById("advice-container");
let adviceNum = document.getElementById("advice-heading");
let adviceTxt = document.getElementById("advice");
let button = document.getElementById("dice");

// add event listener to the dice button, and generate random advice
button.addEventListener("click", () => {
    adviceNum.style.opacity = 0;
    adviceTxt.style.opacity = 0;

    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the retrieved user data
        adviceNum.innerText = `ADVICE #${data.slip.id}`;
        adviceTxt.innerText = `"${data.slip.advice}"`;
        adviceNum.style.opacity = 1;
        adviceTxt.style.opacity = 1;
      })
      .catch(error => {
        console.error('Error:', error);
      });
})
