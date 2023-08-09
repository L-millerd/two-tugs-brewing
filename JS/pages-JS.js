let x = document.getElementById('banner');
let y = document.querySelector('.subpage-banner__bg-img')

if (x.classList.contains('story')){
    y.style.backgroundImage = 'url(images/cheers.jpg)';
}
if (x.classList.contains('brews')){
    y.style.backgroundImage = 'url(images/theBrews.jpg)';
}