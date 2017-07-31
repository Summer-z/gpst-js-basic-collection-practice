'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
          
          var same_arr = [];
          
          for (let i=0;i<collectionA.length;i++) {
                    
                 for (let j=0;j<collectionB.length;j++) {
                           
                           if( collectionA[i] === collectionB[j]) {
                                     same_arr.push(collectionA[i]);
                           }
                           
                 } 
                 
          }
          
         return same_arr;
         
}
