// fetch('https://api.politie.nl/v4/gezocht/nationaleopsporingslijst?language=nl&radius=5.0&maxnumberofitems=10&offset=10', {credentials: 'include'})
// .then(response => response.json())
// .then(data => console.log(data));

// // create the request instance
// const request = aeris.map();

// // set the map layers to include
// request.layers('flat,radar,counties,admin');

// // set the desired center coordinate and zoom level
// request.center('seattle,wa').zoom(8);

// // set the desired image size to 500x300 pixels
// request.size(500, 300);

// // perform the request and add the image to the DOM
// request.get().then((result) => {

//     // returned map image will be accessible on `result.image`
//     const target = document.createElement('div');
//     target.appendChild(result.image);
//     document.body.appendChild(target);
    
// });

fetch('https://api.aerisapi.com/airquality/closest?p=:auto&format=json&radius=25mi&limit=10&client_id=gbLdn86tk3K42FugYpjvk&client_secret=lKPuOruPdkQvbtrjMrigh5UKsNHP7N1SBf1oNBG5')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        if (!json.success) {
            console.log('Oh no!');
        } else {
            console.log(json);
        }
    })
    .catch((error) => {
        console.log('Oh no!');
    });