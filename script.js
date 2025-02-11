var paragraph = document.createElement("p");
paragraph.textContent = "New paragraph";
var container = document.getElementById("container");
var secondParagraph = document.getElementById("second");
container.insertBefore(paragraph,secondParagraph);