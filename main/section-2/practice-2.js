'use strict';

module.exports = function countSameElements(collection) {
         var num = 1;
         var i = 0;
         var arr_r = [];
         var arr_s = [];
         const len = collection.length;
         for( let j=0; j<len-1; j++ ) {
                   if( collection[j]===collection[j+1] ) {
                             num++;
                   } else {
                             arr_r[i++] = { key:collection[j], count:num };
                             num = 1;
                   }
         }
         arr_r[i] = {};
         arr_r[i].key = collection[len-1].split("-")[0];
         arr_r[i].count = parseInt(collection[len-1].split("-")[1]);
         
         return arr_r;
}
