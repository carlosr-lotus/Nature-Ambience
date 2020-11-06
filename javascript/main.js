// Nature Name + Main Wallpaper
const wallpaper = document.querySelector('#background');
const natureName = document.querySelector('.nature-name');

// Day/Night buttons
const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');

// Previous/Next buttons
const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');

// Page Manager Array Selector
let arrayIndexObject = 0;

// Page Nature Data
const pageManager = [{
    name: 'Waterfall',
    morning: 'url(images/morning/waterfall-morning.jpg)',
    morningAudio: new Audio('audio/morning/waterfall-morning.mp3'),
    night: 'url(images/night/waterfall-night.jpg)',
    nightAudio: new Audio('audio/night/waterfall-night.mp3')
},{
    name: 'Beach',
    morning: 'url(images/morning/beach-morning.jpg)',
    morningAudio: new Audio('audio/morning/beach-morning.mp3'),
    night: 'url(images/night/beach-night.jpeg)',
    nightAudio: new Audio('audio/night/beach-night.mp3')
}];

// Previous/Next buttons EVENTS
prevBtn.addEventListener('click', () => {
    arrayIndexObject--;

    if (arrayIndexObject < 0) {
        arrayIndexObject = pageManager.length - 1;
        pageManager[0].nightAudio.pause();
        pageManager[0].nightAudio.currentTime = 0;
        pageManager[0].morningAudio.pause();
        pageManager[0].morningAudio.currentTime = 0;
    }

    wallpaper.style.transition = '2s';
    natureName.innerText = pageManager[arrayIndexObject].name;
    wallpaper.style.backgroundImage = pageManager[arrayIndexObject].morning;

    pageManager[arrayIndexObject+1].nightAudio.pause();
    pageManager[arrayIndexObject+1].nightAudio.currentTime = 0;
    pageManager[arrayIndexObject+1].morningAudio.pause();
    pageManager[arrayIndexObject+1].morningAudio.currentTime = 0;
});

nextBtn.addEventListener('click', () => {
    arrayIndexObject++;

    if(arrayIndexObject > pageManager.length - 1) {
        arrayIndexObject = 0;
        pageManager[pageManager.length-1].nightAudio.pause();
        pageManager[pageManager.length-1].nightAudio.currentTime = 0;
        pageManager[pageManager.length-1].morningAudio.pause();
        pageManager[pageManager.length-1].morningAudio.currentTime = 0;
    }

    wallpaper.style.transition = '2s';
    natureName.innerText = pageManager[arrayIndexObject].name;
    wallpaper.style.backgroundImage = pageManager[arrayIndexObject].morning;

    pageManager[arrayIndexObject-1].nightAudio.pause();
    pageManager[arrayIndexObject-1].nightAudio.currentTime = 0;
    pageManager[arrayIndexObject-1].morningAudio.pause();
    pageManager[arrayIndexObject-1].morningAudio.currentTime = 0;
});

// Change current ambience day/night
sunIcon.addEventListener('click', () => {
    wallpaper.style.transition = '2s';

    pageManager[arrayIndexObject].morningAudio.loop = true;
    pageManager[arrayIndexObject].morningAudio.play();
    pageManager[arrayIndexObject].nightAudio.pause();
    pageManager[arrayIndexObject].nightAudio.currentTime = 0;
    wallpaper.style.backgroundImage = pageManager[arrayIndexObject].morning;
});

moonIcon.addEventListener('click', () => {
    wallpaper.style.transition = '2s';

    pageManager[arrayIndexObject].nightAudio.loop = true;
    pageManager[arrayIndexObject].nightAudio.play();
    pageManager[arrayIndexObject].morningAudio.pause();
    pageManager[arrayIndexObject].morningAudio.currentTime = 0;
    wallpaper.style.backgroundImage = pageManager[arrayIndexObject].night;
});
