"use strict";
var character = document.getElementById('character');
var shadow = document.getElementById('shadow');
var leftQuestionMark = document.getElementById('leftQuestionMark');
var rightQuestionMark = document.getElementById('rightQuestionMark');
var sign = document.getElementById('sign');
var signShadow = document.getElementById('signShadow');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var names = [
    'lamy',
    'aki',
    'rushia',
    'nene',
    'okayu',
    'marine'
];
var orderNumber = 0;
var canClick = true;
var transformText = 'translateX(calc(+50vw + 50%))';
var characterName = names[orderNumber];
var loadedCharacter = false;
var loadedShadow = false;
function changeImages3() {
    canClick = true;
    character.removeEventListener('transitionend', changeImages3);
}
function loadingImages() {
    if (loadedCharacter && loadedShadow) {
        loadedCharacter = false;
        loadedShadow = false;
        leftQuestionMark.style.transform = 'translateX(0)';
        rightQuestionMark.style.transform = 'translateX(0)';
        sign.style.transform = 'translateX(0)';
        signShadow.style.transform = 'translateX(0)';
        character.addEventListener('transitionend', changeImages3);
    }
}
function changeImages2() {
    character.alt = characterName + " - character";
    character.src = "./img/" + characterName + "/character.png";
    character.style.transform = '';
    shadow.alt = characterName + " - shadow";
    shadow.src = "./img/" + characterName + "/shadow.png";
    shadow.style.transform = '';
    if (characterName === 'okayu') {
        leftQuestionMark.style.opacity = '1';
        rightQuestionMark.style.opacity = '1';
        sign.style.opacity = '1';
        signShadow.style.opacity = '1';
    }
    else {
        leftQuestionMark.style.opacity = '0';
        rightQuestionMark.style.opacity = '0';
        sign.style.opacity = '0';
        signShadow.style.opacity = '0';
    }
    character.removeEventListener('transitionend', changeImages2);
    character.addEventListener('load', function () {
        loadedCharacter = true;
        loadingImages();
    });
    shadow.addEventListener('load', function () {
        loadedShadow = true;
        loadingImages();
    });
}
function changeImages1() {
    characterName = names[orderNumber];
    character.style.transform = transformText;
    shadow.style.transform = transformText;
    leftQuestionMark.style.transform = transformText;
    rightQuestionMark.style.transform = transformText;
    sign.style.transform = transformText;
    signShadow.style.transform = transformText;
    character.addEventListener('transitionend', changeImages2);
}
function leftArrowClick() {
    if (canClick) {
        canClick = false;
        orderNumber--;
        if (orderNumber < 0) {
            orderNumber = names.length - 1;
        }
        changeImages1();
    }
}
function rightArrowClick() {
    if (canClick) {
        canClick = false;
        orderNumber++;
        if (orderNumber >= names.length) {
            orderNumber = 0;
        }
        changeImages1();
    }
}
function keyboardCheck(event) {
    if (event.key === 'ArrowLeft') {
        leftArrowClick();
    }
    else if (event.key === 'ArrowRight') {
        rightArrowClick();
    }
}
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener('click', leftArrowClick);
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener('click', rightArrowClick);
document.addEventListener('keydown', keyboardCheck);
