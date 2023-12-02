/*eslint-env browser*/
var x;
var x1 = 1;


document.addEventListener('click', function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 60) {
        x1 = 1;
    }
    if (x1 >= 1 && x1 <= 3) {
        document.getElementById('position_name').innerHTML = 'SF Powell Station';
    }
    if (x1 === 4) {
        document.getElementById('position_name').innerHTML = 'Union Square';
    }
    if (x1 === 5) {
        document.getElementById('position_name').innerHTML = 'KMT American Branch';
    }
    if (x1 >= 6 && x1 <= 11) {
        document.getElementById('position_name').innerHTML = "China Town";
    }
    if (x1 >= 12 && x1 <= 20) {
        document.getElementById('position_name').innerHTML = 'Coit Tower';
    }
    if (x1 >= 21 && x1 <= 24) {
        document.getElementById('position_name').innerHTML = 'SF City Tour';
    }
    if (x1 >= 25 && x1 <= 28) {
        document.getElementById('position_name').innerHTML = 'Pigeon Point Lighthouse';
    }
    if (x1 >= 29 && x1 <= 36) {
        document.getElementById('position_name').innerHTML = 'Monterey del Monte Beach';
    }
    if (x1 >= 37 && x1 <= 39) {
        document.getElementById('position_name').innerHTML = 'Pebble Beach';
    }
    if (x1 === 40) {
        document.getElementById('position_name').innerHTML = 'Lombard Street-九曲花街';
    }
    if (x1 >= 41 && x1 <= 46) {
        document.getElementById('position_name').innerHTML = 'Golden Gate Bridge';
    }
    if (x1 === 47) {
        document.getElementById('position_name').innerHTML = 'Alcatraz Island-惡魔島';
    }
    if (x1 >= 48  && x1 <= 49) {
        document.getElementById('position_name').innerHTML = 'Crissy Field Marsh';
    }
    if (x1 >= 50  && x1 <= 53) {
        document.getElementById('position_name').innerHTML = 'Palace of Fine Arts-藝術宮';
    }
    if (x1 >= 54  && x1 <= 57) {
        document.getElementById('position_name').innerHTML = 'Pier 39';
    }
    if (x1 >= 58  && x1 <= 60) {
        document.getElementById('position_name').innerHTML = 'Cable Car-叮噹車';
    }
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_USA/image_San_Fracisco/" + img_name + ".jpg";
});
