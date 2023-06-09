var models = [
    {
        name: "Bmw 418d",
        image: "img/bmw.jpg",
        link: "https://picsum.photos/id/237/200/300"
    },
    {
        name: "Mazda CX",
        image: "img/mazda.jpg",
        link: "https://picsum.photos/id/238/200/300"
    },
    {
        name: "Volvo s60",
        image: "img/volvo.jpg",
        link: "https://picsum.photos/id/239/200/300"
    },
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
        link: "https://picsum.photos/id/236/200/300"
    },
    {
        name: "Honda Civic",
        image: "img/honda.jpg",
        link: "https://picsum.photos/id/235/200/300"
    }
];

var index = 1;
var slaytCount = models.length;

var settings = {
    duration : '2000',
    random : true
}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    showSlide(index);
});

function init(settings) {
    
setInterval(function () {
    if (settings.random) {
        index = Math.floor(Math.random()*slaytCount)
    } else {
        
    }
    showSlide(index)
},settings.duration)
 
}


function showSlide(i) {
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

