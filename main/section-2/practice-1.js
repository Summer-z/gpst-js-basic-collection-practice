'use strict';

module.exports = function countSameElements(collection) {
          
         var num = 1;
         var i = 0;
         var arr_r = [];
         
         for( let j=0; j<collection.length; j++ ) {
                   
                   if( collection[j]===collection[j+1] ) {
                             num++;
                   } else {
                             arr_r[i++] = { key:collection[j], count:num };
                             num = 1;
                   }
                   
         } 
         
         return arr_r;
         
}
