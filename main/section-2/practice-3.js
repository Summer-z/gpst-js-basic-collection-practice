'use strict';

module.exports = function countSameElements(collection) {
        var num = 0;
            var i = 0;
            var arr_r = [];
            var arr_s = [];
            for( let j=0; j<collection.length; j++) {
                arr_s[j] = collection[j].split("");
            }
            for( let k=0; k<arr_s.length; k++) {
                if(k!=arr_s.length-1) {
                    if( arr_s[k][0] == arr_s[k+1][0] ) {
                        num = (arr_s[k][2])? num+parseInt(arr_s[k][2]+arr_s[k][3]): num+1;
                    } else {
                        num = (arr_s[k][2])? num+parseInt(arr_s[k][2]+arr_s[k][3]): num+1;
                        arr_r[i++] = { name:arr_s[k][0], summary:num };
                        num = 0;
                    }
                } else {
                    num = (arr_s[k][2])? num+parseInt(arr_s[k][2]+arr_s[k][3]): num+1;
                    arr_r[i++] = { name:arr_s[k][0], summary:num };
                }
            }
            return arr_r;
}
