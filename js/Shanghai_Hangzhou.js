/*eslint-env browser*/
var x;
var x1 = 1;

document.addEventListener('click', function () {
    'use strict';
    x1 = x1 + 1;
    if (x1 > 133) {
        x1 = 1;
    }
    if (x1 >= 1 && x1 <= 4) {
        document.getElementById('position_name').innerHTML = '桃園(TPE)-上海(SHA)';
    }
    if (x1 >= 5 && x1 <= 8) {
        document.getElementById('position_name').innerHTML = '中華藝術宮';
    }
    if (x1 === 9) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 >= 10 && x1 <= 11) {
        document.getElementById('position_name').innerHTML = '大壺春';
    }
    if (x1 >= 12 && x1 <= 14) {
        document.getElementById('position_name').innerHTML = "陸家嘴";
    }
    if (x1 === 15) {
        document.getElementById('position_name').innerHTML = '永和豆漿';
    }
    if (x1 >= 16 && x1 <= 27) {
        document.getElementById('position_name').innerHTML = '豫園';
    }
    if (x1 === 28) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 === 29) {
        document.getElementById('position_name').innerHTML = '振鼎雞';
    }
    if (x1 >= 30 && x1 <= 31) {
        document.getElementById('position_name').innerHTML = '台灣豆花';
    }
    if (x1 >= 32 && x1 <= 33) {
        document.getElementById('position_name').innerHTML = '靜安寺';
    }
    if (x1 === 34) {
        document.getElementById('position_name').innerHTML = '南京步行街';
    }
    if (x1 >= 35 && x1 <= 46) {
        document.getElementById('position_name').innerHTML = '外灘';
    }
    if (x1 === 47) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 >= 48 && x1 <= 51) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 === 52) {
        document.getElementById('position_name').innerHTML = '朱家角-放生橋';
    }
    if (x1 >= 53 && x1 <= 64) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 >= 65 && x1 <= 66) {
        document.getElementById('position_name').innerHTML = '朱家角-課植園';
    }
    if (x1 === 67) {
        document.getElementById('position_name').innerHTML = '朱家角-城隍廟';
    }
    if (x1 >= 68 && x1 <= 70) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 === 71) {
        document.getElementById('position_name').innerHTML = '朱家角-大清郵局';
    }
    if (x1 >= 72 && x1 <= 77) {
        document.getElementById('position_name').innerHTML = '上海-杭州';
    }
    if (x1 >= 78 && x1 <= 79) {
        document.getElementById('position_name').innerHTML = '武狀元坊';
    }
    if (x1 >= 80 && x1 <= 84) {
        document.getElementById('position_name').innerHTML = '雷峰塔';
    }
    if (x1 >= 85 && x1 <= 88) {
        document.getElementById('position_name').innerHTML = '西湖十景-雷峰夕照';
    }
    if (x1 >= 89 && x1 <= 99) {
        document.getElementById('position_name').innerHTML = '靈隱寺';
    }
    if (x1 >= 100 && x1 <= 102) {
        document.getElementById('position_name').innerHTML = '飛來峰';
    }
    if (x1 >= 103 && x1 <= 105) {
        document.getElementById('position_name').innerHTML = '西湖十景-曲院風荷';
    }
    if (x1 >= 106 && x1 <= 110) {
        document.getElementById('position_name').innerHTML = '岳王廟';
    }
    if (x1 >= 111 && x1 <= 113) {
        document.getElementById('position_name').innerHTML = '西湖十景-平湖秋月';
    }
    if (x1 === 114) {
        document.getElementById('position_name').innerHTML = '蔣經國故居';
    }
    if (x1 >= 115 && x1 <= 117) {
        document.getElementById('position_name').innerHTML = '白堤';
    }
    if (x1 >= 118 && x1 <= 120) {
        document.getElementById('position_name').innerHTML = '蘇堤';
    }
    if (x1 >= 121 && x1 <= 125) {
        document.getElementById('position_name').innerHTML = '西湖十景-花港觀魚';
    }
    if (x1 >= 126 && x1 <= 130) {
        document.getElementById('position_name').innerHTML = '小瀛洲';
    }
    if (x1 >= 131 && x1 <= 132) {
        document.getElementById('position_name').innerHTML = '西湖十景-三潭印月';
    }
    if (x1 === 133) {
        document.getElementById('position_name').innerHTML = '杭州(HGH)-桃園(TPE)';
    }
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_China/image_Shanghai_Hangzhou/" + img_name + ".jpg";
});

var event = event || window.event;
var keycode = event.which || event.keyCode;
document.onkeydown = function (event) {
    'use strict';
    switch (keycode) {
        case 39:
            x1 + 1;
            break;
        case 37:
            x1 - 1;
            break;
    }
    x1 = x1 + 1;
    if (x1 > 133) {
        x1 = 1;
    }
    if (x1 < 1) {
        x1 = 133;
    }
    if (x1 >= 1 && x1 <= 4) {
        document.getElementById('position_name').innerHTML = '桃園(TPE)-上海(SHA)';
    }
    if (x1 >= 5 && x1 <= 8) {
        document.getElementById('position_name').innerHTML = '中華藝術宮';
    }
    if (x1 === 9) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 >= 10 && x1 <= 11) {
        document.getElementById('position_name').innerHTML = '大壺春';
    }
    if (x1 >= 12 && x1 <= 14) {
        document.getElementById('position_name').innerHTML = "陸家嘴";
    }
    if (x1 === 15) {
        document.getElementById('position_name').innerHTML = '永和豆漿';
    }
    if (x1 >= 16 && x1 <= 27) {
        document.getElementById('position_name').innerHTML = '豫園';
    }
    if (x1 === 28) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 === 29) {
        document.getElementById('position_name').innerHTML = '振鼎雞';
    }
    if (x1 >= 30 && x1 <= 31) {
        document.getElementById('position_name').innerHTML = '台灣豆花';
    }
    if (x1 >= 32 && x1 <= 33) {
        document.getElementById('position_name').innerHTML = '靜安寺';
    }
    if (x1 === 34) {
        document.getElementById('position_name').innerHTML = '南京步行街';
    }
    if (x1 >= 35 && x1 <= 46) {
        document.getElementById('position_name').innerHTML = '外灘';
    }
    if (x1 === 47) {
        document.getElementById('position_name').innerHTML = '街景';
    }
    if (x1 >= 48 && x1 <= 51) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 === 52) {
        document.getElementById('position_name').innerHTML = '朱家角-放生橋';
    }
    if (x1 >= 53 && x1 <= 64) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 >= 65 && x1 <= 66) {
        document.getElementById('position_name').innerHTML = '朱家角-課植園';
    }
    if (x1 === 67) {
        document.getElementById('position_name').innerHTML = '朱家角-城隍廟';
    }
    if (x1 >= 68 && x1 <= 70) {
        document.getElementById('position_name').innerHTML = '朱家角';
    }
    if (x1 === 71) {
        document.getElementById('position_name').innerHTML = '朱家角-大清郵局';
    }
    if (x1 >= 72 && x1 <= 77) {
        document.getElementById('position_name').innerHTML = '上海-杭州';
    }
    if (x1 >= 78 && x1 <= 79) {
        document.getElementById('position_name').innerHTML = '武狀元坊';
    }
    if (x1 >= 80 && x1 <= 84) {
        document.getElementById('position_name').innerHTML = '雷峰塔';
    }
    if (x1 >= 85 && x1 <= 88) {
        document.getElementById('position_name').innerHTML = '西湖十景-雷峰夕照';
    }
    if (x1 >= 89 && x1 <= 99) {
        document.getElementById('position_name').innerHTML = '靈隱寺';
    }
    if (x1 >= 100 && x1 <= 102) {
        document.getElementById('position_name').innerHTML = '飛來峰';
    }
    if (x1 >= 103 && x1 <= 105) {
        document.getElementById('position_name').innerHTML = '西湖十景-曲院風荷';
    }
    if (x1 >= 106 && x1 <= 110) {
        document.getElementById('position_name').innerHTML = '岳王廟';
    }
    if (x1 >= 111 && x1 <= 113) {
        document.getElementById('position_name').innerHTML = '西湖十景-平湖秋月';
    }
    if (x1 === 114) {
        document.getElementById('position_name').innerHTML = '蔣經國故居';
    }
    if (x1 >= 115 && x1 <= 117) {
        document.getElementById('position_name').innerHTML = '白堤';
    }
    if (x1 >= 118 && x1 <= 120) {
        document.getElementById('position_name').innerHTML = '蘇堤';
    }
    if (x1 >= 121 && x1 <= 125) {
        document.getElementById('position_name').innerHTML = '西湖十景-花港觀魚';
    }
    if (x1 >= 126 && x1 <= 130) {
        document.getElementById('position_name').innerHTML = '小瀛洲';
    }
    if (x1 >= 131 && x1 <= 132) {
        document.getElementById('position_name').innerHTML = '西湖十景-三潭印月';
    }
    if (x1 === 133) {
        document.getElementById('position_name').innerHTML = '杭州(HGH)-桃園(TPE)';
    x = x1.toString();
    var img_name = 'img_' + x;
    document.getElementById('img').src = "../../image_China/image_Shanghai_Hangzhou/" + img_name + ".jpg";
};
