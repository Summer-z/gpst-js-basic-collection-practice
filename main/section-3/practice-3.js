'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
          
          var num = 1;
          var i = 0;
          var arr_r = [];   
          const arr = objectB.value;
          
          for( let j=0; j<collectionA.length; j++ ) {
                    
                   if( collectionA[j]===collectionA[j+1] ) {
                             num++;
                   } else {
                             arr_r[i++] = { key:collectionA[j], count:num };
                             num = 1;
                   }
                   
          }
          
          for( let i=0; i<arr_r.length; i++) {
                    var key_val = arr_r[i].key;
                    var key_num = arr_r[i].count;
                    
                    for( let j=0; j<arr.length; j++) {
                              if(key_val == arr[j] ) {
                                        key_num = key_num - parseInt(key_num/3);
                                        arr_r[i].count = key_num;
                              }
                    }
             
          }
                    
         return (arr_r);
}
