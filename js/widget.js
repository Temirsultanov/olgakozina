;(function () {
    let earlyButton = document.querySelector('.muha-moreearly-button');
    let yearsButton = document.querySelector('.muha-last3-button');
    let mainTitleEarly = document.querySelector('.muha-main__title-early');
    let mainTitleLast3 = document.querySelector('.muha-main__title-last3');
    let redPolygon = document.querySelector('.muha-red-polygon');
    let bluePolygon = document.querySelector('.muha-blue-polygon');

    let early = {
        "backend": 150,
        "frontend": 89,
        "pm": 78,
        "teamlead": 35,
        "seniorqa": 24,
        "devops": 18,
        "also": 146,
    }
    let lastyears = {
        "backend": 50,
        "frontend": 28,
        "pm": 26,
        "teamlead": 15,
        "seniorqa": 9,
        "devops": 7,
        "also": 32,
    }
    let vacancies = [
        {
            name: "backend",
            size:  document.querySelector('.muha-vacancy-backend'),
            count: document.querySelector('.muha-vacancy-backend').querySelector(".muha-vacancy__count > span"),
        }, 
        {
            name: "frontend",
            size:  document.querySelector('.muha-vacancy-frontend'),
            count: document.querySelector('.muha-vacancy-frontend').querySelector(".muha-vacancy__count > span"),
        },
        {
            name: "pm",
            size:  document.querySelector('.muha-vacancy-pm'),
            count: document.querySelector('.muha-vacancy-pm').querySelector(".muha-vacancy__count > span"),
        },
        {
            name: "teamlead",
            size:  document.querySelector('.muha-vacancy-teamlead'),
            count: document.querySelector('.muha-vacancy-teamlead').querySelector(".muha-vacancy__count > span"),
        },
        {
            name: "seniorqa",
            size:  document.querySelector('.muha-vacancy-seniorqa'),
            count: document.querySelector('.muha-vacancy-seniorqa').querySelector(".muha-vacancy__count > span"),
        },
        {
            name: "devops",
            size:  document.querySelector('.muha-vacancy-devops'),
            count: document.querySelector('.muha-vacancy-devops').querySelector(".muha-vacancy__count > span"),
        },
        {
            name: "also",
            size:  document.querySelector('.muha-vacancy-also'),
            count: document.querySelector('.muha-vacancy-also').querySelector(".muha-vacancy__count > span"),
        }

    ]
    lastyears["max"] = Object.values(lastyears).sort( (a, b) => { return b - a})[0]
    early["max"] = Object.values(early).sort( (a, b) => { return b - a})[0]
    let restartValue = function () {
        if (yearsButton.classList.contains("muha-button-active")) {
            let max = lastyears.max;
            vacancies.forEach( (vacancy, index) => {
                vacancy.size.style.width = `${60 + lastyears[vacancy.name] / max * 40}%`;
                vacancy.count.textContent = lastyears[vacancy.name];
            })
        }
        else{
            let max = early.max;
            vacancies.forEach( (vacancy, index) => {
                vacancy.count.textContent = early[vacancy.name];
                vacancy.size.style.width = `${70 + early[vacancy.name] / max * 30}%`;
            })
        }
    }
    restartValue();

    let earlyButtonClick = function () {
        earlyButton.classList.add('muha-button-active');
        yearsButton.classList.remove('muha-button-active');
        mainTitleLast3.classList.add('muha-opacity0');
        mainTitleEarly.classList.remove('muha-opacity0');
        redPolygon.classList.remove('muha-red-polygon-active');
        bluePolygon.classList.remove('muha-blue-polygon-active');    
        restartValue();
    }
    let yearsButtonClick = function () {
        yearsButton.classList.add('muha-button-active');
        earlyButton.classList.remove('muha-button-active');  
        mainTitleLast3.classList.remove('muha-opacity0');
        mainTitleEarly.classList.add('muha-opacity0');
        redPolygon.classList.add('muha-red-polygon-active');
        bluePolygon.classList.add('muha-blue-polygon-active');
        restartValue();
    }
    earlyButton.addEventListener('click', earlyButtonClick);
    yearsButton.addEventListener('click', yearsButtonClick);

    let muhaWidget = document.querySelector('.muha-widget__main');
    let onWindowScrollWidget = function () {
        if (muhaWidget.getBoundingClientRect().top - window.innerHeight + 400< 0) {
            if (!muhaWidget.classList.contains("muhawidget-active")){
                muhaWidget.classList.add("muhawidget-active");
                muhaWidget.querySelector('.muha-main__left').classList.add('muha-fadeIn');
                muhaWidget.querySelector('.muha-buttons').classList.add('muha-fadeTop');
            }
        }
    };
    onWindowScrollWidget();
    window.addEventListener('scroll', onWindowScrollWidget);


    let firstCoord, lastCoord;
    let onMuhaWidgetTouchStart = function (evt) {
        firstCoord = {
            x: evt.pageX || evt.clientX || evt.changedTouches[0].pageX,
            y: evt.pageY || evt.clientY || evt.changedTouches[0].pageY
        }
        muhaWidget.addEventListener('touchend', onMuhaWidgetTouchEnd);
        window.addEventListener('mouseup', onMuhaWidgetTouchEnd);
    }
    muhaWidget.addEventListener('touchstart', onMuhaWidgetTouchStart);
    muhaWidget.addEventListener('mousedown', onMuhaWidgetTouchStart);   
    let onMuhaWidgetTouchEnd = function (evt) {
        lastCoord = {
            x: evt.pageX || evt.clientX || evt.changedTouches[0].pageX,
            y: evt.pageY || evt.clientY || evt.changedTouches[0].pageY
        }
        let diffCoord = {
            x: lastCoord.x - firstCoord.x,
            y: lastCoord.y - firstCoord.y,
        }
        if (diffCoord.x > 10) {
            yearsButtonClick();
        }
        if (diffCoord.x < -10) {
            earlyButtonClick();
        }
        earlyButton.textContent = Math.round(diffCoord.x);
        muhaWidget.removeEventListener('touchend', onMuhaWidgetTouchEnd);
        window.removeEventListener('mouseup', onMuhaWidgetTouchEnd);
    }
    
})();