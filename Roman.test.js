function prepareTestCase(testName, roman, expctedArabic){
    eval("var func = function "+testName+"(romanInstance) { var result = romanInstance.toArabic('"+roman+"'); return result === "+expctedArabic+"; } ")
    return func;
}

var romanTests = [
    prepareTestCase("Ito1", "I", 1),
    prepareTestCase("IIto2", "II", 2),
    prepareTestCase("Vto5", "V", 5),
    prepareTestCase("VIto6", "VI", 6),
    prepareTestCase("IVto4", "IV", 4),
    prepareTestCase("VIIIto8", "VIII", 8),
    prepareTestCase("Xto10", "X", 10),
    prepareTestCase("XXXto30", "XXX",30),
    prepareTestCase("IXto9", "IX",9),
    prepareTestCase("XVIIto17", "XVII",17),
    prepareTestCase("XIXto19", "XIX",19),
    prepareTestCase("Lto50", "L",50),
];

for(var i = 0; i < romanTests.length; i++){
    var romanTest = romanTests[i];
    var romanInstance = Object.create(Roman);
    var testResult  = romanTest(romanInstance);
    if(testResult){
        console.log("Test '" + romanTest.name + "' Passed");
    }
    else{
        console.log("Test '" +romanTest.name + "' Failed!!!!!!!!!!!!!");
    }
}