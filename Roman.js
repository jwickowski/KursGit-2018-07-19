var Roman = {};

(function(){
    function toArabic(arabicNumber){
        var result = 0;
        for(var i = 0; i< arabicNumber.length; i++){
            var current = arabicNumber[i];
            if(current === "I"){
                result ++;
            }
            if(current === "V"){
                result += 5;
            }
        }
        return result;
    };

    Roman.toArabic = toArabic;
})();