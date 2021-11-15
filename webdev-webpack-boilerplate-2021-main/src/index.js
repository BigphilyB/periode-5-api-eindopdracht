// console.log("test complete!");

// const container = document.getElementById("container");
// const div = document.createElement("div");

// div.innerHTML = "this boilerplate is ready for action!";
// div.style.fontSize = "48px";
// div.style.color = "red";
// div.style.backgroundColor = "black";

// container.appendChild(div);


const token = 'wYcgiuXTHxSTYP1GkR0IpL3Gad0QwY4z2AfxRMVwe5z4IUI5wZIIGb9wHImTACeYMHmOeqm6XNwcW0dD'
const url = 'https://www.nytimes.com/'

const requestUrl = `https://api.opengraphr.com/v1/og?api_token=${token}&url=${encodeURIComponent(url)}`
fetch(requestUrl)
    .then(response => response.json())
    .then(og => {
        console.table(og)
        document.getElementById("title").innerHTML = og.title;
        document.getElementById("image").src = og.image;
        document.getElementById("description").innerHTML = og.description;
    })
    