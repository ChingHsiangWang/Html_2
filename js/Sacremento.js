/*eslint-env browser*/
var x;
var x1 = 1;


document.addEventListener('click', function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 12) {
        x1 = 1;
    }
    if (x1 >= 1 && x1 <= 3) {
        document.getElementById('position_name').innerHTML = 'Amtrak';
    }
    if (x1 >= 4 && x1 <= 6) {
        document.getElementById('position_name').innerHTML = 'Street view';
    }
    if (x1 >= 7 && x1 <= 8) {
        document.getElementById('position_name').innerHTML = 'The boiling crab';
    }
    if (x1 >= 9 && x1 <= 11) {
        document.getElementById('position_name').innerHTML = "California governor's office";
    }
    if (x1 === 12) {
        document.getElementById('position_name').innerHTML = 'Tower bridge';
    }
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_USA/image_Sacremento/" + img_name + ".jpg";
});
