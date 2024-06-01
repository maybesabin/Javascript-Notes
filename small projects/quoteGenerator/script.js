const quote = document.getElementById("quotes");
const author = document.getElementById("author");
const button = document.getElementById("getQuotes");
const url = "https://api.quotable.io/random";

let generateQuotes = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        quote.innerText = item.content;
        author.innerText = "~ " + item.author;
    });
};

window.addEventListener("load", generateQuotes);
button.addEventListener("click", generateQuotes);

