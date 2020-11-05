// Nature Name + Main Wallpaper
let wallpaper = document.querySelector('#background');
let natureName = document.querySelector('.nature-name');

// Day/Night buttons
let sunIcon = document.querySelector('#sun');
let moonIcon = document.querySelector('#moon');

// Previous/Next buttons
let prevBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');

// let audioTestMorning = new Audio('../audio/morning/waterfall-morning.mp3');
let audioTestNight = new Audio();

// Page Manager Array Selector
let arrayKey = 0;

// Page Nature Data
const pageManager = [{
    name: 'Waterfall',
    morning: 'url(../images/morning/waterfall-morning.jpg)',
    morningAudio: new Audio('../audio/morning/waterfall-morning.mp3'),
    night: 'url(../images/night/waterfall-night.jpg)',
    nightAudio: new Audio('../audio/night/waterfall-night.mp3')
},{
    name: 'Beach',
    morning: 'url(../images/morning/beach-morning.jpg)',
    morningAudio: new Audio('../audio/morning/beach-morning.mp3'),
    night: 'url(../images/night/beach-night.jpeg)',
    nightAudio: new Audio('../audio/night/beach-night.mp3')
}];

// Previous/Next buttons EVENTS
prevBtn.addEventListener('click', () => {
    arrayKey--;

    if (arrayKey < 0) {
        arrayKey = pageManager.length - 1;
        pageManager[0].nightAudio.pause();
        pageManager[0].nightAudio.currentTime = 0;
        pageManager[0].morningAudio.pause();
        pageManager[0].morningAudio.currentTime = 0;
    }

    wallpaper.style.transition = '2s';
    natureName.innerText = pageManager[arrayKey].name;
    wallpaper.style.backgroundImage = pageManager[arrayKey].morning;

    pageManager[arrayKey+1].nightAudio.pause();
    pageManager[arrayKey+1].nightAudio.currentTime = 0;
    pageManager[arrayKey+1].morningAudio.pause();
    pageManager[arrayKey+1].morningAudio.currentTime = 0;
});

nextBtn.addEventListener('click', () => {
    arrayKey++;

    if(arrayKey > pageManager.length - 1) {
        arrayKey = 0;
        pageManager[pageManager.length-1].nightAudio.pause();
        pageManager[pageManager.length-1].nightAudio.currentTime = 0;
        pageManager[pageManager.length-1].morningAudio.pause();
        pageManager[pageManager.length-1].morningAudio.currentTime = 0;
    }

    wallpaper.style.transition = '2s';
    natureName.innerText = pageManager[arrayKey].name;
    wallpaper.style.backgroundImage = pageManager[arrayKey].morning;

    pageManager[arrayKey-1].nightAudio.pause();
    pageManager[arrayKey-1].nightAudio.currentTime = 0;
    pageManager[arrayKey-1].morningAudio.pause();
    pageManager[arrayKey-1].morningAudio.currentTime = 0;
});

// Change current ambience day/night
sunIcon.addEventListener('click', () => {
    wallpaper.style.transition = '2s';
    pageManager[arrayKey].morningAudio.play();
    pageManager[arrayKey].nightAudio.pause();
    pageManager[arrayKey].nightAudio.currentTime = 0;
    wallpaper.style.backgroundImage = pageManager[arrayKey].morning;
});

moonIcon.addEventListener('click', () => {
    wallpaper.style.transition = '2s';
    pageManager[arrayKey].nightAudio.play();
    pageManager[arrayKey].morningAudio.pause();
    pageManager[arrayKey].morningAudio.currentTime = 0;
    wallpaper.style.backgroundImage = pageManager[arrayKey].night;
});
