let x = document.getElementById('banner');
let y = document.querySelector('.subpage-banner__bg-img');
let z = document.querySelector('.split-content__img')

if (x.classList.contains('story')){
    y.style.backgroundImage = 'url(images/cheers.jpg)';
}
if (x.classList.contains('brews')){
    y.style.backgroundImage = 'url(images/theBrews.jpg)';
}

// if (x.classList.contains('story')){
//     z.style.backgroundImage = 'url(images/founders.jpg)';
//     console.log("hello");
// }
// if (x.classList.contains('page-banner__bg-img')){
//     z.style.backgroundImage = 'url(images/campfire.jpg)';
//     console.log("hello");
