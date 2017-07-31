'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
          
          const son_colB = collectionB[0];
          var same_arr = [];
          
          for (let i=0;i<collectionA.length;i++) {
                    
                 for (let j=0;j<son_colB.length;j++) {
                           
                           if( collectionA[i] === son_colB[j]) {
                                     same_arr.push(collectionA[i]);
                           }
                           
                 }   
                 
          }
          
          return same_arr;
}
