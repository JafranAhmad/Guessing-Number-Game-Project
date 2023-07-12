let btn = document.getElementById("btn");
let showGuessN = document.getElementById("showGuessN");

let resultShow, generate, none;

function GuessNumber() {
  var input = document.getElementById("input").value;
  var pars = parseInt(input);

  generate = Math.floor(Math.random() * 15) + 1;

  if (input < 1 || input > 15) {

   alert("Please enter the input number between 1-15:🤗");

  } else if (generate > input) {

      none = document.getElementById("none").innerHTML = generate;
    resultShow = document.getElementById("result").innerHTML =
      "Your guess is too low!!😥";

  } else if (generate < input) {

   none = document.getElementById("none").innerHTML = generate;
    resultShow = document.getElementById("result").innerHTML =
      "Your guess is too High!!😮";

  } else if (input == generate) {

    none = document.getElementById("none").innerHTML = generate;
    resultShow = document.getElementById("result").innerHTML =
      "Congrat's You'r Win!!😍😍";

  } else if (input != pars) {

    resultShow = document.getElementById("result").innerHTML =
      "Plz enter Numeric value only!!😐";

  } else if (input == "") {

    none = document.getElementById("none");
  } else {
    console.log("heheh");
  }
}