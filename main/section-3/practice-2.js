'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
          const arr = objectB.value;
                    for( let i=0; i<collectionA.length; i++) {
                              var key_val = collectionA[i].key;
                              var key_num = collectionA[i].count;
                              for( let j=0; j<arr.length; j++) {
                                        if(key_val == arr[j] ) {
                                                  key_num = key_num - parseInt(key_num/3);
                                                  collectionA[i].count = key_num;
                                        }
                              }
                       
                    }
                    
         return (collectionA);
         
}
