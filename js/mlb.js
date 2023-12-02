/*eslint-env browser*/
var x;
var x1 = 1;


document.addEventListener('click', function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 17) {
        x1 = 1;
    }
    if (x1 >= 1 && x1 <= 8) {
        document.getElementById('position_name').innerHTML = 'SF AT&T Park';
    }
    if (x1 >= 9 && x1 <= 17) {
        document.getElementById('position_name').innerHTML = 'Oak Alameda County Coliseum';
    }
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_USA/image_mlb/" + img_name + ".jpg";
});
