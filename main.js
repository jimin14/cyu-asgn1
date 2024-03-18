//simple addition calc

// btn event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //input
    let number = document.getElementById("number-in").value;
    if (number == 0) {
        document.getElementById("output1").innerHTML = "positive / negative / zero : zero";
      } else if (number > 0) { 
        document.getElementById("output1").innerHTML = "positive / negative / zero : positive";
      } else {
        document.getElementById("output1").innerHTML = "positive / negative / zero : Negative";
      }

      if (number%2 == 0) {
        document.getElementById("output2").innerHTML = "even or add : even";
      } else {
        document.getElementById("output2").innerHTML = "even or add : odd";
      }
}