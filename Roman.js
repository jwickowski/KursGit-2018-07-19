var Roman = {};

(function(){
    function toArabic(arabicNumber){
        var result = 0;
        for(var i = 0; i< arabicNumber.length; i++){
            var current = arabicNumber[i];
            var isNext = i+1 < arabicNumber.length;
            if(current === "I"){
                if(isNext){
                    if(arabicNumber[i+1] == "V"){
                        result --;
                    }
                    else{
                        result ++
                    }
                }
                else{
                result ++;
            }
            
            }
            if(current === "V"){
                result += 5;
            }
        }
        return result;
    };

    Roman.toArabic = toArabic;
})();