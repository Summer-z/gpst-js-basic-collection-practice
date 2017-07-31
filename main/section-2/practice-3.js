'use strict';

module.exports = function countSameElements(collection) {
          
        var num = 0;
        var i = 0;
        var arr_r = [];
        var reg = /(\d{1,3})/g;
        
        for( let k=0; k<collection.length; k++ ) {
            var found = collection[k].match(reg);
            num = (collection[k][2])? num+parseInt(found): num+1;
            if(k!=collection.length-1) {
                
                   if( collection[k][0] != collection[k+1][0] ) {
                         arr_r[i++] = { name:collection[k][0], summary:num };
                         num = 0;
                   }
                   
            } else {
                    arr_r[i++] = { name:collection[k][0], summary:num };
            }
            
        }
        
        return arr_r;
        
}
