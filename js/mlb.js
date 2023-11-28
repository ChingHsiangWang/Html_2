/*eslint-env browser*/
var arrow_left = document.getElementById('arrow_left');
var arrow_right = document.getElementById('arrow_right');
var x;
var x1 = 1;
var x2 = 18;
arrow_left.onclick = function () {
    'use strict';
    x2 = x2 - 1;
    if (x2 < 1) {
        x2 = 17;
    }
    if (x2 < 9) {
        document.getElementById('position_name').innerHTML = 'SF AT&T Park';
    } else {
        document.getElementById('position_name').innerHTML = 'OAK Alameda County Coliseum';
    }
    x1 = x2;
    x = x2.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "image_mlb/" + img_name + ".jpg";
};

arrow_right.onclick = function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 17) {
        x1 = 1;
    }
    if (x1 < 9) {
        document.getElementById('position_name').innerText = 'SF AT&T Park';
    } else {
        document.getElementById('position_name').innerText = 'OAK Alameda County Coliseum';
    }
    x2 = x1;
    x = x1;
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "image_mlb/" + img_name + ".jpg";
};
