function string1(stringFormat){
    
    let formatedString = stringFormat.replace(/[$,]/g,''); // g- global match 
    let result = parseFloat(formatedString);
    if (result) {
        return result;
    }
    else{
        return 0;
    }
    
}
module.exports = string1;