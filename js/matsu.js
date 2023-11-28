/*eslint-env browser*/
var arrow_left = document.getElementById('arrow_left');
var arrow_right = document.getElementById('arrow_right');
var x;
var x1 = 1;
var x2 = 69;
arrow_left.onclick = function () {
    'use strict';
    x2 = x2 - 1;
    if (x2 <= 0) {
        x2 = 64;
    }
    if (x2 >= 1 && x2 <= 2) {
        document.getElementById('position_name').innerHTML = '松山-南竿';
    }
    if (x2 >= 3 && x2 <= 6) {
        document.getElementById('position_name').innerHTML = '南竿-八八坑道';
    }
    if (x2 >= 7 && x2 <= 8) {
        document.getElementById('position_name').innerHTML = '南竿-大漢據點';
    }
    if (x2 >= 9 && x2 <= 11) {
        document.getElementById('position_name').innerHTML = '南竿-北海坑道';
    }
    if (x2 == 12) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖日報社';
    }
    if (x2 >= 13 && x2 <= 15) {
        document.getElementById('position_name').innerHTML = '南竿-鐵堡';
    }
    if (x2 >= 16 && x2 <= 26) {
        document.getElementById('position_name').innerHTML = '南竿-津沙聚落';
    }
    if (x2 == 27) {
        document.getElementById('position_name').innerHTML = '南竿-沐光民宿';
    }
    if (x2 >= 28 && x2 <= 29) {
        document.getElementById('position_name').innerHTML = '南竿-雲台山';
    }
    if (x2 == 30) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖劍碑';
    }
    if (x2 == 31) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖港';
    }
    if (x2 == 32) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖天后宮';
    }
    if (x2 == 33) {
        document.getElementById('position_name').innerHTML = '南竿-媽祖巨神像';
    }
    if (x2 >= 34 && x2 <= 35) {
        document.getElementById('position_name').innerHTML = '南竿-北竿';
    }
    if (x2 >= 36 && x2 <= 46) {
        document.getElementById('position_name').innerHTML = '北竿-芹壁村';
    }
    if (x2 >= 47 && x2 <= 50) {
        document.getElementById('position_name').innerHTML = '北竿-短坡';
    }
    if (x2 >= 51 && x2 <= 52) {
        document.getElementById('position_name').innerHTML = '北竿-06據點';
    }
    if (x2 >= 53 && x2 <= 55) {
        document.getElementById('position_name').innerHTML = '北竿-壁山';
    }
    if (x2 == 56) {
        document.getElementById('position_name').innerHTML = '北竿-坂里大宅';
    }
    if (x2 == 57) {
        document.getElementById('position_name').innerHTML = '北竿-坂里沙灘';
    }
    if (x2 == 58) {
        document.getElementById('position_name').innerHTML = '北竿-南竿';
    }
    if (x2 == 59) {
        document.getElementById('position_name').innerHTML = '南竿-星巴克';
    }
    if (x2 >= 60 && x2 <= 64) {
        document.getElementById('position_name').innerHTML = '南竿-松山';
    }
    x1 = x2;
    x = x2.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_Taiwan/image_Matsu/" + img_name + ".jpg";
};

arrow_right.onclick = function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 64) {
        x1 = 1;
    }
    if (x1 >= 1 && x1 <= 2) {
        document.getElementById('position_name').innerHTML = '松山-南竿';
    }
    if (x1 >= 3 && x1 <= 6) {
        document.getElementById('position_name').innerHTML = '南竿-八八坑道';
    }
    if (x1 >= 7 && x1 <= 8) {
        document.getElementById('position_name').innerHTML = '南竿-大漢據點';
    }
    if (x1 >= 9 && x1 <= 11) {
        document.getElementById('position_name').innerHTML = '南竿-北海坑道';
    }
    if (x1 == 12) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖日報社';
    }
    if (x1 >= 13 && x1 <= 15) {
        document.getElementById('position_name').innerHTML = '南竿-鐵堡';
    }
    if (x1 >= 16 && x1 <= 26) {
        document.getElementById('position_name').innerHTML = '南竿-津沙聚落';
    }
    if (x1 == 27) {
        document.getElementById('position_name').innerHTML = '南竿-沐光民宿';
    }
    if (x1 >= 28 && x1 <= 29) {
        document.getElementById('position_name').innerHTML = '南竿-雲台山';
    }
    if (x1 == 30) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖劍碑';
    }
    if (x1 == 31) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖港';
    }
    if (x1 == 32) {
        document.getElementById('position_name').innerHTML = '南竿-馬祖天后宮';
    }
    if (x1 == 33) {
        document.getElementById('position_name').innerHTML = '南竿-媽祖巨神像';
    }
    if (x1 >= 34 && x1 <= 35) {
        document.getElementById('position_name').innerHTML = '南竿-北竿';
    }
    if (x1 >= 36 && x1 <= 46) {
        document.getElementById('position_name').innerHTML = '北竿-芹壁村';
    }
    if (x1 >= 47 && x1 <= 50) {
        document.getElementById('position_name').innerHTML = '北竿-短坡';
    }
    if (x1 >= 51 && x1 <= 52) {
        document.getElementById('position_name').innerHTML = '北竿-06據點';
    }
    if (x1 >= 53 && x1 <= 55) {
        document.getElementById('position_name').innerHTML = '北竿-壁山';
    }
    if (x1 == 56) {
        document.getElementById('position_name').innerHTML = '北竿-坂里大宅';
    }
    if (x1 == 57) {
        document.getElementById('position_name').innerHTML = '北竿-坂里沙灘';
    }
    if (x1 == 58) {
        document.getElementById('position_name').innerHTML = '北竿-南竿';
    }
    if (x1 == 59) {
        document.getElementById('position_name').innerHTML = '南竿-星巴克';
    }
    if (x1 >= 60 && x1 <= 64) {
        document.getElementById('position_name').innerHTML = '南竿-松山';
    }
    x2 = x1;
    x = x1;
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_Taiwan/image_Matsu/" + img_name + ".jpg";
};
