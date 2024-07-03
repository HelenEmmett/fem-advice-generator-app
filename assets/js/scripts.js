let adviceNum = document.getElementById("advice-num");
let adviceTxt = document.getElementById("advice-text");
let button = document.getElementById("dice");

// add event listener to the dice button, and generate random advice
button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the retrieved user data
        adviceNum.innerText = data.slip.id;
        adviceTxt.innerText = data.slip.advice;
      })
      .catch(error => {
        console.error('Error:', error);
      });
})
