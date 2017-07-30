'use strict';

module.exports = function countSameElements(collection) {
         var num = 1;
         var i = 0;
         var arr_r = [];
         const len = collection.length;
         for( let j=0; j<len; j++ ) {
                   if( collection[j][0]===collection[j+1][0] ) {
                             
                             num++;
                   } else {
                             arr_r[i++] = { key:collection[j], count:num };
                             num = 1;
                   }
         }
         
         return arr_r;
}
