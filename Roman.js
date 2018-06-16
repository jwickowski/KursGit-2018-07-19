var Roman = {};

(function(){
    function toArabic(arabicNumber){
        var result = 0;
        for(var i = 0; i< arabicNumber.length; i++){
            var current = arabicNumber[i];
            var isNext = i+1 < arabicNumber.length;
            var nextChar = null;
            if(isNext){
                var nextChar = arabicNumber[i+1];
            }
            if(current === "I"){
                if(nextChar == "V" || nextChar == "X"){
                    result --;
                }
                else{
                    result ++;
                }
            }
            if(current === "V"){
                result += 5;
            }
            if(current === "X"){
                result += 10;
            }
            if(current === "L"){
                result += 50;
            }
        }
        return result;
    };

    Roman.toArabic = toArabic;
})();