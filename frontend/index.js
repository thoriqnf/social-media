var x = document.getElementById("BTNPertanyaan");

x.addEventListener("click", print);

function print() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}
