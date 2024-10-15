ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
galleryimages = [ 
    "imgs/Portfolio/showcase/1.png",
    "imgs/Portfolio/showcase/2.png",
    "imgs/Portfolio/showcase/3.png",
    "imgs/Portfolio/showcase/4.png",
    "imgs/Portfolio/showcase/5.png",
    "imgs/Portfolio/showcase/6.png",
    "imgs/Portfolio/showcase/7.png",
    "imgs/Portfolio/showcase/8.png",
    "imgs/Portfolio/showcase/9.png",
    "imgs/Portfolio/showcase/10.png",
    "imgs/Portfolio/showcase/11.png",
    "imgs/Portfolio/showcase/12.png",
];

function shuffleImages(array) {
    for(var index = array.length - 1; index >= 0; index--) {
        var randomNumber = Math.floor(Math.random() * (index + 1));
        var currentIndex = array[index];
        array[index] = array[randomNumber];
        array[randomNumber] = currentIndex;

    }
}


shuffleImages(galleryimages)


for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).src = galleryimages[i];
}