/*eslint-env browser*/
var x;
var x1 = 1;


document.addEventListener('click', function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 76) {
        x1 = 1;
    }
    if (x1 === 1) {
        document.getElementById('position_name').innerHTML = '美國日常';
    }
    if (x1 >= 2 && x1 <= 5) {
        document.getElementById('position_name').innerHTML = 'Taiwan-CA Davis';
    }
    if (x1 >= 6 && x1 <= 10) {
        document.getElementById('position_name').innerHTML = 'UC Davis';
    }
    if (x1 >= 11 && x1 <= 13) {
        document.getElementById('position_name').innerHTML = 'The 4th of July';
    }
    if (x1 >= 14 && x1 <= 19) {
        document.getElementById('position_name').innerHTML = 'Lab routine';
    }
    if (x1 >= 20 && x1 <= 49) {
        document.getElementById('position_name').innerHTML = 'Homemade food';
    }
    if (x1 >= 50 && x1 <= 61) {
        document.getElementById('position_name').innerHTML = 'Eating outdoors';
    }
    if (x1 >= 62 && x1 <= 65) {
        document.getElementById('position_name').innerHTML = 'Ice cream& happiness';
    }
    if (x1 >= 66 && x1 <= 67) {
        document.getElementById('position_name').innerHTML = 'Bubble tea abroad';
    }
    if (x1 >= 68 && x1 <= 69) {
        document.getElementById('position_name').innerHTML = 'Starbucks in Davis';
    }
    if (x1 >= 70 && x1 <= 71) {
        document.getElementById('position_name').innerHTML = 'Peets coffee in Davis';
    }
    if (x1 >= 72 && x1 <= 74) {
        document.getElementById('position_name').innerHTML = 'Stamps& postcards';
    }
    if (x1 === 75) {
        document.getElementById('position_name').innerHTML = 'Best shopping partner';
    }
    if (x1 === 76) {
        document.getElementById('position_name').innerHTML = 'Davis-Taiwan';
    }
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_USA/image_daily_life/" + img_name + ".jpg";
});
