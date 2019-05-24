"use strict";
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open(
    "GET", "http://localhost:3000/booktitles"
);
httpRequest.onload = (data) => {
    // data = JSON.parse(httpRequest.responseText);
    let titles = JSON.parse(data.target.response);
    console.log(titles)
    for (let i = 0; i < titles.length; i++) {
        let element = document.createElement('li');
        element.innerText = titles[i].book_name;
        document.getElementsByClassName('container')[0].appendChild(element);
    }
}

httpRequest.send();