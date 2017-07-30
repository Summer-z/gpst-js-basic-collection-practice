'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
            var same_arr = [];
                    for (let i=0;i<collectionA.length;i++) {
                           for (let j=0;j<objectB.value.length;j++) {
                                     if( collectionA[i].key === objectB.value[j]) {
                                               same_arr.push(collectionA[i].key);
                                     }
                           }   
                    }
            return same_arr;
}
